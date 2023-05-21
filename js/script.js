const btn  = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay')
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter')
let scrollStarted = false

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu')
})
document.addEventListener('scroll', scrollPage);

function scrollPage(){
    const scrollPos = window.scrollY;
    if(scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 100 && scrollStarted){
        reset()
        scrollStarted = false
    }
}

function countUp() {
    counters.forEach(counter => {
       const updateCount = ()=>{
         // count target
         let target = +counter.dataset.target;

         // get the current count value
         let c = +counter.innerText;
 
         // create an increment
         let increment = target / 100;
 
         // if counter is less than target, add increment
         if(c < target){
            // round up and set counter value
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCount, 75);
         } else{
            counter.innerText = target;
         }
       }

       updateCount()


    })
}

function reset(){
    counters.forEach(counter => {
        counter.innerText = 0;
    })
}