var home = document.querySelector(".go");
home.addEventListener("click", go);

function go() {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".vibg").style.display = "block";
  document.querySelector(".vibg_yes").addEventListener("click", vibgYes);
  document.querySelector(".vibg_no").addEventListener("click", vibgNo);
}

function vibgYes() {
  document.querySelector(".vibg").style.display = "none";
  document.querySelector(".vior").style.display = "block";
  document.querySelector(".vior_yes").addEventListener("click", viorYes);
  document.querySelector(".vior_no").addEventListener("click", viorNo);
}

function viorYes() {
  document.querySelector(".vior").style.display = "none";
  document.querySelector(".vryo").style.display = "block";
  document.querySelector(".vryo_yes").addEventListener("click", vryoYes);
  document.querySelector(".vryo_no").addEventListener("click", vryoNo);
}

function vryoYes() {
  document.querySelector(".vryo").style.display = "none";
  document.querySelector(".violet").style.display = "block";
  //put buttons for play again by opening home or quit
}

function vryoNo() {
  document.querySelector(".vryo").style.display = "none";
  document.querySelector(".indigo").style.display = "block";
  //put buttons for play again by opening home or quit
}

function viorNo() {
  document.querySelector(".vior").style.display = "none";
  document.querySelector(".bgro").style.display = "block";
  document.querySelector(".bgro_yes").addEventListener("click", bgroYes);
  document.querySelector(".bgro_no").addEventListener("click", bgroNo);
}

function bgroYes() {
  document.querySelector(".bgro").style.display = "none";
  document.querySelector(".broy").style.display = "block";
  document.querySelector(".broy_yes").addEventListener("click", broyYes);
  document.querySelector(".broy_no").addEventListener("click", broyNo);
}

function broyYes() {
  document.querySelector(".broy").style.display = "none";
  document.querySelector(".blue").style.display = "block";
  //put buttons for play again by opening home or quit
}

function broyNo() {
  document.querySelector(".broy").style.display = "none";
  document.querySelector(".green").style.display = "block";
  //put buttons for play again by opening home or quit
}

function bgroNo() {
  document.querySelector(".bgro").style.display = "none";
  document.querySelector(".oops").style.display = "block";
  //put buttons for play again by opening home or quit
}

function vibgNo() {
  document.querySelector(".vibg").style.display = "none";
  document.querySelector(".yorv").style.display = "block";
  document.querySelector(".yorv_yes").addEventListener("click", yorvYes);
  document.querySelector(".yorv_no").addEventListener("click", yorvNo);
}

function yorvYes() {
  document.querySelector(".yorv").style.display = "none";
  document.querySelector(".viby").style.display = "block";
  document.querySelector(".viby_yes").addEventListener("click", vibyYes);
  document.querySelector(".viby_no").addEventListener("click", vibyNo);
}

function vibyYes() {
  document.querySelector(".viby").style.display = "none";
  document.querySelector(".yellow").style.display = "block";
  //put buttons to replay and quit
}

function vibyNo() {
  document.querySelector(".viby").style.display = "none";
  document.querySelector(".orig").style.display = "block";
  document.querySelector(".orig_yes").addEventListener("click", origYes);
  document.querySelector(".orig_no").addEventListener("click", origNo);
}

function origYes() {
  document.querySelector(".orig").style.display = "none";
  document.querySelector(".obig").style.display = "block";
  document.querySelector(".obig_yes").addEventListener("click", obigYes);
  document.querySelector(".obig_no").addEventListener("click", obigNo);
}

function obigYes() {
  document.querySelector(".obig").style.display = "none";
  document.querySelector(".orange").style.display = "block";
  //put buttons to replay or exit
}

function obigNo() {
  document.querySelector(".obig").style.display = "none";
  document.querySelector(".red").style.display = "block";
  //put buttons to replay or exit
}

function origNo() {
  document.querySelector(".orig").style.display = "none";
  document.querySelector(".oops").style.display = "block";
  //put buttons to replay and exit
}

function yorvNo() {
  document.querySelector(".yorv").style.display = "none";
  document.querySelector(".oops").style.display = "block";
  //put buttons to replay or exit
}
