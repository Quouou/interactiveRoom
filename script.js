const secHand = document.querySelector("[data-second]")
const secMinute = document.querySelector("[data-minute]")
const secHour = document.querySelector("[data-hour]")
function setClock()
{
    console.log("This is a clock")
    const currentDate = new Date()
    const hr = currentDate.getHours();
    const min = (currentDate.getMinutes() + sec) / 60;
    const sec = currentDate.getSeconds()/60;
    setRotation(secHand, sec)
    setRotation(setMinute, min)
    console.log(sec)
    
}   
function setRotation(hand,angle)
{
    hand.style.setProperty('--rotation',angle * 360)
}
setInterval(setClock, 1000)
setClock()