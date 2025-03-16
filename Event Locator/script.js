const events = [
    { id: 1, name: "Tech Conference", date: "2025-04-15", location: "Kigali", category: "Tech", description: "A conference about the latest in technology." },
    { id: 2, name: "Music Festival", date: "2025-05-20", location: "Rwanda", category: "Music", description: "Enjoy live music performances." },
];

function loadEvents() {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";
    events.forEach(event => {
        const eventCard = `<div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>${event.name}</h5><p class='card-text'>${event.date} - ${event.location}</p><a href='event-details.html?id=${event.id}' class='btn btn-primary'>View Details</a></div></div></div>`;
        eventList.innerHTML += eventCard;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("event-list")) {
        loadEvents();
    }
});