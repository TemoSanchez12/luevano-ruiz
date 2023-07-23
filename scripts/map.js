var map = L.map('map').setView([22.40782227957959, -102.26280413280575], 14)

var popup = L.popup()
  .setLatLng([22.40782227957959, -102.26280413280575])
  .setContent('Vinicola Luévano Ruíz')
  .openOn(map)

var marker = L.marker([22.40782227957959, -102.26280413280575])
.addTo(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)
