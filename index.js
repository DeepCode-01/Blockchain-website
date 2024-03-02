let typed = new Typed(".text", {
    strings: ["Websites." , "Smart Contract." , "Dapps.", "Marketplace"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


// for scroll animation


// let sections = document.querySelectorAll('section')

// window.onscroll = ()=>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150 ;
//         let height = sec.offsetHeight;

//         if(top >= offset && top < offset + height){
//             sec.classList.add("show-animate");
//         }
//         else{
//             sec.classList.remove("show-animate"); 
//         }


//     })
// }


// number animation

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    
 
    let difference = endValue - startValue;
    
    let duration = Math.floor(interval / difference);
    
    let counter = setInterval(function () {
        startValue += 1;

        valueDisplay.textContent = startValue;

        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});



