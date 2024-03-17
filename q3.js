function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var period = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12;
    hours = hours ? hours : 12; 
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');

    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
    $('#period').text(period);
}

$(document).ready(function() {
    updateClock();
    setInterval(updateClock, 1000);
});
