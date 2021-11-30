var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJja3dtZGV5aWsyYjJmMndub2R3cTBuazIyIn0.DaRqJP0ez4gMNtcslbVakQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'This is Atlantic Avenue, Brooklyn',
            description: 'Atlantic Avenue in Brooklyn is the site of high levels of traffic violence, a problem which is especially bad at high traffic intersections such as Flatbush Avenue, Fort Greene Place, and 4th Avenue.',
            location: {
                center: { lon: -73.95417, lat: 40.68171 },
                zoom: 13.85,
                pitch: 50.00,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'A dangerous place to walk and bike',
            description: 'These five-to-six-lane dangerous streets are bordered by narrow sidewalks, and lack any protected bike infrastructure either on the streets or nearby.',
            location: {
                center: { lon: -73.95035, lat: 40.67849 },
                zoom: 19.53,
                pitch: 60.00,
                bearing: -84.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Now imagine what 25x25 could do for it.',
            description: 'The communities around Atlantic Avenue are disproportionately exposed to truck noise, vibrations, particulate matter, and emissions from diesel engines because the street carries truck volumes comparable to a highway. ',
            location: {
                center: { lon: -73.95331, lat: 40.67868 },
                zoom: 14.68,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
