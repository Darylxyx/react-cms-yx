import React from 'react';
import { Table } from 'antd';

class myTable extends React.Component {
	constructor(props) {
		super(props)
    }

	render() {

		const columns = [{
			title: '姓名',
			dataIndex: 'name',
			width: '20%'
		}, {
			title: '年龄',
			dataIndex: 'age',
			width: '20%'
		}, {
			title: '住址',
			dataIndex: 'address',
			width: '20%'
		}, {
			title: '备注',
			dataIndex: 'remark',
			width: '20%',
			render(text) {
				return (<a href={text} target='_blank'>Github</a>);
			}
		}, {
			title: '操作',
			dataIndex: 'control',
			width: '20%',
			render(text, record) {
				return (<a href='#/table'>操作  {record.name}</a>);
			}
		}];

		const dataArr = [];

		for (let i = 0; i < 50; i ++) {
			dataArr.push({
				name: `Dary_xyx_${i}`,
				age: Number(i + 25),
				address: `成都天府软件园${i+1}号`,
				remark: 'https://github.com/Darylxyx/react-cms-yx'
			});
		}

		const rowSelection = {
		  // 	onChange(selectedRowKeys, selectedRows) {
				// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		 	// },
		  // 	onSelect(record, selected, selectedRows) {
		  //   	console.log(record, selected, selectedRows);
		 	// },
		  // 	onSelectAll(selected, selectedRows, changeRows) {
		  //   	console.log(selected, selectedRows, changeRows);
		  // 	}
		};

		const pagination = {
			total: dataArr.length,
  			showSizeChanger: true
		};

		return (<Table rowSelection={rowSelection} columns={columns} dataSource={dataArr} pagination={pagination} bordered />);
	}
}

export default myTable;