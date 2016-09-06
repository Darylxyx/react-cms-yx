import React from 'react';
import { Form, Input, Radio, Checkbox, Select, DatePicker, Switch, Upload, Button, Icon, Col, message, Modal, notification } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 6 }
}

class myForm extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	data: {},
        	modalShow: false
        }
    }

    handlerSubmit = (e) => {
    	e.preventDefault();
    	var submitData = this.props.form.getFieldsValue();
    	console.log(submitData);
    	if (!submitData.inputVal || !submitData.radioVal || !submitData.textareaVal || !submitData.selectVal || !submitData.startDate || !submitData.endDate) {
    		notification['warning']({
    			message: '提示',
    			description: '请将信息填写完整'
    		});
    		return;
    	}
    	this.setState({
    		modalShow: true,
    		data: this.props.form.getFieldsValue()
    	});
    	// message.success('操作成功');
    }

    handleOk = () => {
    	this.setState({
    		confirmLoading: true
    	});
    	setTimeout(() => {
    		this.setState({
    			modalShow: false,
    			confirmLoading: false
    		});
    		message.success('提交成功');
    	}, 1000);
    }

    handleCancel = () => {
    	this.setState({
    		modalShow: false
    	})
    }

    showModal = (e) => {
    	Modal.info({
			title: '这是一条通知信息',
			content: '一些附加信息一些附加信息一些附加信息',
			onOk() {
				console.log('Confirm the modal');
			}
		});
    }

    dateFormat(date) {
    	return date.getFullYear() +'-'+ (date.getMonth()+1) +'-'+ date.getDate();
    }

	render() {

		const { getFieldProps } = this.props.form;

		return (<Form horizontal onSubmit={this.handlerSubmit}>
					<FormItem
						id='control-input'
						label='输入框'
						{...formItemLayout}
						required
					>
						<Input {...getFieldProps('inputVal')} type='text' id='control-input' placeholder='Enter something...' />
					</FormItem>
					<FormItem 
						label='单项选择框'
						{...formItemLayout}
						required
					>
						<RadioGroup {...getFieldProps('radioVal')} defaultValue='B' >
							<Radio value='A'>A</Radio>
							<Radio value='B'>B</Radio>
							<Radio value='C'>C</Radio>
							<Radio value='D'>D</Radio>
						</RadioGroup>
					</FormItem>
					<FormItem
						label='多项选择框'
						{...formItemLayout}
					>
						 <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkbox1')}>选项一</Checkbox>
						 <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkbox2')}>选项二</Checkbox>
						 <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkbox3')}>选项三</Checkbox>
					</FormItem>
					<FormItem
						id='control-textarea'
						label='文本域'
						{...formItemLayout}
						required
					>
						<Input {...getFieldProps('textareaVal')} type='textarea' id='control-textarea' rows='3' />
					</FormItem>
					<FormItem
						id='control-select'
						label='下拉框'
						{...formItemLayout}
						required
					>
						<Select id='control-select' size='large' defaultValue='o1' {...getFieldProps('selectVal')} >
							<Option value='Option1'>Option1</Option>
							<Option value='Option2'>Option2</Option>
							<Option value='Option3'>Option3</Option>
						</Select>
					</FormItem>
					<FormItem
			          label="日期选择框"
			          labelCol={{span: 3}}
			          required
			        >
			        	<Col span="2">
			        		<FormItem>
			    				<DatePicker cols='10' {...getFieldProps('startDate')} />
			    			</FormItem>
			        	</Col>
			          	<Col span="1">
			            	<p className="ant-form-split">-</p>
			          	</Col>
			          	<Col span="2">
			            	<FormItem>
			              		<DatePicker {...getFieldProps('endDate')} />
			            	</FormItem>
			          	</Col>
			        </FormItem>
			        <FormItem
			        	label='开关'
			        	{...formItemLayout}
			        >
			        	<Switch {...getFieldProps('switchVal')} checkedChildren="开" unCheckedChildren="关"  />
			        </FormItem>
		         	<FormItem
			          	label="上传图片"
			          	help="*提示信息"
			          	{...formItemLayout}
			        >
			          	<Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload}>
			            	<Button type="ghost">
			              		<Icon type="upload" /> 点击上传
			            	</Button>
			          	</Upload>
			        </FormItem>
			        <FormItem wrapperCol={{offset: 3}} style={{ marginTop: 24 }}>
         			 	<Button type='primary' htmlType='submit'>确定</Button>
         			 	<Button onClick={this.showModal} type='ghost' style={{marginLeft:'20px'}}>点击有提示</Button>
        			</FormItem>
    			 	<Modal title="提交确认"
			    		visible={this.state.modalShow}
			          	onOk={this.handleOk}
			          	confirmLoading={this.state.confirmLoading}
			          	onCancel={this.handleCancel}
			        >
						<p>输入框：{this.state.data.inputVal}</p>
						<p>单选框：{this.state.data.radioVal}</p>
						<p>多选框：{this.state.data.checkbox1 && '选项一	'}{this.state.data.checkbox2 && '选项二	'}{this.state.data.checkbox3 && '选项三	'}</p>
						<p>文本域：{this.state.data.textareaVal}</p>
						<p>下拉框：{this.state.data.selectVal}</p>
						<p>日期选择：{this.state.data.startDate && this.dateFormat(this.state.data.startDate)} - {this.state.data.endDate && this.dateFormat(this.state.data.endDate)}</p>
						<p>开头状态：{this.state.data.switchVal ? '开' : '关'}</p>
			        </Modal>
				</Form>);
	}
}

myForm = Form.create()(myForm);

export default myForm;