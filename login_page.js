const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const ragisterLink = document.querySelector('.ragister-link');
const btnpopup= document.querySelector('.login-btn');
const cancelicon=document.querySelector('.cancel-icon');

ragisterLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})


