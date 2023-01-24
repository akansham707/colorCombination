
window.addEventListener('DOMContentLoaded',function(){
    function f1(){
        var t1=gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                pin:true,
                scrub: 1,
                markers: true
                
            }
        })
        t1.
        to("#center",{
            left:"50%",
            ease:Power1
        })
        .to("#circle",{
            // scale:.2,
            scale:0,
            ease:Power1
        },"same")
        .to("#overlay #purple",{
            top:"50%",
            ease:Power1
        },"same")
        .to("#overlay #mainh1",{
            top:"150%",
            ease:Expo.easeInOut
        },"same")
        .to("#circle #bottom img",{
           rotate:"-180deg",
            stagger:.05,
            ease:Power1
        },"same")
        .to("#smcircle",{
            scale:.6,
            ease:Power1
        },"same")
        .to("#center #imgdiv img",{
            scale:0,
            ease:Expo.easeInOut
        },"same")
        .to("#center p",{
            opacity:0,
            ease:Expo.easeInOut
        },"same")
        .to("#smcircle",{
            scale:0,
            ease:Power1
        },"samesame")
        .to("#purple",{
            scale:0,
            ease:Power1
        },"samesame")
        .to("#sech1",{
            rotate:"0",
            bottom:0,
            ease:Expo.easeInOut,
            delay:.2
        },"same")
        .to("#boatimg",{
            scale:1.5,
            ease:Expo.easeInOut
        },"same")
        .to("#boatimg",{
          scale:1,
          ease:Expo.easeInOut
        },"same")
        .to("#pinkside",{
            top:"0%",
            delay:-.4,
            ease:Power1,
        })
        
        .to("#pinkside",{
            top:"-70%",
            delay:.2,
            ease:Power1,
        })
        
        }
        function f2(){
        
        
        var t2=gsap.timeline({
            scrollTrigger: {
                trigger: "#home2 ",
                start: "top top",
                end:"+=" + (window.innerHeight*9),
                pin:true,
                scrub: 1,
                markers: true
                
            }
        })
        t2.
          to(".circle",{
            top:"50%",
            stagger:.19,
            duration:2,
            ease:Expo.easeInOut
          })
          .to("#stop .pi",{
            left:"50%",
            ease:Expo.easeInOut
        },"s")
        .to("#stop .pu",{
            left:"50%",
            ease:Expo.easeInOut
        },"s")
        
        
        .to(".circle",{
            scale:.8,
            ease:Power2
        })
        .to(".circle",{
            // stagger:.05,
            scale:10,
            ease:Power2,
        },"s1")
        .to("#soverlay #gradimg ",{
            zIndex:9999999,
            delay:.1,
            left:"50%",
            ease:Power2,
        },"s1")
        .to("#soverlay h1",{
            zIndex:9999999,
            left:"-370%",
            delay:.1,
            duration:2,
            ease:Power2,
        },"s1")
        .to("#sbtn h2:nth-child(2)",{
            opacity:0,
            ease:Power1,
            delay:.6
        },"s1")
        .to("#sbtn h2:nth-child(1)",{
            opacity:1,
            ease:Power1,
            delay:-1
        })
        .to("#boxb h4:nth-child(1)",{
            marginTop:"-40px",
            ease:Power1,
            // delay:-1
        },"s1")
        .to("#boxb h4:nth-child(2)",{
            marginTop:"-60px",
            ease:Power1,
            delay:1.6
        },"s1")
        .to("#slide .c",{
            height:"100%",
            ease:Power1,
            stagger:.18
        })
        
        .to("#slide1 ",{
            // opacity:1,
            left:"-5%",
            ease:Expo.easeInOut
        },"s2")
        .to("#slide2",{
            // opacity:1,
            left:"-10%",
            ease:Power1,
            delay:0.4
        },"s2")
        .from("#slide2",{
            delay:.1,
            opacity:0
        })
        }
        f1();
        f2();
        
        gsap.to("#onecirc",{
            left:"92%",
            ease: "slow(0.15, 0.15, false)",
            repeat:-1,
            delay:1
        })
        gsap.to("#twocirc",{
            delay:1,
            right:"9%",
            ease: "slow(0.15, 0.15, false)",
            repeat:-1
        })
        
        function f3(){
        var c=document.querySelector("#overlay3")
        var b=document.querySelector("#right3 .outside1 .inside1 p")
        var a=document.querySelector("#right3 .outside1 .inside1")
        a.addEventListener("mouseenter",function(){
            a.style.background="#E9BBC8"
            b.style.color="#794856"
            c.style.backgroundColor="#794856"
        
        })
        a.addEventListener("mouseleave",function(){
            a.style.background="#FFF7FF"
            b.style.color=" #D5A7B4"
            c.style.backgroundColor="#FFF7FF"
        })
        
        }
        f3();
        
        function f4(){
            var c=document.querySelector("#overlay3")
            var b=document.querySelector(" .outside9 .inside9 p")
            var d=document.querySelector(" .outside9 .inside9")
            d.addEventListener("mouseenter",function(){
                d.style.background="#E9BBC8"
                b.style.color="#DEF3FF"
                c.style.backgroundColor="#DEF3FF"
            })
            d.addEventListener("mouseleave",function(){
                d.style.background="#FFF7FF"
                b.style.color=" #D5A7B4"
                c.style.backgroundColor="#FFF7FF"
            })
            
            }
        f4();
        
        gsap.to("#right3 img",{
            scrollTrigger: {
                trigger: "#bottom3",
                start: "top top",
                end:"+=40",
                pin:true,
                scrub: 1,
                markers: true
                
            },
            rotate:"360deg",
            ease:Expo.eseInOut
        })
        
        
})
