
setInterval(updateClock, 1000);
function updateClock() {
    var clok = new Date();

    // Time Start
    var hourse = clok.getHours();
    var minutes = clok.getMinutes();
    var session = "AM";


    if(hourse==0){
        hourse = 12; // To make it 12 hour format 
    }

    if(hourse > 0){
        hourse = hourse - 12; // To make it 12 hour format 
        session = "PM";
    }

    hourse = (hourse < 10 ? "0" : "") + hourse;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    document.getElementById("clock").innerHTML = hourse + " : " + minutes + " " + session; 


    // Date Start
    var date = clok.getDate();
    var month = clok.getMonth();
    var year = clok.getFullYear();
    date = (date < 10 ? "0" : "") + date;
    month = parseInt((month < 10 ? "0" : "") + month);
    month = month + 1;
    document.getElementById("fulldate").innerHTML = date + " : " + month + " : " + year;             

    // Day Start
    var da = clok.getDay();
    document.getElementById("day").innerHTML = day(da);    

}
updateClock();

function day(day){
    var dayOfWeek = day; // Change this value to the day you want to check

    switch (dayOfWeek) {
        case 0:
            return "Sunday";        
        case 1:
            return "Monday";                  
        case 2:
            return "Tuesday";        
        case 3:
            return "Wednesday";        
        case 4:
            return "Thursday";        
        case 5:
            return "Friday";        
        case 6:
            return "Saturda";         
        default:
            return "Not Working";        
    }    
}












