//Movement Animation to happen
const  card = document.querySelector(".card");
const container = document.querySelector(".container");
//Item
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

const snksize = document.getElementById("snkSize");
const detail = document.getElementsByClassName("detail");



//추가 Click button event --21.01.16 미완성
Array.from(detail).forEach(sizeDetail =>
    sizeDetail.addEventListener("click", activateButton));

function activateButton(event){
    const size  = event.target;
    
    
    if(size.className == "detail"){
        size.className = "active"
    
    }else{
        size.className = "detail"
    }
    
    console.log(size.className);
    console.log(size);
    
}



//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transform = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-25deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e)=> {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})
