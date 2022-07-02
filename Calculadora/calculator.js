var sum = 0
function number(newNumber){
    var screen = document.getElementById('screen').innerHTML
    previousNumber = screen + newNumber
    document.getElementById('screen').innerHTML = previousNumber    
}

function addition(){
    document.getElementById('screen').innerHTML = ``
    sum += parseFloat(document.getElementById('screen').innerHTML)
    document.getElementById('screen').innerHTML = sum

}