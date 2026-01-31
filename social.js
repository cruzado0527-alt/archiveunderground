import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const register = document.getElementById("register");
const login = document.getElementById("login");
const postBtn = document.getElementById("postBtn");

const postText = document.getElementById("postText");
const postImage = document.getElementById("postImage");
const feed = document.getElementById("feed");
const postsContainer = document.getElementById("posts");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nicknameInput = document.getElementById("nickname");

register.onclick = async ()=>{
  const u = await createUserWithEmailAndPassword(auth,emailInput.value,passwordInput.value);
  await set(ref(db,"users/"+u.user.uid),{nickname:nicknameInput.value,email:emailInput.value});
};

login.onclick = async ()=>{
  await signInWithEmailAndPassword(auth,emailInput.value,passwordInput.value);
};

onAuthStateChanged(auth,user=>{
  if(user){ feed.style.display="block"; } else { feed.style.display="none"; }
});

postBtn.onclick = async ()=>{
  const user = auth.currentUser;
  const text = postText.value;
  let imageURL = null;

  if(postImage.files[0]){
    const formData = new FormData();
    formData.append("file", postImage.files[0]);
    formData.append("upload_preset", "ritualsocial");

    const res = await fetch("https://api.cloudinary.com/v1_1/dy0mymue9/image/upload", {
      method:"POST",
      body:formData
    });
    const data = await res.json();
    imageURL = data.secure_url;
  }

  const postRef = push(ref(db,"posts"));
  await set(postRef,{uid:user.uid,text, imageURL,timestamp:Date.now()});
  postText.value=""; postImage.value="";
};

onValue(ref(db,"posts"),snap=>{
  postsContainer.innerHTML="";
  snap.forEach(p=>{
    const d = p.val();
    const userRef = ref(db,"users/"+d.uid);
    let nickname = "Anon";
    onValue(userRef,u=>{
      if(u.exists()){ nickname = u.val().nickname; }
      postsContainer.innerHTML+=`
        <div class="post">
          <p><strong>${nickname}</strong></p>
          <p>${d.text}</p>
          ${d.imageURL?`<img src="${d.imageURL}">`:""}
        </div>
      `;
    },{onlyOnce:true});
  });
});
