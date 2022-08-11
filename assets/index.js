var num = document.querySelector('.number-input')
const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
    btn.addEventListener('click', btnClick)
})
num.addEventListener('keypress', numKeyPress)
const theme_slider = document.querySelector('#theme-slider')
theme_slider.addEventListener('input', themeChange)


var theme_colors = [
    {
        body: '#3B4664',
        num_field: '#181F32',
        title: 'white',
        theme_txt: 'white',
        theme_slider_thumb: '#CF4034',
        theme_slider_bg: '#252D44',
        theme_slider_numbering: 'white',
        buttons_bg: '#252D44',
        btn_bg: '#EAE3DB',
        btn_shadow: '#B0A295',
        del_reset_btn_bg: '#647298',
        del_reset_btn_shadow: '#414E71',
        equal_btn_bg: '#CE3E2F',
        equal_btn_shadow: '#8F2316',

        num_field_text_color: 'white',
        equal_btn_color: 'white',
        reset_del_btn_color: 'white',
        btn_color: 'black'
    },
    {
        body: '3B4664',
        num_field: '181F32',
        title: 'white',
        theme_txt: 'white',
        theme_slider_thumb: 'CF4034',
        theme_slider_bg: '252D44',
        theme_slider_numbering: 'white',
        buttons_bg: '252D44',
        btn_bg: 'EAE3DB',
        btn_shadow: 'B0A295',
        del_reset_btn_bg: '647298',
        del_reset_btn_shadow: '414E71',
        equal_btn_bg: 'CE3E2F',
        equal_btn_shadow: '8F2316',

        num_field_text_color: '414E71',
        equal_btn_color: 'CE3E2F',
        reset_del_btn_color: '8F2316',
        btn_color: '414E71'
    },
    {
        body: '3B4664',
        num_field: '181F32',
        title: 'white',
        theme_txt: 'white',
        theme_slider_thumb: 'CF4034',
        theme_slider_bg: '252D44',
        theme_slider_numbering: 'white',
        buttons_bg: '252D44',
        btn_bg: 'EAE3DB',
        btn_shadow: 'B0A295',
        del_reset_btn_bg: '647298',
        del_reset_btn_shadow: '414E71',
        equal_btn_bg: 'CE3E2F',
        equal_btn_shadow: '8F2316',

        num_field_text_color: '414E71',
        btn_color: '414E71',
        equal_btn_color: 'CE3E2F',
        reset_del_btn_color: '8F2316',
    }
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
var ts = theme_colors[ev.currentTarget.value-1]
document.querySelector('body').style.background = ts.body
num.style.background = ts.num_field
num.style.color = ts.num_field_text_color
document.querySelector('.title').style.background = ts.title

// THIS SPACE IS FOR THE THEME

document.querySelector('.buttons').style.background = ts.buttons_bg
document.querySelectorAll('.btn').forEach(el=>{
    el.style.background = ts.btn_bg
    el.style.borderColor = ts.btn_shadow
    el.style.color = ts.btn_color
})
var del_btn = document.querySelector('.del-btn')
var reset_btn = document.querySelector('.reset-btn')
var equal_btn = document.querySelector('.equal-btn')

equal_btn.style.background = ts.equal_btn_bg
equal_btn.style.borderColor = ts.equal_btn_shadow
equal_btn.style.color = ts.equal_btn_color

del_btn.style.background = ts.del_reset_btn_bg
reset_btn.style.background = ts.del_reset_btn_bg

del_btn.style.borderColor = ts.del_reset_btn_shadow
reset_btn.style.borderColor = ts.del_reset_btn_shadow

del_btn.style.color = ts.reset_del_btn_color
reset_btn.style.color = ts.reset_del_btn_color


}