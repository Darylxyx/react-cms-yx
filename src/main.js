import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import '../node_modules/antd/dist/antd.min.css';
// import 'animate.css/animate.min.css';

import Sider from './component/sider.js';
import Form from './component/form.js';
import Chart from './component/chart.js';

ReactDom.render(<Router history={hashHistory}>
					<Route path='/' component={Sider}>
						<IndexRoute component={Form} />
						<Route path='chart' component={Chart} />
					</Route>
				</Router>, document.querySelector('.container'));