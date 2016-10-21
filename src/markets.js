//React Imports
import React, {Component} from 'react';
import $ from 'jquery';

//CSS Imports


class Markets extends React.Component {
	constructor(props) {
	super(props);
	this.handleKeyPress = this.handleKeyPress.bind(this);
	this.handleChange = this.handleChange.bind(this);
	}
	handleKeyPress(event) {
		if (event.key === 'Enter') {
			this.zipMarkets()
		}
	}
	handleChange(event) {
		const input = event.target.value
		
		if (input) {
		this.setState({value: input})
		} 
	}
	handleButton () {
		if (id === btnCounty) {
			this.countyMarkets()
		}
	}
	countyMarkets () {
		console.log('County: Not Quite Finished')
	}
	cityMarkets () {
		console.log('City: Not Quite Finished')
	}
	zipMarkets () {
		this.setState({fetching: true})
		const that = this
		const featured = [];

		$.ajax({
			url: 'https://data.ny.gov/resource/farmersmarkets.json?zip=' + that.state.value,
			success: function (data) {
				setTimeout (function(){

					for (var i = 0; i < data.length; i++) {	
					let marketName = data[i].market_name
					let lat = data[i].latitude
					let lng = data[i].longitude
					let order = i
					let address = data[i].address_line_1
					let city = data[i].city
					let zip = data[i].zip
					let phone = data[i].phone
					let url = data[i].market_link.url

					console.log('data:',marketName, address, lat, lng)

					featured.push({
						key: order, 
						name: marketName, 
						location: address + ',\n' + city + 'NY ' + zip,
						phone: phone,
						url: url,
						position: lat + ',' + lng
					})
					

					}
				}, 1000)
			}
		})
		this.setState({featured: featured})	
		console.log('featured:',featured)
	}
	render () {
		return (
			<div>
				<div id="buttonRow" className="btn-group btn-group-justified" role="group" aria-label="Justified button group"> 
				    <a onClick={this.countyMarkets} id="btnCounty" className="btn btn-default" role="button">County</a>
				    <a onClick={this.cityMarkets} id="btnCity" className="btn btn-default" role="button">City</a>
				    <a onClick={this.zipMarkets} id="btnZip" className="btn btn-default" role="button">Zip</a>
				</div>
				<div className='inputRow'>
					<input 
						id="search" 
						onKeyPress={this.handleKeyPress}
						onChange={this.handleChange}
						type="text"></input>
					<a
						role="button"
						className="searchBox" 
						onClick={this.handleButton}>
							<i className="fa fa-search"></i>
					</a>
				</div>	
			</div>
		)
	}
}

export default Markets