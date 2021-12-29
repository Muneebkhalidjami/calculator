var getValue = document.getElementById("input");


function Btn(num){
    getValue.value +=num; 
}

function calculate(){
    getValue.value = eval(getValue.value)
}

function txt(){
        var arr = getValue.value.split("");
        arr[arr.length - 1] = "";
        getValue.value = arr.join("");
}
function clearText(){
    getValue.value = ""
}