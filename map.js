document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map centered on Snohomish County
    // Coordinates for Snohomish County, WA roughly: 48.0, -121.7 (approx center) or Everett: 47.97, -122.20
    const map = L.map('map').setView([48.0, -122.0], 10);

    // Add "Transport Map" / "ÖPNVkarte" tile layer
    // This is a free tile layer based on OpenStreetMap
    L.tileLayer('https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Iterate through resources and add markers
    if (typeof resources !== 'undefined' && Array.isArray(resources)) {
        resources.forEach(resource => {
            if (resource.lat && resource.lng) {
                const marker = L.marker([resource.lat, resource.lng]).addTo(map);

                const popupContent = `
                    <strong>${resource.name}</strong><br>
                    <span class="card-category">${resource.category}</span><br>
                    ${resource.address}<br>
                    ${resource.phone}<br>
                    <a href="${resource.notes.startsWith('http') ? resource.notes : 'https://' + resource.notes}" target="_blank">Website</a>
                `;

                marker.bindPopup(popupContent);
            }
        });
    }
});
