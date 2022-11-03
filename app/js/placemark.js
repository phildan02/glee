ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [29.767537, -95.283336],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([29.767537, -95.283336], {}, {
            preset: 'islands#icon',
            iconColor: '#436372'
        }))
}