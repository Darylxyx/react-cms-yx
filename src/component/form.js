import React from 'react';
import { Form, Input, Radio, Checkbox, Select, DatePicker, Switch, Upload, Button, Icon, Col } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class myForm extends React.Component {

	constructor(props) {
        super(props)
    }

	render() {

		// const { getFieldProps } = this.props.form;

		const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

		return (<Form horizontal>
					<FormItem
						id='control-input'
						label='输入框'
						{...formItemLayout}
						required
					>
						<Input type='text' id='control-input' placeholder='Enter something...' />
					</FormItem>
					<FormItem 
						label='单项选择框'
						{...formItemLayout}
						required
					>
						<RadioGroup defaultValue='b'>
							<Radio value='a'>A</Radio>
							<Radio value='b'>B</Radio>
							<Radio value='c'>C</Radio>
							<Radio value='d'>D</Radio>
						</RadioGroup>
					</FormItem>
					<FormItem
						label='多项选择框'
						{...formItemLayout}
					>
						 <Checkbox className="ant-checkbox-inline">选项一</Checkbox>
						 <Checkbox className="ant-checkbox-inline">选项二</Checkbox>
						 <Checkbox className="ant-checkbox-inline">选项三</Checkbox>
					</FormItem>
					<FormItem
						id='control-textarea'
						label='文本域'
						{...formItemLayout}
					>
						<Input type='textarea' id='control-textarea' rows='3' />
					</FormItem>
					<FormItem
						id='control-select'
						label='下拉框'
						{...formItemLayout}
					>
						<Select id='control-select' size='large' defaultValue='o1' >
							<Option value='o1'>Option1</Option>
							<Option value='o2'>Option2</Option>
							<Option value='o3'>Option3</Option>
						</Select>
					</FormItem>
					<FormItem
			          label="日期选择框"
			          labelCol={{span: 3}}
			          required
			        >
			        	<Col span="2">
			        		<FormItem>
			    				<DatePicker cols='10' />
			    			</FormItem>
			        	</Col>
			          	<Col span="1">
			            	<p className="ant-form-split">-</p>
			          	</Col>
			          	<Col span="2">
			            	<FormItem>
			              		<DatePicker />
			            	</FormItem>
			          	</Col>
			        </FormItem>
			        <FormItem
			        	label='开关'
			        	{...formItemLayout}
			        >
			        	<Switch checkedChildren="开" unCheckedChildren="关"  />
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
         			 	<Button type="primary" htmlType="submit">确定</Button>
        			</FormItem>
				</Form>);
	}
}

export default myForm;