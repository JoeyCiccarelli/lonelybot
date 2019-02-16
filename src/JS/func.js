const { dialog } = require('electron').remote
const electron = require('electron').remote

document.getElementById('chatInput').addEventListener("keydown",function detectKey(e) {
  if (e.keyCode == 13){
    chat(document.getElementById('chatInput').value);
    document.getElementById('chatInput').value=""; 
  }
})
function chat(text) {
  if(text=="hello"||text=="hey"||text=="hi"){
    output = ["Hi friend","Go away","i'm vegan","Bust down thotiana","I have a boyfriend"]
    addToOutput(chooseRandom(output))
  }
}

function addToOutput(value) {
  document.getElementById('chatOutput').innerText += value+"\n"
}

function chooseRandom(array){
  return array[Math.floor(Math.random()*array.length)]
}