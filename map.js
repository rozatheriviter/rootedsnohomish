document.addEventListener('DOMContentLoaded', () => {
    if (typeof L === 'undefined') {
        console.error('Leaflet JS is not loaded.');
        return;
    }

    // Initialize the map centered on Snohomish County
    // Coordinates for Snohomish County, WA roughly: 48.0, -121.7 (approx center) or Everett: 47.97, -122.20
    const map = L.map('map').setView([48.0, -122.0], 10);

    // Add standard OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
