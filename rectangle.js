function rectangle(){
  const widthValue= document.getElementById('rec-width')
  const widthInput= widthValue.value;
  const width = parseFloat(widthInput)

  const lengthValue= document.getElementById('rec-length')
  const lengthInput= lengthValue.value;
  const length = parseFloat(lengthInput)
//   console.log(width, length)

   const area= width * length

   const setRectangle= document.getElementById('rec-span')
   setRectangle.innerText= area;
}