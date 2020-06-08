let one = document.querySelector('.one>div:first-child')
let two = document.querySelector('.one>div:last-child')
let oneOne = document.querySelector('.two>div:first-child')
let twoTwo = document.querySelector('.two>div:last-child')

let father = document.querySelector('.father')
let son = document.querySelector('.son')


one.addEventListener('click', () => {
    father.style.display = ''
    son.style.display = 'none'
})

two.addEventListener('click', () => {
    father.style.display = 'none'
    son.style.display = ''
})

oneOne.addEventListener('click', () => {
    father.style.display = ''
    son.style.display = 'none'
})
twoTwo.addEventListener('click', () => {
    father.style.display = 'none'
    son.style.display = ''
})