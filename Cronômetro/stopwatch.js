document.querySelector ('#btn-start').addEventListener('click', startCount)
document.querySelector ('#btn-pause').addEventListener('click', pauseCount)
document.querySelector ('#btn-reset').addEventListener('click', resetCount)

let hmin = document.querySelector('.stopwatch-min').innerHTML
let min =parseInt(hmin)
let hsec = document.querySelector('.stopwatch-sec').innerHTML
let sec = parseInt(hsec)
let hmilisec = document.querySelector('.stopwatch-milisec').innerHTML
let milisec = parseInt(hmilisec)

let interval = null



function startCount(){
    if (interval == null){
    
    interval = setInterval(function(){        
        document.querySelector('.stopwatch-milisec').innerHTML=`${milisec}`
        cont = 0
        cont++   
        const collection = document.getElementsByClassName("separator");
        for (let i = 0; i < collection.length; i++) {
            if(milisec >0&& milisec<51){
                collection[i].style.color = "";
            }else{
                collection[i].style.color = "rgba(0, 0, 0, 0)";}    
        }    
        if(milisec < 10){
            document.querySelector('.stopwatch-milisec').innerHTML=`0${milisec}`        
        }
        milisec++  
        if(milisec > 99){
            milisec = 0
            sec++        
            document.querySelector('.stopwatch-sec').innerHTML=`${sec}`
            document.querySelector('.stopwatch-milisec').innerHTML=`00`         
            if(sec < 10){            
                document.querySelector('.stopwatch-sec').innerHTML=`0${sec}`
            }            
            if(sec > 59){
                sec = 00
                min++
                document.querySelector('.stopwatch-min').innerHTML=`${min}`
                document.querySelector('.stopwatch-sec').innerHTML=`00` 
                if(min < 10){
                    document.querySelector('.stopwatch-min').innerHTML=`0${min}`
                }                    
            }
        }
    },10)
}
}
function pauseCount(){
    clearInterval(interval)
    interval = null
}
function resetCount(){
    document.querySelector('.stopwatch-min').innerHTML=`00`
    document.querySelector('.stopwatch-sec').innerHTML=`00`
    document.querySelector('.stopwatch-milisec').innerHTML=`00`
    point = document.querySelectorAll('.separator')
    point[0].style.color=''
    point[1].style.color=''
    sec = 0
    min = 0
}

