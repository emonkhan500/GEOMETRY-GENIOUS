
function inputValue(value){
    const inputFeild= document.getElementById(value)
    const inputValue= inputFeild.value;
    const values = parseFloat(inputValue)
return values;
}

function setArea(input,area){
    const getArea= document.getElementById(input)
    getArea.innerText= area;
   
}