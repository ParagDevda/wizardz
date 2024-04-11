let h = document.querySelector("#home");
let a = document.querySelector("#about");
let s = document.querySelector("#Service");
let t = document.querySelector("#Team");
let c = document.querySelector("#Contact");
let ho = document.querySelector("#ho");
let ab = document.querySelector("#ab");
let Ser = document.querySelector("#Ser");
let Te = document.querySelector("#Te");
let Conta = document.querySelector("#Conta");
function click(){
    h.addEventListener("click", function(){
        document.querySelector("#page1").scrollIntoView({ behavior: 'smooth', block: 'end' });
    })
    ho.addEventListener("click", function(){
        document.querySelector("#page1").scrollIntoView({  block: 'end' });

    })
    a.addEventListener("click", function(){
        document.querySelector("#page3").scrollIntoView({ behavior: 'smooth', block: 'end' });
    })
    ab.addEventListener("click", function(){
        document.querySelector("#page3").scrollIntoView({ block: 'end' });
    })
    s.addEventListener("click", function(){
        document.querySelector("#page4").scrollIntoView({ behavior: 'smooth', block: 'end' });
    })
    Ser.addEventListener("click", function(){
        document.querySelector("#page4").scrollIntoView({ block: 'end' });
    })
    t.addEventListener("click", function(){
        document.querySelector("#page6 > #upper").scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
    Te.addEventListener("click", function(){
        document.querySelector("#page6 > #upper").scrollIntoView({ block: 'start' });
    })
    c.addEventListener("click", function(){
        document.querySelector("#page7").scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
    Conta.addEventListener("click", function(){
        document.querySelector("#page7").scrollIntoView({  block: 'start' });
    })
}
function work(){
    let a= document.querySelector("#lower2")
    let w = document.querySelector("#w");
    let w1 = document.querySelector("#w1");
    let w2 = document.querySelector("#w2");
    let w3 = document.querySelector("#w3");
    let w4 = document.querySelector("#w4");
    let w5 = document.querySelector("#w5");
    let ll1 = document.querySelector("#ll1");
    let ll2 = document.querySelector("#ll2");
    let ll3 = document.querySelector("#ll3");
    let ll4 = document.querySelector("#ll4");
    let ll5 = document.querySelector("#ll5");
    let c=0;
    let clutter = "";
    // a.document.querySelectorAll(".work").addEventListener("click",function(){
    //     console.log("abcd");
    // })
    w.addEventListener("click",function(){
       if (c==0) {
        document.querySelector("#ll").style.transform = "rotate(180deg)";
        w.style.height = "25vh";
        clutter = `<p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>`
        c = 1;
        w.style.backgroundColor = "rgb(185, 255, 102) ";
        document.querySelector("#work-up").style.borderBottom = "solid black 2px";
         document.querySelector("#work-down").style.display = "block";
        setTimeout(()=>{
            document.querySelector("#ll").setAttribute("class" ,"ri-subtract-line");
            document.querySelector("#work-down").innerHTML= clutter;
        },100)  
       } else {
        document.querySelector("#ll").style.transform = "rotate(0deg)";
        w.style.backgroundColor = "";
        w.style.height = "";
        document.querySelector("#work-down").innerHTML= "";
        document.querySelector("#work-up").style.borderBottom = "";
        setTimeout(()=>{
            document.querySelector("#ll").setAttribute("class" ,"ri-add-line");
        },100)
        c= 0 ;
       }      
    })
    w1.addEventListener("click",function(){
        if (c==0) {
         document.querySelector("#ll1").style.transform = "rotate(180deg)";
         w1.style.height = "25vh";
         clutter = `<p>Understand the client's business goals, target audience, and competitive landscape. Gather information about the client's existing digital marketing efforts, if any. Define the scope of work, budget, and timeline.</p>`
         c = 1;
         w1.style.backgroundColor = "rgb(185, 255, 102) ";
         document.querySelector("#work-up1").style.borderBottom = "solid black 2px";
         document.querySelector("#work-down1").style.display = "block";
         setTimeout(()=>{
             document.querySelector("#ll1").setAttribute("class" ,"ri-subtract-line");
             document.querySelector("#work-down1").innerHTML= clutter;
         },100)
         
        } else {
            document.querySelector("#ll1").style.transform = "rotate(0deg)";
         w1.style.backgroundColor = "";
         w1.style.height = "";
         document.querySelector("#work-down1").innerHTML= "";
         document.querySelector("#work-up1").style.borderBottom = "";
         setTimeout(()=>{
             document.querySelector("#ll1").setAttribute("class" ,"ri-add-line");
         },100)
         
         c= 0 ;
        }      
     })
     w2.addEventListener("click",function(){
        if (c==0) {
         document.querySelector("#ll2").style.transform = "rotate(180deg)";
         w2.style.height = "25vh";
         clutter = `<p>We implements campaigns, creates content, manages advertising, and monitors performance, all while staying adaptable to trends and client needs, to achieve campaign objectives and deliver results.</p>`
         c = 1;
         w2.style.backgroundColor = "rgb(185, 255, 102) ";
         document.querySelector("#work-up2").style.borderBottom = "solid black 2px";
          document.querySelector("#work-down2").style.display = "block";
         setTimeout(()=>{
             document.querySelector("#ll2").setAttribute("class" ,"ri-subtract-line");
         },100)
         setTimeout(()=>{
            document.querySelector("#work-down2").innerHTML= clutter;
        },180)  
        } else {
         document.querySelector("#ll2").style.transform = "rotate(0deg)";
         w2.style.backgroundColor = "";
         w2.style.height = "";
         document.querySelector("#work-down2").innerHTML= "";
         document.querySelector("#work-up2").style.borderBottom = "";
         setTimeout(()=>{
             document.querySelector("#ll2").setAttribute("class" ,"ri-add-line");
         },100)
         c= 0 ;
        }      
     })
     w3.addEventListener("click",function(){
        if (c==0) {
         document.querySelector("#ll3").style.transform = "rotate(180deg)";
         w3.style.height = "25vh";
         clutter = `<p>We monitor and optimize campaigns by analyzing data, adjusting strategies, and improving key metrics to meet campaign goals and adapt to market changes. Regular reporting and client communication are crucial for this iterative process.</p>`
         c = 1;
         w3.style.backgroundColor = "rgb(185, 255, 102) ";
         document.querySelector("#work-up3").style.borderBottom = "solid black 2px";
          document.querySelector("#work-down3").style.display = "block";
         setTimeout(()=>{
             document.querySelector("#ll3").setAttribute("class" ,"ri-subtract-line");
             document.querySelector("#work-down3").innerHTML= clutter;
         },100)  
        } else {
         document.querySelector("#ll3").style.transform = "rotate(0deg)";
         w3.style.backgroundColor = "";
         w3.style.height = "";
         document.querySelector("#work-down3").innerHTML= "";
         document.querySelector("#work-up3").style.borderBottom = "";
         setTimeout(()=>{
             document.querySelector("#ll3").setAttribute("class" ,"ri-add-line");
         },100)
         c= 0 ;
        }      
     })
     w4.addEventListener("click",function(){
        if (c==0) {
         document.querySelector("#ll4").style.transform = "rotate(180deg)";
         w4.style.height = "25vh";
         clutter = `<p>We collect and analyze data, generate reports, and hold regular client meetings. They use these interactions to provide insights, actionable recommendations, and set new objectives for ongoing campaign success.</p>`
         c = 1;
         w4.style.backgroundColor = "rgb(185, 255, 102) ";
         document.querySelector("#work-up4").style.borderBottom = "solid black 2px";
          document.querySelector("#work-down4").style.display = "block";
         setTimeout(()=>{
             document.querySelector("#ll4").setAttribute("class" ,"ri-subtract-line");
         },100)
         setTimeout(()=>{
            document.querySelector("#work-down4").innerHTML= clutter;
        },180)  
        } else {
         document.querySelector("#ll4").style.transform = "rotate(0deg)";
         w4.style.backgroundColor = "";
         w4.style.height = "";
         document.querySelector("#work-down4").innerHTML= "";
         document.querySelector("#work-up4").style.borderBottom = "";
         setTimeout(()=>{
             document.querySelector("#ll4").setAttribute("class" ,"ri-add-line");
         },100)
         c= 0 ;
        }      
     })
     w5.addEventListener("click",function(){
        if (c==0) {
         document.querySelector("#ll5").style.transform = "rotate(180deg)";
         w5.style.height = "25vh";
         clutter = `<p>We continuously analyze data, integrate feedback, and optimize strategies to achieve better results over time, staying updated and collaborating closely with clients in an iterative process.</p>`
         c = 1;
         w5.style.backgroundColor = "rgb(185, 255, 102) ";
         document.querySelector("#work-up5").style.borderBottom = "solid black 2px";
          document.querySelector("#work-down5").style.display = "block";
         setTimeout(()=>{
             document.querySelector("#ll5").setAttribute("class" ,"ri-subtract-line");
         },100)
         setTimeout(()=>{
            document.querySelector("#work-down5").innerHTML= clutter;
        },180)  
        } else {
         document.querySelector("#ll5").style.transform = "rotate(0deg)";
         w5.style.backgroundColor = "";
         w5.style.height = "";
         document.querySelector("#work-down5").innerHTML= "";
         document.querySelector("#work-up5").style.borderBottom = "";
         setTimeout(()=>{
             document.querySelector("#ll5").setAttribute("class" ,"ri-add-line");
         },100)
         c= 0 ;
        }      
     })

     

 
}
click();
work();