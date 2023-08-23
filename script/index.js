const model_slide = new Swiper('#model_slide',{
    slidesPerView:3,
    centeredSlides:true,
    loop:true,
    autoplay:{delay:2000},
    speed:800,
    scrollbar:{el:'#model_slide .swiper-scrollbar'},
    on:{
        init:function(){
            //슬라이드가 변경되기 전 초기 실행함수
            this.slides[this.activeIndex].querySelector('.txt').style.opacity = '1'
            this.slides[this.activeIndex].style.backgroundSize = '100%'
            this.slides[this.activeIndex].style.backgroundPosition = 'center -10px'
            this.slides[this.activeIndex].style.opacity = '1'
        },
        slideChange:function(){
            //슬라이드 변경될때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0
            this.slides.forEach(target => {
                target.querySelector('.txt').style.opacity = '0';
                target.style.backgroundSize = '60%';
                target.style.backgroundPosition = 'center';
                target.style.opacity = '0.5';
                /* target 자체가 슬라이드라 쿼리셀렉터 빼기 */
            })
            //2. 활성화 슬라이드만 opacity:1
            this.slides[this.activeIndex].querySelector('.txt').style.opacity = '1';
            this.slides[this.activeIndex].style.backgroundSize = '100%';
            this.slides[this.activeIndex].style.backgroundPosition = 'center -10px';
            this.slides[this.activeIndex].style.opacity = '1';
        }
    },
    breakpoints:{
        0:{slidesPerView:1, centeredSlides:false,},
        900:{slidesPerView:2, centeredSlides:false,},
        1500:{slidesPerView:3, centeredSlides:true,},
    }
});
const mini_slide = new Swiper('#mini_slide',{
    slidesPerView:'auto', //breakpoints옵션 추가시 'auto'/ 한번에 보이는 슬라이드 수
    spaceBetween:30, // 여백
    loop:true,
    breakpoints:{
        200:{slidesPerView:1},
        700:{slidesPerView:2},
        1000:{slidesPerView:3},
        1300:{slidesPerView:4},
        1600:{slidesPerView:5}
    }
})
const txt = document.querySelectorAll('#mini_slide .txt')
const play = document.querySelectorAll('#mini_slide p > img')
const mini = document.querySelectorAll('#mini_slide .swiper-slide')
for(let i of txt){i.style.display= 'none'}
for(let i of play){i.style.display= 'none'}
/* mini[0].addEventListener('mouseover',function(){
    txt[0].style.display = 'inline-block'
    play[0].style.display = 'inline-block'
}) */
mini.forEach(function(target,index,array){
    target.addEventListener('mouseover',function(){
        txt[index].style.display = 'inline-block'
        play[index].style.display = 'inline-block'
    })
})
mini.forEach(function(target,index,array){
    target.addEventListener('mouseout',function(){
        txt[index].style.display = 'none'
        play[index].style.display = 'none'
    })
})
/* model 슬라이드 */