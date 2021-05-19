const calender=document.querySelector("#date-calender");    
for(let day = 1;day <= 31;day++){
calender.insertAdjacentHTML("beforeend",
`<div class="day">${day}</day>`);
}