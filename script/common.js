// header, footer JS
const sub = document.querySelectorAll('.sub')
const nav = document.querySelectorAll('nav > ul > li')
const nav_bg = document.querySelector('.nav_bg')
function sub_func(status){
    nav_bg.style.display = status
    for(let i of sub){i.style.display = status}
}
sub_func('none')
for(let i of nav){
    i.addEventListener('mouseover',function(){
        sub_func('block')
        i.lastElementChild.style.backgroundColor = '#fff'
    })
    i.addEventListener('mouseout',function(){
        sub_func('none')
        i.lastElementChild.style.backgroundColor = 'rgba(255,255,255,0)'
    })
}