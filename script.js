// script.js
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;
    alert(`Köszönjük, ${name}! A visszajelzésed: ${attendance}.`);
});
