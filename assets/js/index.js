const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

gsap.ticker.lagSmoothing(0)

introText = gsap.to('#header .headline-wrap .char',{
    y:0,
    stagger:0.1,
    
})

gsap.registerPlugin(ScrollTrigger);


// #header .util-area .btn-menu stroke 색상 변경
$('.btn-menu').click(function() {
   
    $('.menu1, .menu2, .menu3').each(function() {
        if ($(this).attr('stroke') === '#000') {
            $(this).attr('stroke', '#fff');  // 검정색으로 변경
        } else {
            $(this).attr('stroke', '#000');  // 흰색으로 변경
        }
    });
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', ()=> {
  menu.classList.toggle('active');
});





//서브메뉴



$('.btn-menu').click(function(){
  
    $('.sub-nav').toggleClass('show');
    $('#header svg').toggleClass('black');
 
  
})



// //처음 로고

gsap.to('.sc-visual svg',{
    scrollTrigger:{
        trigger:".sc-visual ",
        start:"0% 0%",
        end:"100%",
       scrub:0,
       pin:true
    },
    opacity:1,
   
})


//sc-intro 

let mm = gsap.matchMedia();

// max-width: 750px 일 때 ScrollTrigger 비활성화
mm.add("(min-width: 750px)", () => {
    ScrollTrigger.create({
        trigger: ".desc-content.a",
        start: "0% 50%",
        end: "100% 100%",
        onEnter: function () {
            $('[data-target="#data1"]').addClass('on')
        },
    });

    ScrollTrigger.create({
        trigger: ".desc-content.b",
        start: "0% 50%",
        end: "100% 100%",
        onEnter: function () {
            $('[data-target="#data2"]').addClass('on')
        },
        onLeaveBack: function () {
            $('[data-target="#data2"]').removeClass('on')
        }
    });

    ScrollTrigger.create({
        trigger: ".desc-content.c",
        start: "0% 50%",
        end: "100% 100%",
        onEnter: function () {
            $('[data-target="#data3"]').addClass('on')
        },
        onLeaveBack: function () {
            $('[data-target="#data3"]').removeClass('on')
        }
    });
});


//sc-vision video
gsap.to('.sc-vision .img-wrap img',{
    scrollTrigger:{
        trigger:".sc-vision .img-wrap",
        start:"0% 100%",
        end:"100% 0%",
        // markers:true,
       scrub:0
    },
    ease:"none",
    yPercent:-26
    
})



  //sc-visual1 이미지 스크롤
gsap.to('.sc-horizon .thumb-area',{
    scrollTrigger:{
        trigger:".sc-horizon",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
       scrub:0
    },
    // "border-radius":0,
    width:'100%',
    height:'100vh'
    // width:'100%',
    
})

// sc-compare 커서 움직이게 하기
$(window).mousemove(function(e){
    // console.log(e.clientX);
    // console.log(e.clientY);
    x=e.clientX;
    y=e.clientY;

    gsap.to('.cursor',{
        x:x,
        y:y,
    })

})


$('.prd-item').hover(function(){
    idx=$(this).index();
    $('.cursor .img-area').addClass('show');
    $('.cursor .img-area .item').eq(idx).addClass('on').siblings().removeClass('on')

},function(){
    $('.cursor .img-area').removeClass('show');
})


//sc-number
gsap.to('.sc-number .flex .img-wrap img',{
    scrollTrigger:{
        trigger:".sc-number .flex .img-wrap",
        start:"0% 100%",
        end:"100% 0%",
        // markers:true,
       scrub:0
    },
    ease:"none",
    yPercent:-20
    
})

document.querySelectorAll('.total').forEach(function(totalElement) {
    var targetValue = parseFloat(totalElement.getAttribute('data-target').replace(',', ''));
    var startCount = { var: 0 };
    
    gsap.to(startCount, {
      var: targetValue, 
      duration: 1.5, 
      ease: "none",
      onUpdate: function() {
        totalElement.innerHTML = Math.floor(startCount.var).toLocaleString(); // 천의 자리마다 , 붙이기
      },
      scrollTrigger: {
        trigger: totalElement.closest('.total-item'),
        toggleActions: "restart none reverse none",
      }
    });
  });

//sc-visual2 비디오 스크롤
gsap.to('.sc-visual2 .thumb',{
    scrollTrigger:{
        trigger:".sc-visual2",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
       scrub:0
    },
    "border-radius":0,
    width:'100vw',
    height:'100vh'

})


//sc-invest

$('[data-scroll-y]').each(function(i,el){
    //반복문을 돌려 각각 데이터값으로 움직이도록 설정
    gsap.to(el,{
        scrollTrigger: {
            trigger: el,
            start:"0% 100%",
            end:"100% 0%",
            // markers:true,
            scrub: 2,
        },
        yPercent:el.dataset.scrollY
    })
})






// headline animation

$('[data-motion="headline"]').each(function(){
    gsap.to($(this).find('.char'),{
        scrollTrigger:{
            trigger:$(this),
            start:"0% 50%",
            end:"100% 100%",
            // markers:true,
        //    scrub:0
        },
        y:0,
        stagger:0.1,
        
    })
})


$('.btn-title.child').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
        $(this).removeClass('on').siblings('.sub').slideUp();

    }else{
        $('.btn-title').removeClass('on').siblings('.sub').slideUp();
        $(this).addClass('on').siblings('.sub').slideDown();
    }

})

