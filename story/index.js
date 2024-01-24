function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 22.3072, lng: 73.1812 },
    });

    // Adding markers for start and end locations
    const startMarker = new google.maps.Marker({
      position: { lat: 22.3072, lng: 73.1812 },
      map: map,
      label: 'S', // 'S' for start
    });

    const endMarker = new google.maps.Marker({
      position: { lat: 24.5854, lng: 73.7125 }, // Udaipur's coordinates
      map: map,
      label: 'E', // 'E' for end
    });

    directionsRenderer.setMap(map);
    document.getElementById("submit").addEventListener("click", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}

// Rest of the JavaScript code remains the same...
