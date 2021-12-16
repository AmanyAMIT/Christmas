

function animation(NewYear){
    if(NewYear.matches){
        gsap.to('#santa', {
            duration: 120,
            y : -1000,
            x : 2000
        }).repeat(Infinity)
        
        gsap.from('#tree',{
            duration: 10,
            y : 8000,
        })
    } else{
        gsap.to('#santa', {
            duration: 80,
            y : -1000,
            x : 2000
        }).repeat(Infinity)
        
        gsap.from('#tree',{
            duration: 30,
            y : 8000,
        })
    }
}

let NewYear = window.matchMedia("(max-width:280px)");
animation(NewYear);