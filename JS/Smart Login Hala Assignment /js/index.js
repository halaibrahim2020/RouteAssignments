
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var btnLogin = document.getElementById('btnLogin');
var UserLogin;
var isUserExit=false;
var regex = {
    signName:/^[a-zA-Z]{3,10}$/,
    signEmail:/[^@]+@[^@]+\.[^@]+$/,
    signPassword:/^[a-zA-Z.]{0,10}[0-9]{0,10}$/,
}
var p = document.querySelector('p');

if (localStorage.getItem('UsersData')){
    allUsersData = JSON.parse(localStorage.getItem('UsersData'));
}
else{
    allUsersData = [];
}



if (btnLogin){
    btnLogin.addEventListener('click',function(){
        loginFn();
    })
}


function loginFn(){
    console.log('in loginFn');
    reutn_validation = validationForm();
    console.log('in loginFn reutn_validation',reutn_validation)
    if(validationForm()==true){
        console.log('you can loign true validation')
        if(checkEmailPasswordExist()==true){
            console.log('in loginFn - return checkEmailPasswordExist reutn true ,');

            goToHomeFun();
            // window.location.replace("/home.html");
        }
        else{
            p.innerHTML='Invalid email or password';
             p.style.color = 'red';
            p.style.fontSize='20px';
             return false;
            console.log('in loginFn - return checkEmailPasswordExist reutn falseeee ,')
        }
        

    }
    else{
        p.innerHTML='Write correct Email Or Pass';
        p.style.color = 'red';
       p.style.fontSize='20px';
        return false;
        console.log('you cannot loign false validation')
    }
}
function validationForm(){
    console.log('in validationForm login');

    if(checkValidationEmail()==true && checkValidationPassword()==true){
            p.innerHTML='';
            p.style.color = 'white';
            p.style.fontSize='20px';
            return true;
    }
    else{
        console.log('checkValidationEmail and checkValidationPassword are false in sign innn -incorrect email or password -  ',)
        p.innerHTML='incorrect email or password';
        p.style.color = 'red';
        p.style.fontSize='20px';
        return false;
    }

   


function checkValidationEmail(){
    console.log('in checkValidationEmail');
    
   
    if(regex['signEmail'].test(signinEmail.value)){
        console.log('validation checkValidationEmail sing innnnnnn trueeeeeeee');
        return true;
    }
    else{
        console.log('validation checkValidationEmail sign innnnn falseeeeee');
        return false;
        
    }
}
      
 


function checkValidationPassword(){
    console.log('in checkValidationPassword');

           
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


function checkEmailPasswordExist(){
        userData = {
            email:signinEmail.value,
            password:signinEmail.value,
        }

    console.log('in checkExist(allUsersData ',allUsersData);
    
    if (allUsersData.length>0){
       for (var i=0;i<allUsersData.length;i++){
        console.log('iin checkExist - allUsersData[i].email',allUsersData[i].email);
        console.log('iin checkExist - userData.email',userData.email);
        // if (allUsersData[i].email==(signinEmail.value) && allUsersData[i].password ==(signinPassword.value)){
        //     console.log('iin checkExist - yes include emaillllll ')
        //     isUserExit=true;
        //     UserLogin = allUsersData[i].name;
        //     console.log('in checkEmailPasswordExist consume return case exitttt true');

        //     // return isUserExit;
        // }
        if (allUsersData[i].email==(signinEmail.value)){
            console.log('iin checkExist - yes include emaillllll ')
            if(allUsersData[i].password ==(signinPassword.value)){
                isUserExit=true;
                UserLogin = allUsersData[i].name;
                console.log('in checkEmailPasswordExist valid passord ');
            }
            else{
                // isUserExit=false;
                console.log('in checkEmailPasswordExist not valid  passord ');
            }
           

            // return isUserExit;
        }
        else{
            // p.innerHTML='';
            // p.style.color = 'white';
            // p.style.fontSize='20px';
            console.log('in checkEmailPasswordExist consume return false not exittttt');
            console.log('allUsersData[i].email',allUsersData[i].email);
            console.log('userData.email',signinEmail.value);

            
            // return false;
            // isUserExit=false;
            // return isUserExit;
        }
    //    return isUserExit;

        }
    // if (localStorage.getItem('UserData')){
    //     AllUserData = JSON.parse(localStorage.getItem('UserData'));;
    //     if 

    // }
    console.log('retutn from checkEmailPasswordExist - isUserExit ',isUserExit)
    return isUserExit;
}
    else{
        console.log('in checkExist case falssssssssse  no allUsersData')
        isUserExit=false; 
        return isUserExit;
    }
}

function goToHomeFun(){
    console.log('in goToHomeFun - UserLogin is ',UserLogin);
    localStorage.setItem('UserLogin',JSON.stringify(UserLogin));

    // window.location.replace("/home.html");

    // welcomeUser = '/home.html'.document.getElementById('username');
    window.location = '/home.html?UserLogin=' + UserLogin;

    // console.log('in goToHomeFun - welcomeUser ',welcomeUser);
    // welcomeUser.innerHTML= 'Welcome'.join(UserLogin);
    // console.log('in goToHomeFun - welcomeUser is ',welcomeUser);
}