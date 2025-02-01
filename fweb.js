function page1animation(){
  var tl = gsap.timeline()

tl.from("nav h2, nav a, nav button",{
  y:-50,
  opacity:0,
  duration:0.3,
  delay:0.2,
  stagger:0.18
})

tl.from(".center1 h2",{
  x:-300,
  opacity:0,
  duration:0.4,
  delay:0.1,
  stagger:0.15
})

tl.from(".center1 p",{
  x:-100,
  opacity:0,
  duration:0.4,
  // delay:0.2,
  stagger:0.15
})

tl.from(".center1 button",{
  opacity:0,
  duration:0.4,
  // delay:0.1
})

tl.from(".center2 img",{
  opacity:0,
  x:100,
  duration:0.5,
  // delay:0.2 
},"-=1")

tl.from(".section1bottom",{
  opacity:0,
  y:140,
  duration:0.8,
  stagger:0.15,
  scrollTrigger: {
    trigger:".section1bottom",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 0%",
      scrub:4
  }
})
}

function page2animation(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section2",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 0%",
      scrub:3
    }
  })
  
  tl2.from("#services",{
    y:100,
    opacity:0,
  })
  
  tl2.from(".container #elem1",{
    opacity:0,
    x:-400,
    duration:0.5
  },"1st")
  
  tl2.from(".container #elem3",{
    opacity:0,
    x:-400,
    duration:0.5
  },"2nd")
  
  tl2.from(".container #elem2",{
    opacity:0,
    x:400,
    duration:0.5
  },"1st")
  
  tl2.from(".container #elem4",{
    opacity:0,
    x:400,
    duration:0.5
  },"2nd")
}

page1animation()
page2animation()