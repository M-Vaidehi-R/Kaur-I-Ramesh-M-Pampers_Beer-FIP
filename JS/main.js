(() => {
Products = document.querySelector(".products"),
Combos = document.querySelectorAll(".interactive"),
Name= document.querySelector("#name"),
Info= document.querySelector("#info"),
BgBox= document.querySelector("#bgbox"),
MenuIcon = document.querySelector("#menu_icon"),
HeadBox = document.querySelector(".header-box"),
Events = document.querySelectorAll(".events"),
EvName= document.querySelector("#evname"),
EvInfo= document.querySelector("#evinfo"),
PBox1= document.querySelector("#popBox1"),
PBox2= document.querySelector("#popBox2"),
BottleName=document.querySelectorAll(".bottle"),
PrInfo=document.querySelector("#PRinfo"),
PrName=document.querySelector("#PRname"),
PBoxPR =document.querySelector("#popBoxPr");


const mediaQuery= window.matchMedia('(max-width:640px)');

 infoText =[
   `Select any 2 flavors from mother's beer section and babies and apply the coupon code`, 
   `Buy 3 Babies beer and get one free`, 
   `Buy 3 Mommies beer and get one free`, 
   `Get a 50% discount using this coupon code in yopur first purchase  "IMRK1011"`
]

 EventText= [
    `cleaning environment`,
    `educational classes`,
    `sponsership for students`,
    `donations`
]

 productDesc= [`Baby beer 1`, `Baby beer 1`, `Baby beer 1`,`Mothers beer1`, `Mothers beer1`, `Mothers beer1`]


console.log("pampers beer");

function ShowPB1() {
    PBox1.style.display="block";
    EvName.classList.add("showpopBox1");
}
function ShowPB2() {
    PBox2.style.display="block";
    Name.classList.add("showpopBox2");
}

function  ShowPBpr() {
    PBoxPR.style.display="block";
    PrName.classList.add("showpopBoxPr");
}
function Beers() {
    console.log("clicked on" , this.alt);
    let PrOffset=this.dataset.offset;
    ShowPBpr();
    PrName.textContent=this.alt;
    PrInfo.textContent= productDesc[PrOffset];
    console.log("product name:", this.alt);

}

function ComboDetails() {
    //debugger;
    console.log("view more details about", this.alt);
    ShowPB2();
    let offSet= this.dataset.offset;
         Name.textContent = this.alt;
         Info.textContent = infoText[offSet];

}

function handleTabletChange(event){

       if(event.matches){
           console.log("Media Query Matched");
           MenuIcon.addEventListener("click", blockMenu);

           function blockMenu(){

            Menu = document.querySelector(".menu");
          
            Menu.style.display="block";
            console.log("first class present:", HeadBox.classList);
               //debugger;
              // HeadBox.classList.remove(".header-box");
               //MenuNav.classList.add("blockMenu");
               console.log("Removed class menu, added", Menu.classList);
           }
       }
}

function SponsorEvents() {
 
    let EvOffset=this.dataset.offset;
    ShowPB1();
        EvName.textContent=this.alt;
        EvInfo.textContent= EventText[EvOffset];
    console.log("event name:", this.alt);
}


BottleName.forEach(bot => bot.addEventListener("click", Beers));
//Combos.addEventListener("click", ComboDetails);
Combos.forEach(deal => deal.addEventListener("click", ComboDetails ));

mediaQuery.addEventListener("mediaQuery", handleTabletChange);
handleTabletChange(mediaQuery);

Events.forEach(ev => ev.addEventListener("click", SponsorEvents));


})();