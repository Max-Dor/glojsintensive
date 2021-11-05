const buttonAuth = document.querySelector('.button-auth'),
    modalAuth = document.querySelector('.modal-auth'),
    closeAuth = document.querySelector('.close-auth'),
    logInForm = document.getElementById('logInForm'),
    inputLogin = document.getElementById('login'),
    inputPassword = document.getElementById('password')



buttonAuth.addEventListener('click',() => {
    modalAuth.style.display = 'flex'
})
closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})
