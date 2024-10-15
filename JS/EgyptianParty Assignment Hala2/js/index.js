/// <reference types="../@types/jquery" />


$('.closebtn').on('click',()=>{
    console.log('on click close')
    $('.open').css('left','-270px');
})


$('.openIcon').on('click',()=>{
    console.log('on click openIcon')
    $('.open').css('left','0')
})

$('.accordion h3').on('click',(e)=>{
    console.log('on clincl .accordion h3');
    console.log($(e.target));
    $(e.target).next().slideToggle();
    
    $('.accordion p').not($(e.target).next()).slideUp();
})

// ========= counter ==============
let time = setInterval(()=>{
    let now = new Date().getTime();
    // console.log('now is ',now)
    let deadlineTime = new Date('2024-10-17').getTime();
    // console.log('deadlineTime is ',deadlineTime)
    let diffTime = deadlineTime - now
    let days = Math.floor(diffTime / (1000*60*60*24));
    // console.log('diffTime',diffTime)
    // console.log('days',days);
    let hours = Math.floor(diffTime%(1000*60*60*24)/(1000*60*60))
    let minutes = Math.floor(diffTime%(1000*60*60*24)/(1000*60))
    let seconds = Math.floor(diffTime%(1000*60*60*24)/(1000))
    // console.log('hours',hours   );
    // console.log('minutes',minutes   );
    // console.log('seconds',seconds   );
    displayCounterData(days,hours,minutes,seconds)
},1000);
// ========= End Counter ==========


function displayCounterData(days,hours,minutes,seconds){
    let cartona = `
        <div class="col-md-6 col-lg-3">
            <div class="card p-4 bg-transparent border-danger text-danger">
                <h3>${days} D</h3>
            </div>
        </div>

           <div class="col-md-6 col-lg-3">
            <div class="card p-4 bg-transparent border-danger text-danger">
                <h3>${hours} H</h3>
            </div>
        </div>

           <div class="col-md-6 col-lg-3">
            <div class="card p-4 bg-transparent border-danger text-danger">
                <h3>${minutes} M</h3>
            </div>
        </div>

           <div class="col-md-6 col-lg-3">
            <div class="card p-4 bg-transparent border-danger text-danger">
                <h3>${seconds} S</h3>
            </div>
        </div>

    `
    document.getElementById('counterData').innerHTML=cartona;
}


// $('textarea').on('keyup',(e)=>{

//     let textLength = $(e.target).val().length;
    
//     diffChar<=0 
//     $('#remainingchars').text(
//         100-textLength <= 0 ? "your available character finished" : 100-textLength
//     )
// })

$('textarea').on('keyup',(e)=>{
    console.log('text click key up');
    let textLength = $(e.target).val().length;
    console.log('textLength',textLength);
    $('#remainingchars').text(
        100-textLength <=0 ? "your available character finished" : 100-textLength
    )

})