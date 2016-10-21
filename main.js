import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App'
import './favicon.ico';

class Main extends React.Component {
	render () {
		return <App />
		{this.props.children}
	}
}

ReactDOM.render(
<Main />, document.getElementById('root'));