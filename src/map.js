import React, {Component} from 'react';
import Markets from './markets';

import './carrot.png'

class Maps extends React.Component { 
    getDefaultProps () {
        return {
            initialZoom: 8,
            mapCenterLat: 40.742301,
            mapCenterLng: -73.935484
        };
    }
    componentDidMount (rootNode) {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom
        },
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map});
    }
    mapCenterLatLng () {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    }

	createMap () {
		let API = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA_2nxBWxm8KwwWWeM6IY-YtxHi0jnEhak&callback=initialize';
		let map;
		let list;
		
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 16,
				center: new google.maps.LatLng(40.742301, -73.935484),
				mapTypeId: 'roadmap'
			})

			///////
			let iconBase: 'https://maps.google.com/mapfiles/kml/shapes/';
			let icons = {
				icon: iconBase + 'carrot.png'
			};

			///////
			function addMarker(feature) {
				let marker = new google.maps.Marker({
					position: feature.position,
					icon: icons.icon,
					map: map
				})
			}

			///////
			this.list = this.props.featured

			for (var i = 0; i < this.list.length; i++) {
          	this.addMarker(feature);
        	}
			
		
		
	}
	render () {
		return (
			<div id="map">
				
			</div>

		)
	}
}

export default Maps