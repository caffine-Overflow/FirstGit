const form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();

    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;

    let UserDetails ={
        username,
        email,
        phone
    }
    localStorage.setItem('UserDetails',JSON.stringify(UserDetails));

})