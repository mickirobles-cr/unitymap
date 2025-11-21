let map = document.getElementById("map");

function addMarker() {
    let title = document.getElementById("title").value.trim();
    let desc = document.getElementById("description").value.trim();

    if (title === "" || desc === "") {
        alert("Please fill in all fields.");
        return;
    }

    let marker = document.createElement("div");
    marker.classList.add("marker");

    marker.innerHTML = `
        <strong>${title}</strong><br>
        <small>${desc}</small>
        <hr>
    `;

    marker.style.background = "white";
    marker.style.border = "1px solid black";
    marker.style.padding = "10px";
    marker.style.margin = "10px";

    map.appendChild(marker);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}
