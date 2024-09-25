// alert('in home');

var userinput = document.getElementById('username');
var UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
document.onload=weclcomefun(UserLogin);


function weclcomefun(UserLogin){
    console.log('in welllllllllllllll with user',UserLogin);
    userinput.innerHTML = 'Welcome '+UserLogin;
}