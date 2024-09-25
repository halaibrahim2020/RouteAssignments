// ====== SignUp =================
var signUpName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword'); 
var btnSignUp = document.getElementById('btnSignUp');
// ======== End SignUp =============



var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var btnLogin = document.getElementById('btnLogin');
var regex = {
    signName:/^[a-zA-Z]{3,10}$/,
    signEmail:/[^@]+@[^@]+\.[^@]+$/,
    signPassword:/^[a-zA-Z.]{0,10}[0-9]{0,10}$/,
}
var p = document.querySelector('p');

if (btnSignUp) {
    btnSignUp.addEventListener('click',function(){
        SignUpFun();
    })
}


all_users_data = [];

function SignUpFun(){
    console.log('in SignUpFun');
    validationForm(signup=true)
}

if (btnLogin){
    btnLogin.addEventListener('click',function(){
        loginFn();
    })
}


function loginFn(){
    console.log('in loginFn');
    validationForm(signup=false);

}
function validationForm(signup=false){
    console.log('in validationForm - signup',signup);
    
    // if(checkValidationEmail(signup) && checkValidationPassword(signup) ){
    // if(CheckUserName(signup) ==true && checkValidationEmail(signup)==true && checkValidationPassword(signup)==true){
    if (signup==true){
        if(CheckUserName(signup)==true && checkValidationEmail(signup)==true && checkValidationPassword(signup)==true){
            console.log('checkValidationEmail and checkValidationPassword sign upppp are true  ')
            userData = {
                name:signUpName.value,
                email:signupEmail.value,
                password:signupPassword.value,
            }
            all_users_data.push(userData);
            localStorage.setItem('UserData',JSON.stringify(all_users_data));
            p.innerHTML='';
            p.style.color = 'white';
            p.style.fontSize='20px';
        }
        else{
            console.log('checkValidationEmail and checkValidationPassword in sing uppppp  are false -incorrect email or password   ')
            p.innerHTML='incorrect email or password';
            // p.classList.replace('text-white','text-danger');
            p.style.color = 'red';
            p.style.fontSize='20px';
        }
    }
    else{
        if(checkValidationEmail(signup)==true && checkValidationPassword(signup)==true){
            console.log('checkValidationEmail and checkValidationPassword sign innnnnnn are true  ')
            p.innerHTML='';
            p.style.color = 'white';
            p.style.fontSize='20px';
        }
        else{
            console.log('checkValidationEmail and checkValidationPassword are false in sign innn -incorrect email or password - signupid ',signup)
            p.innerHTML='incorrect email or password';
            // p.classList.replace('text-white','text-danger');
            p.style.color = 'red';
            p.style.fontSize='20px';
        }
    }
}
   
    // if(regex[signinEmail.id].test(signinEmail.value)){
    //     console.log('validation trueeeeeeee');
    //     users_data = {
    //         email:signinEmail.value,
    //         password:signinPassword.value,
            
    //     }
        
    //     all_users_data.push(users_data);
    //     console.log('validation trueeeeeeee- all_users_data:',all_users_data);
    //     localStorage.setItem('users_data',JSON.stringify(all_users_data));

    //     checkExitEmail(signinEmail.value,signinPassword.value);

    // }
    // else{
    //     console.log('valudation falseeee')
    // }



function CheckUserName(signup=false){
    console.log('in CheckUserName signup',signup);
    if (signup==true){
       if(regex['signName'].test(signUpName.value)){
        console.log('validation CheckUserName singupppf trueeeeeeee');
        return true;
      }
       else{
        console.log('validation CheckUserName singupppf falseeeeee');
        return false;
        
      }
    }
   return true;
      
 
}
function checkValidationEmail(signup=false){
    console.log('in checkValidationEmail signup',signup);
    if (signup==true){
       if(regex['signEmail'].test(signupEmail.value)){
        console.log('validation checkValidationEmail singupppf trueeeeeeee');
        return true;
      }
       else{
        console.log('validation checkValidationEmail singupppf falseeeeee');
        return false;
        
      }
    }
    else if (signup==false){
    if(regex['signEmail'].test(signinEmail.value)){
        console.log('validation checkValidationEmail sing innnnnnn trueeeeeeee');
        return true;
    }
    else{
        console.log('validation checkValidationEmail sign innnnn falseeeeee');
        return false;
        
    }
      
 }
}

function checkValidationPassword(signup=false){
    console.log('in checkValidationPassword, signup',signup=false);
    if (signup=true){
        if (signupPassword){
            if(regex['signPassword'].test(signupPassword.value)){
                console.log('validation checkValidationPassword signupppp trueeeeeeee');
                return true;
            }
            else{
                console.log('validation checkValidationPassword signupppppp up faseeeee');
                return false;
                
            }
        }
        else{
            signup = false;
            console.log('in checkValidationPassword cccccccccase jjjjjjj - signup ',signup)
            if(regex['signPassword'].test(signinPassword.value)){
                console.log('validation checkValidationPassword sign innnnnn trueeeeeeee');
                return true;
            }
            else{
                console.log('validation checkValidationPassword singnnn i nn faseeeee');
                return false;
                
            }
        }
        
    }
    else if (signup=false){
        console.log('signinPassword isdddddddddddddd ',signinPassword)
        if(regex['signPassword'].test(signinPassword.value)){
            console.log('validation checkValidationPassword sign innnnnn trueeeeeeee');
            return true;
        }
        else{
            console.log('validation checkValidationPassword singnnn i nn faseeeee');
            return false;
            
        }
    
    }
}


// function checkExitEmail(email,password){
//     console.log('checkExitEmail emial is ',email);
//     console.log('checkExitEmail password is ',password);
//     if (localStorage.getItem('users_data')){
//         Jget_users_data = JSON.parse(localStorage.getItem('users_data'))
//         console.log('checkExitEmail Jget_users_data ',Jget_users_data);
//     }

// }
