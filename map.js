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

                // Content: Name, Category, Transportation
                // Styling: Handled by classes defined in style.css (.map-popup, etc.)
                const popupContent = `
                    <div class="map-popup">
                        <h3>${resource.name}</h3>
                        <span class="popup-category">${resource.category}</span>
                        <p class="popup-transport">
                            <strong>Transportation:</strong> ${resource.transportation || 'N/A'}
                        </p>
                    </div>
                `;

                marker.bindPopup(popupContent);
            }
        });
    }
});
