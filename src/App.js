//React Imports
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import Markets from './markets';
import Icons from './map';
import Image from './image'

//SCSS CSS Imports
import '../sass/styles.scss';



class App extends React.Component {
	render () {
		return (
			<div className="newDiv">
				<div className="basketPic">
					<Image />
				</div>
				<div className="row1">
					<h1>Find NYS Farmers Markets</h1>
				</div>
					<Markets />
				<div className="mapContainer">	
					
				</div>
			</div>
		)
	}
}

export default App;