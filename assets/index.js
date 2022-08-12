var num = document.querySelector('.number-input')
const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
    btn.addEventListener('click', btnClick)
})
num.addEventListener('keypress', numKeyPress)
const theme_slider = document.querySelector('#theme-slider')
theme_slider.addEventListener('input', themeChange)


var theme_colors = [
    'theme1','theme2','theme3'
]






function btnClick(ev) {
    console.log('hello world');
    var target = ev.currentTarget
    var classes = target.className
    console.log(classes);

    if (classes.includes('reset')) {
        num.value = ''
    }
    else if (classes.includes('del')) {
        var new_value = num.value.slice(0, -1)
        num.value = new_value
    }
    else if (classes.includes('equal')) {
        equalFunc()
    }
    else {
        num.value += target.innerHTML
    }
}
function equalFunc() {
    var n = num.value
    if (n.includes('x')) {
        n = n.replace('x', '*')
    }
    var res = eval(n)
    console.log(res);
    num.value = res
}
function numKeyPress(ev) {
    var key = ev.key
    if (key === 'Enter') {
        document.querySelector('.equal-btn').click()
    }
    else if (key === 'x' || key === '+' ||
        key === '-' || key === '/' || key === '.' ||
        key === '0' || key === '1' || key === '2' || key === '3'
        || key === '4' || key === '5' || key === '6' || key === '7'
        || key === '8' || key === '9') {

    }
    else {
        ev.preventDefault()
    }
}
function themeChange(ev) {
    const body = document.querySelector('body')
    body.classList.remove('theme1')
    body.classList.remove('theme2')
    body.classList.remove('theme3')
    body.classList.add(theme_colors[ev.target.value-1])
}