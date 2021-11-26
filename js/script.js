window.onload = function(){
let modalBtn = document.getElementById("modal-btn")
let modalBtn2 = document.getElementById("modal-btn2")

let modalG = document.querySelector(".modal-gallery")
let modalF = document.querySelector(".modal-finance")

let closeBtnF = document.querySelector(".close-btn-finance")
let closeBtnG = document.querySelector(".close-btn-gallery")

modalBtn.onclick = function(){
  modalF.style.display = "block"
}
modalBtn2.onclick = function(){
    modalG.style.display = "block"
  }


closeBtnG.onclick = function(){
modalG.style.display = "none"
}

closeBtnF.onclick = function(){
modalF.style.display = "none"
}

window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
}

