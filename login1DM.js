const loginBtn=document.querySelector("#Login");
const registerBtn=document.querySelector("#register");
const loginForm=document.querySelector(".login-form");
const registerForm=document.querySelector(".register-form");

loginBtn.addEventListener('click' , () => {
    loginBtn.style.backgroundColor = "rgb(16, 58, 67)";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left="50%";
    registerForm.style.left="-50%";
    loginForm.style.opacity=1;
    registerForm.style.opacity=0;
                      // Animation
    document.querySelector(".col-1").style.borderRadius =" 0 30% 20% 0";

    
});
registerBtn.addEventListener('click' , () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "rgb(16, 58, 67)";

    loginForm.style.left="150%";
    registerForm.style.left="50%";
    loginForm.style.opacity=0;
    registerForm.style.opacity=1;
                       // Animation
     document.querySelector(".col-1").style.borderRadius =" 0 20% 30% 0";

});