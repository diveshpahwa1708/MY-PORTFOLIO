var tl=gsap.timeline();



tl.from(".loader h1",{
  x:100,
  opacity:0,
  stagger:0.2
})
tl.to(".loader h1",{
  x:-100,
  opacity:0,
  stagger:0.2,
  delay:0.3
})
tl.to(".loader",{
  y:"-100vh",
ease:Power2
})
tl.from("nav h4",{
  x:-100,
  opacity:0,
  stagger:0.3,
  duration:1,
  ease:Power3
})
tl.from(".pg1 h1",{
  y:"13vw",
  opacity:0,
  duration:1,
  stagger:0.3
})
gsap.from(".pg2 p",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".pg2 p",
    start:"top 85%",
    end:"top 89%",
    scrub:2
  }
})

Shery.imageEffect('.pg2 .imgcontainer',{
  style:5,
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7999953245991637},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":1}},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]}} ,
  gooey:true,
  preset: "./presets/wigglewobble.json",
}) 
gsap.to(".pg3 .mid",{
  x:"-145%",
  ease:Expo,
  scrollTrigger:{
    scroller:"body",
    trigger:".pg3",
    start:"top -1%",
    end:"top -130%",
    scrub:1.7,
    pin:true,
  }
}) 


gsap.to("main",{
  backgroundColor:"black",
  color:"white",
  scrollTrigger:{
    scroller:"body",
    trigger:"main",
    start:"top -170%",
    end:"top -175%",
    scrub:1
  }
})

document.querySelectorAll(".pg4 .back .div").forEach(function(el){
  el.addEventListener("mousemove",function(){
    gsap.to(el.querySelector(".anim"),{
      height:"100%"
    })
    gsap.to(el.querySelector("img"),{
      display:"flex",
      height:"30%",
      width:"30%"
    })
  });

})
document.querySelectorAll(".pg4 .back .div").forEach(function(el){
  el.addEventListener("mouseleave",function(){
    gsap.to(el.querySelector(".anim"),{
      height:0
    })
    gsap.to(el.querySelector("img"),{
      display:"none",
      height:"0%",
      width:"0%"
    })
  })
})
document.querySelectorAll("footer ul").forEach(function(el){
  el.addEventListener("mousemove",function(){
    gsap.to(el.querySelector(".anim"),{
      height:"100%"
    })
    gsap.to(el.querySelector("img"),{
      display:"flex",
      height:"30%",
      width:"30%"
    })
  });

})
document.querySelectorAll("footer ul").forEach(function(el){
  el.addEventListener("mouseleave",function(){
    gsap.to(el.querySelector(".anim"),{
      height:0
    })
    gsap.to(el.querySelector("img"),{
      display:"none",
      height:"0%",
      width:"0%"
    })
  })
})
document.querySelector("main").addEventListener("mousemove",function(dets){
  gsap.to(".mouse",{
    opacity:1,
    x:dets.x-100,
    y:dets.y-100
  })
})
document.querySelector(".pg2 img").addEventListener("mousemove",function(){
  gsap.to(".mouse",{
    height:0,
    width:0
  })
})
document.querySelector(".pg2 img").addEventListener("mouseleave",function(){
  gsap.to(".mouse",{
    height:"40vh",
    width:"40vh"
  })
})
gsap.from(".pg4 .top h1",{
  y:"-8vw",
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".pg4 .top h1",
    start:"top 30%",
    end:"top 31%",
    scrub:2
  }
})
gsap.from(".pg4 .top h5",{
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".pg4 .top h5",
    start:"top 60%",
    end:"top 61%",
    scrub:2
  }
})
gsap.from("footer h1",{
  y:"-10vw",
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:"footer h1",
    start:"top 50%"
  }
})