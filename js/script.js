window.onload = function(){
let modalBtn = document.getElementById("modal-btn")
let modalBtn2 = document.getElementById("modal-btn2")
let modalBtn3 = document.getElementById("modal-btn3")

let modalG = document.querySelector(".modal-gallery")
let modalF = document.querySelector(".modal-finance")
let modalFilm = document.querySelector(".modal-film")

let closeBtnF = document.querySelector(".close-btn-finance")
let closeBtnG = document.querySelector(".close-btn-gallery")
let closeBtnFilm = document.querySelector(".close-btn-film")

modalBtn.onclick = function(){
  modalF.style.display = "block"
}
modalBtn2.onclick = function(){
    modalG.style.display = "block"
  }
modalBtn3.onclick = function(){
  modalFilm.style.display = "block"
}


closeBtnG.onclick = function(){
modalG.style.display = "none"
}

closeBtnF.onclick = function(){
modalF.style.display = "none"
}

closeBtnFilm.onclick = function(){
  modalFilm.style.display = "none"
  document.getElementById('movie').pause();
  }
  
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
}

