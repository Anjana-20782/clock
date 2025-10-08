let hourHand=document.getElementById('hour')
let minuteHand=document.getElementById('minute')
let secondHand=document.getElementById('second')


function setClock(){

    let currentDate=new Date()
    let secondRatio=currentDate.getSeconds() / 60;
    let minuteRatio=(secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio=(minuteRatio + currentDate.getHours()) / 12;
}