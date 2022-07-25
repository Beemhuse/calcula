let result = document.getElementById('inputText')
function calculate(number){
result.value = result.value+number;
}

function Result(){
    try{
        result.value=eval(result.value)
    }
    catch (err){
        alert("Make a valid Input")
    }
}

let clr = ()=>{
    result.value="";
}

let del = ()=>{
    result.value = result.value.slice(0, -1)
}