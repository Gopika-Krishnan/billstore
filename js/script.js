window.onload = function(){
let modalBtn = document.getElementById("modal-btn")
let modalBtn2 = document.getElementById("modal-btn2")

let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
modalBtn2.onclick = function(){
    modal.style.display = "block"
  }
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}}
