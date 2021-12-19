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

let Name = document.getElementById("name"),
    Password = document.getElementById("password"),
    Users = [
            "Sahar", 
            "Abdelfattah",
            "Seif",
            "Aya"
        ],

    Passwords = [
            "Mama1", 
            "Baba1",
            "Sayofty",
            "Bestie"
            ],

    Messages = [
            "ماما",
            "بابا",
            "اخويا",
            "صديقتي الصدوقة"

    ],
    Message = document.getElementById("Message"),
    Santa = document.getElementById("Santa"),
    Login = document.getElementById("login"),
    arabic = document.getElementById("arabic"),
    UserName = document.getElementById("UserName");

    function Sections(){
        Santa.classList.remove("hidden");
        Message.classList.remove("hidden");
        Login.classList.add("hidden");
    }


function Check(){
    if(Name.value == Users[0] && Password.value == Passwords[0]){
        // location.href="Message.html";
        Sections();
        arabic.innerHTML = Messages[0];
        UserName.innerHTML= ", " + Users[0];
    }
    else if(Name.value == Users[1] && Password.value == Passwords[1]){
        Sections();
        arabic.innerHTML = Messages[0];
        UserName.innerHTML= ", " + Users[1];
    }
    else{
        alert("Sorry");
    }
}

let NewYear = window.matchMedia("(max-width:400px)");
animation(NewYear);