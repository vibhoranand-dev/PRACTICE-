let usernameInput = document.getElementById("usernameInput");
let searchBtn = document.getElementById("searchBtn");
let loading = document.getElementById("loading");
let errorMsg= document.getElementById("errorMsg");
let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let bio = document.getElementById("bio");
let followers = document.getElementById("followers");
let repos = document.getElementById("repos");
let profileCard = document.getElementById("profileCard");
let place = document.getElementById("place");





function dataUser(){
   loading.classList.remove("hidden");
    const username= usernameInput.value.trim();
    let url = `https://api.github.com/users/${username}`;
    console.log(url);
    
fetch(url) 
 .then(res=> {
   if(!res.ok){
      throw new Error("User not found");
   }
   return res.json();
})
 .then(data=>{
   loading.classList.add("hidden");
   console.log(data);
   
    name.textContent = data.name;
    followers.textContent = data.followers;
    bio.textContent = data.bio;
    place.textContent = data.location;
    repos.textContent= data.public_repos;
    profileCard.style.display ="block"
    avatar.src=data.avatar_url;
 })
 .catch(error=>{
   loading.classList.add("hidden");
   errorMsg.textContent = "User not found";
   profileCard.style.display=="none";
   errorMsg.style.display="block"
 });
}

 searchBtn.addEventListener("click",function(){
    dataUser()

 })