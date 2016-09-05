import React from 'react';
import { Row, Col } from 'antd';

class myAbout extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	active: false
        };
    }

	render() {
		return (<div className={this.state.active ? 'about active' : 'about'}>
					<Row>
						<Col span={8} offset={8}>
							<img src={require('../images/avatar.png')} />
							<h2>Daryl_xyx</h2>
							<a href='https://github.com/Darylxyx' target='_blank'>Github</a>
							<a href='http://www.cnblogs.com/ghost-xyx/' target='_blank'>CNblogs</a>
						</Col>
					</Row>
				</div>);
	}

	componentDidMount() {
		window.setTimeout(() => {
			this.setState({
				active: true
			});
		}, 100);

	}
}

export default myAbout;