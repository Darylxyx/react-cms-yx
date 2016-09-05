import React from 'react';
import { Row, Col } from 'antd';

class myDependent extends React.Component {
	render() {
		return (<div className='dependent'>
					<Row>
						<Col span={8} offset={1}>
							<h1>Dependencies</h1>
							<p>· React</p>
							<p>· React-router</p>
							<p>· Antd</p>
							<p>· Webpack</p>
							<p>· Highcharts</p>
						</Col>
					</Row>
				</div>);
	}
}

export default myDependent;