import React from 'react';
import { Calendar } from 'antd';

class myCalendar extends React.Component {
	render() {

		function dateCellRender(value) {
  			return <div style={{fontSize:'12px'}}>自定义日数据  {value.getDayOfMonth()}号</div>;
		}

		function monthCellRender(value) {
  			return <div style={{fontSize: '12px'}}>自定义月数据  {value.getMonth()}月</div>;
		}

		return (<Calendar defaultValue={new Date('2016-9-2')} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />);
	}
}

export default myCalendar;