let mainimage = Array.from(document.getElementsByClassName("thumbnail")[0].children);
let showimg = document.getElementById("showimg");
let quantity = document.getElementById("quantity");
let minus = document.getElementById("minus");
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];

let score = 0;

let iconcart = document.getElementsByClassName("iconcart")[0];

iconcart.addEventListener('click',()=>{
   document.getElementsByClassName("cartitem")[0].classList.toggle("show");
})




let images = [  "./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"];

let idx =0;

next.addEventListener("click",()=>{

if(idx == 0){
    showimg.src = images[idx+1]
    idx++;
}else if(idx ==1){
    showimg.src = images[idx+1]
    idx++;
}else if(idx == 2){
    showimg.src = images[idx+1]
    idx++;
}else if(idx == 3){
    showimg.src = images[idx]
   
}else if(idx>images.length-1){
    idx = 3;
}


})




prev.addEventListener("click",()=>{

    if(idx == 3){
        showimg.src = images[idx-1]
        idx--;
    }else if(idx ==2){
        showimg.src = images[idx-1]
        idx--;
    }else if(idx == 1){
        showimg.src = images[idx-1]
        idx--;
    }else if(idx == 0){
        showimg.src = images[idx]
     
    }else if(idx<0){
        idx = 0;
    }



})




function add() {
    score++;
    quantity.innerHTML = score;

}
function minu() {
    if (score <= 0) {
        score = 0;
    } else {
        score--;
    }
    quantity.innerHTML = score;


}

function deleteItem(){
    score = 0;
    document.getElementById("Icount").innerHTML = score;
    document.getElementsByClassName("checkout")[0].style.display="none"
    document.getElementsByClassName("empty")[0].style.display = "block"
}
function price(){
    if(score>0){
        document.getElementById("Icount").innerHTML = score;
        document.getElementsByClassName("empty")[0].style.display = "none"
        document.getElementsByClassName("checkout")[0].style.display="block"
    }else if(score == 0 ){
        document.getElementsByClassName("checkout")[0].style.display="none"
        document.getElementsByClassName("empty")[0].style.display = "block"

    }
    document.getElementById("count").innerHTML = score;
    
    let price = 125*score;
    document.getElementById("number").innerHTML = '$'+price;


    }

function showsidebar() {
    document.getElementsByClassName("sidebar")[0].style.display = "block"
    document.getElementById("cross").style.display = "block"
}
function hide() {
    document.getElementsByClassName("sidebar")[0].style.display = "none"
    document.getElementById("cross").style.display = "none"
}


mainimage.forEach((element) => {

    element.addEventListener('click', (e) => {
        let targetimg = e.target.id;

        if (targetimg == "img1") {
            showimg.src = "./images/image-product-1.jpg"
        } else if (targetimg == "img2") {
            showimg.src = "./images/image-product-2.jpg"
        } else if (targetimg == "img3") {
            showimg.src = "./images/image-product-3.jpg"
        } else if (targetimg == "img4") {
            showimg.src = "./images/image-product-4.jpg"
        }




    })


})




