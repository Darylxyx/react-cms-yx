import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MItem = Menu.Item;

class Sider extends Component {

	render() {
		return (<div>
					<div id='leftMenu'>
						<div className='logo'>
							<div className='cover'>
								<img width='100%' src={require('../images/logo.png')} />
							</div>
						</div>
						<Menu theme='dark'
							mode='inline'
							defaultOpenKeys={['func', 'setting']}
						>
							<SubMenu key='func' title={<span><Icon type="appstore" />功能</span>}>
								<MItem key='form'><IndexLink to='/'>表单</IndexLink></MItem>
								<MItem key='chart'><Link to='/chart'>图表</Link></MItem>
								<MItem key='table'><Link to='/table'>表格</Link></MItem>
								<MItem key='calendar'><Link to='/calendar'>日历</Link></MItem>
							</SubMenu>
							<SubMenu key='setting' title={<span><Icon type="setting" />设置</span>}>
								<MItem key='style'>风格</MItem>
								<MItem key='about'>关于</MItem>
							</SubMenu>
						</Menu>
					</div>
					<div id='rightWrap'>
						<div className='right-title'></div>
						<div className='right-box'>
							{this.props.children}
						</div>
					</div>
				</div>);
	}
}

export default Sider;