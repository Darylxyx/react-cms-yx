import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MItem = Menu.Item;
import '../../node_modules/antd/dist/antd.min.css';

class Sider extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {

	// 	};
	// }

	render() {
		return (<div>
					<div id='leftMenu'>
						<Menu theme='dark'
							mode='inline'
							defaultOpenKeys={['sub1']}
						>
							<SubMenu key='sub1' title={<span>导航</span>}>
								<MItem key='item1'>菜单一</MItem>
								<MItem key='item2'>菜单二</MItem>
							</SubMenu>
						</Menu>
					</div>
					<div id='rightWrap'></div>
				</div>);
	}
}

export default Sider;