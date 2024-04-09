let h = document.querySelector("#home");
let a = document.querySelector("#about");
let s = document.querySelector("#Service");
let t = document.querySelector("#Team");
let c = document.querySelector("#Contact");
function click(){
    h.addEventListener("click", function(){
        document.querySelector("#page1").scrollIntoView({ behavior: 'smooth', block: 'end' });
        console.log("chala");
    })
    a.addEventListener("click", function(){
        document.querySelector("#page3").scrollIntoView({ behavior: 'smooth', block: 'end' });
    })
    s.addEventListener("click", function(){
        document.querySelector("#page4").scrollIntoView({ behavior: 'smooth', block: 'end' });
    })
    t.addEventListener("click", function(){
        document.querySelector("#page6 > #upper").scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
    c.addEventListener("click", function(){
        document.querySelector("#page7").scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
}
click();