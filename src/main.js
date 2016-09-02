import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import '../node_modules/antd/dist/antd.min.css';
// import 'animate.css/animate.min.css';

import mySider from './component/sider.js';
import myForm from './component/form.js';
import myChart from './component/chart.js';
import myTable from './component/table.js';
import myCalendar from './component/calendar.js';

ReactDom.render(<Router history={hashHistory}>
					<Route path='/' component={mySider}>
						<IndexRoute component={myForm} />
						<Route path='chart' component={myChart} />
						<Route path='table' component={myTable} />
						<Route path='calendar' component={myCalendar} />
					</Route>
				</Router>, document.querySelector('.container'));