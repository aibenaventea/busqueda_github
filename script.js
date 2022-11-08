let userLogin = document.querySelector(".login");
// console.log(userLogin);
let searchBtn = document.querySelector(".btn")
// console.log(searchBtn);
let userDataDiv = document.querySelector(".userData");
// console.log(userDataDiv);
let currentUserLogin = "";
// console.log(currentUserLogin);
let url = "";
// console.log(url);


function getLogin() {
    currentUserLogin = userLogin.value;
    console.log(currentUserLogin);
    url = `https://api.github.com/users/${currentUserLogin}`;
    console.log(url);
    apiGitHub(url);
} 

function basicData(data){
    let userData = `
                    <div class="userInfo">
                    <img class="userImg" src="${data.avatar_url}" alt="${data.login}">
                    <div class="userInfo2">
                        <p>Login: ${data.login}</p>
                        <p>Name: ${data.name}</p>
                    </div>
                    
                    </div>
                    `
    // console.log(userData);
    return userData;
}

const apiGitHub = async (url)=> {
    let response = await fetch(url);
    let userJson = await response.json()
    console.log(userJson);
    userDataDiv.innerHTML = basicData(userJson);
}

searchBtn.addEventListener("click", () => {
    getLogin();
})
