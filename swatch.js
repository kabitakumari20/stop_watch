var seconds = 0;
var minutes = 0;
var hours= 0;
var displaySeconds=0;
var displayMinutes=0;
var displayHours=0;
var interval;
let status=true;
function stopwatch(){
    seconds++;
    
    if (seconds/60===1){
        seconds=0
        minutes++;
        if (minutes/60===1){
            minutes=0;
            hours++
        }
    }
    if (seconds<10){
        displaySeconds="0"+seconds.toString();
    }else{
        displaySeconds=seconds
    }
    if (minutes<10){
        displayMinutes="0"+minutes.toString();
    }else {
        displayMinutes=minutes
    }
    if (hours<10){
        displayHours="0"+hours.toString();
    } else {
        displayHours=hours
    }
    document.getElementById("display").innerHTML=displayHours+":"+displayMinutes+":"+displaySeconds

}
function startStop(){
    if (status===true){
        interval=window.setInterval(stopwatch,1000)
        document.getElementById("startStop").innerHTML="Stop";
        status=false
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML="Start";
        status=true
    }
}
function Reset(){
    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
  document.getElementById("startStop").innerHTML="Start";
  
}