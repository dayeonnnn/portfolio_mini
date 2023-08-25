/* 내용 */
const list = document.querySelectorAll('.contents .list a')
const content = document.querySelectorAll('.infor')
for(let i of content){i.style.display='none'}
content[0].style.display='block'
list.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of list){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of content){i.style.display='none'}
        content[i].style.display = 'block'
    })
})