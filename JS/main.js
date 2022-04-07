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
EvInfo= document.querySelector("#evinfo");

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


console.log("pampers beer");

function Beers() {
    console.log("clicked on" , this.alt);
}

function ComboDetails() {
    //debugger;
    console.log("view more details about", this.alt);
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
        EvName.textContent=this.alt;
        EvInfo.textContent= EventText[EvOffset];
    console.log("event name:", this.alt);
}


Products.addEventListener("click", Beers);
//Combos.addEventListener("click", ComboDetails);
Combos.forEach(deal => deal.addEventListener("click", ComboDetails ));

mediaQuery.addEventListener("mediaQuery", handleTabletChange);
handleTabletChange(mediaQuery);

Events.forEach(ev => ev.addEventListener("click", SponsorEvents));


})();