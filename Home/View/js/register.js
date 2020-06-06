let elInput = document.querySelector('#agree-input')
let elRegister = document.querySelector('.ban')
let elAgreeContent = document.querySelector('.agree>em')
let elAgree = document.querySelector('.agree-content')

elInput.addEventListener('click', () => {
    if (elInput.checked) {
        elRegister.className = 'register'
    } else {
        elRegister.className = 'ban'
    }
})

elAgreeContent.addEventListener('click', () => {
    if (elAgree.style.display === 'none') {
        elAgree.style.display = 'block'
    }
})

let elYes = document.querySelector('.yes')
let elNo = document.querySelector('.no')

elYes.addEventListener('click', () => {
    elInput.checked = true
    elRegister.className = 'register'
    elAgree.style.display = 'none'
})

elNo.addEventListener('click', () => {
    elInput.checked = false
    elRegister.className = 'ban'
    elAgree.style.display = 'none'
})