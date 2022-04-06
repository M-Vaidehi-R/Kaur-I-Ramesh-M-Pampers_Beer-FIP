(() => {
Products = document.querySelector(".products"),
Combos = document.querySelectorAll(".interactive"),
Name= document.querySelector("#name"),
Info= document.querySelector("#info"),
BgBox= document.querySelector("#bgbox");

const mediaQuery= window.matchMedia('(max-width:640px)');

const infoText =[
   `Select any 2 flavors from mother's beer section and babies and apply the coupon code`, 
   `Buy 3 Babies beer and get one free`, 
   `Buy 3 Mommies beer and get one free`, 
   `Get a 50% discount using this coupon code in yopur first purchase  "IMRK1011"`
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
       }
}

Products.addEventListener("click", Beers);
//Combos.addEventListener("click", ComboDetails);
Combos.forEach(deal => deal.addEventListener("click", ComboDetails ));

mediaQuery.addEventListener(handleTabletChange);

handleTabletChange(mediaQuery);

})();