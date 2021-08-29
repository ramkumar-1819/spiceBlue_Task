const date=new Date();
var initialDate=Number(date.getDate());                   
var month=Number(date.getMonth())+1;
if(month<10){
    month="0"+month
}
if(initialDate<10){
  initialDate="0"+initialDate;
}
var min_date=date.getFullYear()+"-"+month+"-"+initialDate;
function time_seconds(value){
        const dateObj = new Date(value * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        return(hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0'))
}
//min_date - hold today's date where the date field's min values should be today in addTask or updateTask.
//time_seconds - convert incoming seconds to time.
export {min_date,time_seconds};