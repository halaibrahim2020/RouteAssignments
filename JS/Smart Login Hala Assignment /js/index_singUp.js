// ====== SignUp =================
var signUpName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword'); 
var btnSignUp = document.getElementById('btnSignUp');
var isEmailExit=false;
// ======== End SignUp =============


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
if (localStorage.getItem('UsersData')){
    allUsersData = JSON.parse(localStorage.getItem('UsersData'));
}
else{
    allUsersData = [];
}


function SignUpFun(){
    // console.log('in SignUpFun');
    if (validationForm()){
        // console.log('in SignUpFun reutn true');
        console.log('in SignUpFun - validationForm return true')
        checkEmailExit = checkExist();
        console.log('in SignUpFun - checkEmailExit return',checkEmailExit)
        if (checkExist()==false){
               
            console.log('in validationForm after check exit case  false' )
            userData = {
            name:signUpName.value,
            email:signupEmail.value,
            password:signupPassword.value,
            }

            allUsersData.push(userData);
            localStorage.setItem('UsersData',JSON.stringify(allUsersData));
            p.innerHTML='Success';
            p.style.color = 'green';
            p.style.fontSize='20px';
           }
        else if (checkExist()==true){
            console.log('in validationForm after check exit case  trureee' )
            p.innerHTML='This Email is registed Before';
            p.style.color = 'red';
            p.style.fontSize='20px';
        }
    }
    else{
        console.log('in SignUpFun reutn validationForm false');
    }
    
}

function validationForm(signup=false){
    // console.log('in validationForm - signup',signup);
    // console.log('from checkl emoty retrn is ',checkEmpty())
    if (checkEmpty()==true){
        // console.log('from checkl emoty retrn case trurrrrrrr ',)
        if(CheckUserName()&& checkValidationEmail() && checkValidationPassword()==true){
            // console.log('checkValidationEmail and checkValidationPassword sign upppp are true  ')
           
            return true;
            
        }
        else{
            // console.log('checkValidationEmail and checkValidationPassword in sing uppppp  are false -incorrect email or password   ')
            p.innerHTML='incorrect email or password';
            p.style.color = 'red';
            p.style.fontSize='20px';
            return false;
        }

            
      }
    };
    
        
    
   

   


function CheckUserName(signup=false){
    // console.log('in CheckUserName signup',signup);
    if (signup==true){
       if(regex['signName'].test(signUpName.value)){
        // console.log('validation CheckUserName singupppf trueeeeeeee');
        return true;
      }
       else{
        // console.log('validation CheckUserName singupppf falseeeeee');
        return false;
        
      }
    }
   return true;
      
 
}
function checkValidationEmail(){
    // console.log('in checkValidationEmail signup');
       if(regex['signEmail'].test(signupEmail.value)){
        // console.log('validation checkValidationEmail singupppf trueeeeeeee');
        return true;
      }
       else{
        // console.log('validation checkValidationEmail singupppf falseeeeee');
        return false;
        
      }
    }
      
 


function checkValidationPassword(){
    // console.log('in checkValidationPassword, signup',);
    
        if (signupPassword){
            if(regex['signPassword'].test(signupPassword.value)){
                // console.log('validation checkValidationPassword signupppp trueeeeeeee');
                return true;
            }
            else{
                console.log('validation checkValidationPassword signupppppp up faseeeee');
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


function checkEmpty(){
// console.log('in checkEmpty');
isEmailExit = false
if (signUpName.value=='' || signupEmail.value=='' || signupPassword.value==''){
    console.log('fileds required')
    p.innerHTML='All inputs is required';
    p.style.color = 'red';
    p.style.fontSize='20px';
    return false;
 }
 else{
    p.innerHTML='';
    p.style.color = 'white';
    p.style.fontSize='20px';
    return true;
 }
};


function checkExist(){
        userData = {
            name:signUpName.value,
            email:signupEmail.value,
            password:signupPassword.value,
        }

    // console.log('in checkExist(userData ',userData);
    console.log('in checkExist(allUsersData ',allUsersData);
    
    if (allUsersData.length>0){
       for (var i=0;i<allUsersData.length;i++){
        console.log('iin checkExist - allUsersData[i].email',allUsersData[i].email);
        console.log('iin checkExist - userData.email',userData.email);
        if (allUsersData[i].email==(signupEmail.value)){
            console.log('iin checkExist - yes include emaillllll ')
            // p.innerHTML='This Email is registed Before';
            // p.style.color = 'red';
            // p.style.fontSize='20px';
            isEmailExit=true;
            console.log('in checkExist consume return case exitttt true');

            // return true;
        }
        else{
            // p.innerHTML='';
            // p.style.color = 'white';
            // p.style.fontSize='20px';
            console.log('in checkExist consume return false not exittttt');
            console.log('allUsersData[i].email',allUsersData[i].email);
            console.log('userData.email',signupEmail.value);

            
            // return false;
            isEmailExit=false;
        }
       

    }
    // if (localStorage.getItem('UserData')){
    //     AllUserData = JSON.parse(localStorage.getItem('UserData'));;
    //     if 

    // }
    return isEmailExit;
}
    else{
        console.log('in checkExist case falssssssssse  no allUsersData')
        isEmailExit=false; 
        return isEmailExit;
    }
}
