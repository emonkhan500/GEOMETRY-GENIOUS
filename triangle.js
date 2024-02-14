function triangle(){
  const baseInput= document.getElementById('tri-base')
  const baseValue = baseInput.value;
const base= parseFloat(baseValue)
  
  const heightInput = document.getElementById('tri-height')
const heightValue = heightInput.value;
const height= parseFloat(heightValue)

const area=0.5 * base *height;

const setArea= document.getElementById('tri-span')
setArea.innerText= area;

    
}