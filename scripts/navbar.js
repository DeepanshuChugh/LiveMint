import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar();

let today = new Date();

let day = today.getDay();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
switch (day)
{
case 0:
    day="Sunday";
    break;
case 1:
    day="Monday";
    break;
case 2:
    day="Tuesday";
    break;
case 3:
    day="Wednesday";
    break;
case 4:
    day="Thursday";
    break;
case 5:
    day="Friday"
    break;
case 6:
    day="saturday";
}

switch (month)
{
case 0:
    month="January"
    break;
case 1:
    month="Feburary"
    break;
case 2:
    month="March"
    break;
case 3:
    month="April"
    break;
case 4:
    month="May"
    break;
case 5:
    month="June"
    break;
case 6:
    month="July"
    break;
case 7:
    month="August"
    break;
case 8:
    month="September"
    break;
case 9:
    month="October"
    break;
case 10:
    month="November"
    break;
case 11:
    month="December"
}
let currentDate=day+","+date+" " +month+" "+year;
document.getElementById("todayDate").textContent=currentDate
console.log(currentDate);

