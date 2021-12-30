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

let NewYear = window.matchMedia("(max-width:400px)");
animation(NewYear);

let Name = document.getElementById("name"),
    Password = document.getElementById("password"),
    Users = [
        "Sahar", 
        "Abdelfattah",
        "Seif",
        "Aya",
        "Amira",
        "Raghda",
        "Esraa Mohamed",
        "Israa",
        "Esraa",
        "Anstasia",
        "Taghreed",
        "Cathreen",
        "Sara",
        "Doaa",
        "Rehab",
        "Youssef",
        "Khaled",
        "Mostafa",
        "Pierre",
        "Christeen",
        "Mr.Omar",
        "Evronia"
        ],

    Passwords = [
        "Mama", 
        "Baba",
        "Sayofty",
        "Bestie",
        "Tatii",
        "Batates",
        "Soso",
        "israaali",
        "Anwar",
        "Anonty",
        "Tota",
        "Cathy",
        "SaraMohamed",
        "Doaa3zama",
        "GreekYoghurt",
        "hackerElAdmins",
        "El5atr",
        "Elbashmohandes",
        "Leader",
        "Kiri",
        "Mr.OmarMohsen",
        "Viro"
        ],

    Messages = [
            "اغلى ما منحني الله, كل سنة وانتي طيبة يانور عيني ويارب تبقى سنة سعيدة عليكي وتبقى في احسن حال وصحة ويخليكي لينا ويقدرنا ونقدر نسعدك ونراضيكي يارب وربنا يحققلك كل اللي بتحلمي به السنة دي يارب ويفرح قلبك دايما",
            "ابي الغالي, كل سنة وانت طيب يامن افتخر به بين الناس وارفع رأسي عاليا لأنني ابنته وربنا يقدرنا ونقدر نخليك فخور بينا ويحفظك لينا يارب ويكرمك ويوسع رزقك وتفرح بينا يارب",
            "My backbone, I love you to the moon and never ever back, you're Joey to my Rachel, I wish you will be healthier, happier and more successful in this year",
            "My best friend till the end, I love you and no words can describe how much I love you, I wish you a happy new year, a new year and you're closer to my heart, happier and more successful",
            "مهما اقول مش هقدر اوصفك , اكتر حد بحس اني مرتاحة معاه مش محتاجة افكر قبل ما اتكلم ولا ازين الكلام عشان عارفة انك هتفهميني كده كده بقالنا مع بعض عشر سنين وعمري ما لاقيت حد في طيبة قلبك بجد انتي مكسب لاي حد وخليكي دايما فاكرة انك جميلة قلبا وقالبا ,  كل سنة وانتي طيبة ياصاحبتي ويارب السنة دي تبقى سنة سعيدة عليكي ونفضل صحاب واخوات على طول يارب وميحرمنيش منك ابدا",
            "رغوة قلبي , اكتر واحدة جدعة وصاحبة صاحبتها بجد , مع بعض من ايام ابتدائي لحد دلوقتي وفرحانة بجد اننا لسة صحاب واخوات حتى مهما نغيب عن بعض لما بنتقابل تاني ولا كأننا كنا مع بعض امبارح , بحبك جدا ويارب نفضل طول العمر صحاب واخوات كده وربنا يجعلها سنة سعيدة عليكي يارب وتحققي كل اللي بتحلمي به يارب",
            "سوسو , بجد الاقرب لقلبي من صحاب الكلية , بغض النظر اننا اغلب الوقت بنشتم بعض بس حقيقي بحب احكيلك كل مشاكلي عشان دايما بتساعديني اتخطاها وانتي جدعة وقلبك ابيض. يارب تبقى سنة سعيدة عليكي يارب وتحققي كل اللي بتحلمي به يارب",
            "المتنمرة, كل سنة وانتي طيبة و ان شاءالله السنة دي تعقلي وتبطلي افكارك الاجرامية دي ونفضل صحاب على طول ان شاء الله وتحققي كل اللي بتحلمي به",
            "انور , اول واحدة عرفتها في الكلية واكتر واحد طيبة وبتصفى بسرعة وجدعة دايما بتسمعيني وبتستحملي رغيي ومشاكلي حقيقي صديقة صدوقة بجد , سنة سعيدة عليكي وتحققي كل اللي بتتمنيه يارب",
            "انون , اكتر حد شبهي عرفته في حياتي حقيقي انا مقتنعة اننا اخوات في عالم موازي , السنة دي كانت سنة صعبة انا عارفة بس عايزة اقولك انك عملتي احسن حاجة عندك وكنتي شاطرة جدا ويارب السنة دي تبقى احسن من اللي قبلها وتبقى سنة سعيدة عليكي وتحققي كل اللي بتحلمي به",
            "توتا يا توتا , اجدع حد في الشلة واكتر حد شوفته بيحب يساعد الناس وربنا يكرمك يارب على مجهودك ده ويوفقك وتبقى سنة سعيدة عليكي وتحققي كل اللي بتحلمي به يارب",

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
        Sections();
        arabic.innerHTML = Messages[0];
        UserName.innerHTML= ", " + Users[0];
    }
    else if(Name.value == Users[1] && Password.value == Passwords[1]){
        Sections();
        arabic.innerHTML = Messages[0];
        UserName.innerHTML= ", " + Users[1];
    }
    else if(Name.value == Users[3] && Password.value == Passwords[3]){
        Sections();
        arabic.innerHTML = Messages[4];
        UserName.innerHTML= ", " + Users[2];
    }
    else{
        alert("Sorry");
    }
}