import {statusActivityPage} from './form-status.js';
import {getCard} from './create-card.js';
import {getData} from './fetch.js';
import {getFilteredData, formFilterListener} from './cards-filter.js';
import {debounce} from './utils.js';

const addressInput = document.querySelector('#address');

statusActivityPage(false);

addressInput.readOnly = true;

const map = L.map('map-canvas')
  .on('load', () => {
    getData((data) => {
      getFilteredData(data);
      statusActivityPage(true);
      formFilterListener(debounce(() => getFilteredData(data)));
    });
  })
  .setView({
    lat: 35.68493,
    lng: 139.75213,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const iconSpecial = L.icon(
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainMarker = L.marker(
  {
    lat: 35.68493,
    lng: 139.75213,
  },
  {
    draggable: true,
    icon: iconSpecial,
  },
);

mainMarker.addTo(map);
addressInput.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const getMapPoints = function (array) {

  markerGroup.clearLayers();

  array.forEach(({author, offer, location}) => {
    const icon = L.icon(
      {
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20,40],
      },
    );

    const lat = location.lat;
    const lng = location.lng;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(getCard({author, offer, location}),
        {
          keepInView: true,
          minWidth: 300,
          maxHeight: 400,
        },
      );
  });

};

const adFormResetLocation = () => {
  map
    .setView({
      lat: 35.68493,
      lng: 139.75213,
    }, 13);

  mainMarker
    .setLatLng(
      {
        lat: 35.68493,
        lng: 139.75213,
      },
    );

  addressInput.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;
};

export {getMapPoints, adFormResetLocation};
