const { dialog } = require('electron').remote
const electron = require('electron').remote

document.getElementById('chatInput').addEventListener("keydown",function detectKey(e) {
  if (e.keyCode == 13){
    chat(document.getElementById('chatInput').value);
    document.getElementById('chatInput').value=""; 
  }
})
function chat(text) {
  if(text=="hello"){
    addToOutput("i dont want to talk to you")
  }
}

function addToOutput(value) {
  document.getElementById('chatOutput').innerText += value+"\n"
}
