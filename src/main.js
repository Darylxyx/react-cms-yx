import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import Sider from './component/sider.js';

class App extends React.Component {
	render() {
		return (<Sider />);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));