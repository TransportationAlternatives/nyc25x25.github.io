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
            title: 'This is Northern Boulevard, Queens',
            description: 'Atlantic Avenue in Brooklyn is the site of high levels of traffic violence, a problem which is especially bad at high traffic intersections such as Flatbush Avenue, Fort Greene Place, and 4th Avenue. These five-to-six-lane dangerous streets are bordered by narrow sidewalks, and lack any protected bike infrastructure either on the streets or nearby. ',
            location: {
                center: { lon: -73.97253, lat: 40.68255 },
                zoom: 16.31,
                pitch: 38.25,
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
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'In the top 20% of most dangerous intersections in the city',
            description: 'In the last 5 years, there have been 75 reported injuries at the intersection of Flatbush and Atlantic Avenue, with 12 fatal crashes in 2021 alone.',
            location: {
                center: { lon: -73.97747, lat: 40.68406 },
                zoom: 19.19,
                pitch: 0.00,
                bearing: 30.00
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
            title: 'The majority of residents walk and ride transit',
            description: 'Atlantic Ave-Barclays Center is one of the busiest subway stations in New York, with 44,000 daily riders, 98% of whom walk to the station — where sidewalks are sometimes only five feet wide. 69% of households within walking distance of Atlantic Avenue do not own a car. ',
            location: {
                center: { lon: -73.97490, lat: 40.68304 },
                zoom: 17.00,
                pitch: 39.98,
                bearing: -34.69
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
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Unsafe design, but a “Vision Zero Priority Area”',
            description: 'Atlantic Avenue is 117 feet wide. Over 80% of this public space is dedicated to moving or storing vehicles, 18% for pedestrians, 0% for buses, and 0% for cyclists. The avenue’s car and parking lanes stretch 94 feet, which could fit a nine-lane highway.',
            location: {
                center: { lon: -73.96928, lat: 40.68215 },
                zoom: 19.53,
                pitch: 60.00,
                bearing: -74.85
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Car-centric infrastructure leads to negative externalities',
            description: 'Asthma hospitalizations in this area are 2x higher than the citywide average, due to disproportionate exposure to noise, particulate matter, and emissions from engines. The lack of permeable surfaces led to 12+ inches of flooding reported during Hurricane Ida. The community boards that represent this area are rated high on the Climate Change Vulnerability Index, due to high surface temperatures and low tree coverage, street cleanliness, and access to green space',
            location: {
                center: { lon: -73.96660, lat: 40.68157 },
                zoom: 19.53,
                pitch: 60.00,
                bearing: -74.85
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
