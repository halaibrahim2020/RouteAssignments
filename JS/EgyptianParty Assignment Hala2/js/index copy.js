/// <reference types="../@types/jquery" />

let closebtn =document.querySelector('.leftMenu .closebtn')
console.log('closebtn is',closebtn);
let openNav = document.querySelector('.home-content .openNav')

let leftMenu = document.querySelector('.leftMenu');
console.log('leftMenu is',leftMenu);
console.log('openNav is',openNav);


let sliderDownH3 = document.querySelectorAll('#sliderDown h3');
console.log('sliderDownH3 is',sliderDownH3);




for (i=0;i<sliderDownH3.length;i++){
    sliderDownH3[i].addEventListener('click',(e)=>{
        // console.log(e.currentTarget)
        
        let target  = e.target
        
        // console.log($(e.target).next())
        // $(e.target).next().toggle()
        // console.log('e.target).next()',$(e.target).next().animate({'height':'5%'}));
        // console.log('e.target).siblings().children()',$(e.target).siblings().children());
        // $(e.target).siblings().children().animate({outerHeight:'0'});
        // $(e.target).siblings().children().hide();

        // $(e.target).next().siblings().children().css('backgroundColor','red');
        // $(e.target).next().siblings().children().css('height','120px');

        // $(e.target).siblings().children().slideDown();
        // $(e.target).siblings().children().animate({outerHeight:'0'});
        // console.log('sliderDownH3[i]',$(e.target))
        // $(e.target).next().siblings().toggle();


        // $(e.target).next().toggle();

        $(e.target).next().animate({height:'toggle',paddingBlock:'toggle',marginBlock:'toggle'},1000);
        // console.log('$(e.target).siblings().find(p)',$(e.target).siblings().find('p').css('backgroundColor','red'));
        // $(e.target).siblings().find('p').animate({height:'0',paddingBlock:'0',marginBlock:'0',display:'none',Text:''},1000);
        // $(e.target).siblings().children().hide();

        // $(e.target).siblings().find('h3').hide()

        // $(e.target).siblings().next().children().hide();
        // $(e.target).next().siblings().children().css('height','120px');

       
            
            // $(e.target).siblings().children().css('backgroundColor','red');
            // console.log("$(e.target).siblings().children()",$(e.target).siblings().children());
            // $(e.target).siblings().children().toggle();
            // $(e.target).next().animate({height:'toggle',paddingBlock:'toggle',marginBlock:'toggle'});
            // $(e.target).siblings().children().hide();
// 
        
        // $(e.target).siblings().find('h3').hide()

        
        })
}



closebtn.addEventListener('click',()=>{
    console.log('in click closebtn');
    // $('.leftMenu').hide();
    $('.leftMenu').animate({width:0,paddingInline:0},1000)
    
})


openNav.addEventListener('click',()=>{
    console.log('in click openNav');
    // $('.leftMenu').show();
    $('.leftMenu').animate({width:'250px',paddingInline:'1%'},1000)
})


// function closeSideBar(){
//     console.log('in click closebtn e');
//     $('.leftMenu').hide();
//     // alert('hhhhh');
//     // leftMenu.hide();
//     // alert('hhhhh');
//     // leftMenu.classList.add('d-none');
//     // leftMenu.classList.add('w-100');
//     // leftMenu.classList.add('display','none');
   
// }

// closebtn
// import moment from 'moment';
$(function() {
    // setTimeout(function() { 
    //    console.log('in set timeout 1000')
    // }, 1000);

//     const dateString = "15-02-2024";
// const dateObject = moment(dateString, "DD-MM-YYYY").toDate();
// console.log('dateObject',dateObject);
// let dateeeeee = Date.parse("04 Dec 1995");
// let dateeeeee = new Date("9 Oct 2024")
// let today = new Date()
// dateeeeee.toLocaleDateString("en-us",{'weekday': 'long'});
// let diff= dateeeeee - today
// console.log('dateeeeee',dateeeeee)
// console.log('today',today)
// console.log('diff',diff.seconds)

// =========
const deadtime = new Date('10/09/2024');
const today = new Date();
const diffTime = Math.abs(deadtime - today);

const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
let diffhours = ((diffDays*1000*60*60*24)- (diffTime))/(60*60*60)
let diffminuts = ((diffDays*1000*60*60*24)- (diffTime))/(60*60*60)- (diffhours*
console.log(diffhours + " hours");
// ======
    let seconds;
    let minutes ;
    // let hours;
    let deadTime = '9/10/2024'
    hello+='hello'
    setInterval(function() {
        console.log(hello)}, 1000);
})

