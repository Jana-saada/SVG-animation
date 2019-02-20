const burger = document.querySelector(".burger");
const lineOne = burger.querySelector(".line-one");
const lineTwo = burger.querySelector(".line-two");
const lineThree = burger.querySelector(".line-three");
const lines = [lineOne,lineTwo,lineThree];
var tlm =new TimelineMax ();
const toggeleMenu =  new TimelineMax ({paused:true , reversed:true});

toggeleMenu
.to(lineTwo,.125,{scaleX:0})
.to(lineOne ,.125,{ transformOrigin:"50% 50% ", y:8 ,ease: Power2.easeInOut },"slide")
.to(lineThree,.125,{transformOrigin:"50% 50%" , y:-8 ,ease: Power2.easeInOut },"slide")
.to(burger,0.5,{rotation:360, ease:Power4.easeInOut})
.to(lineOne , 0.25,{rotation:45,ease: Power2.easeInOut},"cross")
.to(lineThree, 0.25,{rotation:-45,ease: Power2.easeInOut},"cross");
burger.addEventListener('click',_ => {
  burger.removeEventListener("mouseenter", mouseEnterFunc);
    burger.classList.toggle('j.s-x');
toggeleMenu.reversed()? toggeleMenu.play(): toggeleMenu.reversed();
});

burger .addEventListener ('mouseenter',mouseEnterFunc  );

function mouseEnterFunc(){ 
    
tlm .staggerTo (lines,0.25,{scaleX:1.5, repeat:1 ,yoyo:true ,ease: Power2.easeInOut, svgOrigin:"50 50"},0.125);
}