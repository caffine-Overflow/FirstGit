//on form submission ,collect details

const form=document.querySelector("form");
form.addEventListener("submit",function (event){
    event.preventDefault();
     
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    
    //store in local storage
    localStorage.setItem('Username',username)
    localStorage.setItem('Email',email)
    localStorage.setItem('Phone',phone)
    
})