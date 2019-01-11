import React, { Component } from 'react';
import {Form, Icon, Avatar,Input, Button,Pagination, Checkbox,Select,Row,Col ,Switch,Modal,Layout,Card,Tree,} from 'antd';
import {Link} from 'react-router-dom'
import './creatcourse.css'
const { TextArea } = Input;
const {Meta} = Card;
const Option = Select.Option;
const {  Content, Sider,Header, } = Layout;
const TreeNode = Tree.TreeNode;
function handleChange(value) {
    console.log(`selected ${value}`);
}
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1009429_5fzr0d23izi.js',
  });

const CourseLine = Form.create()(props => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible} 
        title="课件大纲"
        onCancel={onCancel} 
        onOk={onCreate}
        footer={[
          <Button key="return" onClick={onCancel}>取消</Button>,
          <Link to='/APP'><Button key="next" type="primary"> 完成创建 </Button></Link>,
        ]}>
        <Form>
        <Form.Item >
        <p style={{fontSize:'16px'}} ><IconFont type="icon-mubiao" /> 学习目标</p>
        <TextArea style={{ minHeight: 32 ,minWidth: 300}} placeholder="200个字以内" rows={4} />
        </Form.Item >
        <Form.Item >
        <p style={{fontSize:'16px' }} ><IconFont type="icon-demand" /> 学习要求</p>
        <TextArea style={{ minHeight: 32 ,minWidth: 300}} placeholder="200个字以内" rows={4} />
        </Form.Item >
        <Form.Item >
        <p style={{fontSize:'16px' }} ><IconFont type="icon-xintubiao-" /> 考核标准</p>
        <TextArea style={{ minHeight: 32 ,minWidth: 300}} placeholder="200个字以内" rows={4} />
        </Form.Item >
        <Form.Item >
        <p style={{fontSize:'16px' }} ><IconFont type="icon-jiaocaixuanze" /> 教材教参</p>
        <TextArea style={{ minHeight: 32 ,minWidth: 300}} placeholder="200个字以内" rows={4} />
        </Form.Item >
      </Form>
      </Modal>
    );
  });
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  class Creatcourse extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          arrSize: 0,
          collapsed: false,//控制sider折叠
          visible: false, //控制弹出框的呈现与隐藏
          templatevisible:false,//控制课件模版弹出框
        }
        this.arr = [this.generateROW()]
      }
      //课件大纲弹出框事件
      showModal = () => {
        this.setState({ visible: true });
      };
      handleCancel = () => {
        this.setState({ visible: false });
      };
      handleCreate() {
        this.setState({ visible: false });
      }
      saveFormRef = form => {
        this.form = form;
      };
      //课件模版选择确认弹出框
    showModal_template = () => {
      this.setState({
        templatevisible: true,
      });
    }
  
    handleOk_template = (e) => {
      console.log(e);
      this.setState({
        templatevisible: false,
      });
      Modal.success({
        title: '消息提示',
        content: '成功选择该课件模版！',
      });
    }
  
    handleCancel_template = (e) => {
      console.log(e);
      this.setState({
        templatevisible: false,
      });
    }
      //侧栏知识点弹出框事件
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
      //树状知识点点击事件
      onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      }
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
      handlePlus() {
        if (this.state.arrSize < 7) {
          this.arr.push(this.generateROW())
          this.setState({ arrSize: this.state.arrSize + 1 })
        } else {
          Modal.warning({
            title: '注意：',
            content: '最多8个目录！',
          });
        }
      }
    
      handleMinus() {
        if (this.state.arrSize > 0) {
          this.arr.pop()
          this.setState({ arrSize: this.state.arrSize - 1 })
        } else {
          Modal.warning({
            title: '注意：',
            content: '最少1个目录！',
          });
        }
      }
      generateROW() {
        return (
          <div>
              <Input placeholder="课件目录名称"  style={{ width: 300 }}/>
          </div>
        )
      }
    render() {
      const coursetemplate_one = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:280}}
                  cover={
                    <img onClick={this.showModal_template}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={20}>
                    <Meta
                        title="课件模版"
                        description="适用于科技类、教育类"
                     />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={18}>
                        <Link to='/Tempreview'><Icon type="eye"/> 预览模版</Link>
                    </Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const coursetemplate_two = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:280}}
                  cover={
                    <img onClick={this.showModal_template}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={20}>
                    <Meta
                        title="课件模版"
                        description="适用于动画、古风类"
                     />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={18}>
                        <Link to='/Tempreview'><Icon type="eye"/> 预览模版</Link>
                    </Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const coursetemplate_three = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:280}}
                  cover={
                    <img onClick={this.showModal_template}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={20}>
                    <Meta
                        title="课件模版"
                        description="适用于新闻类、宣传类"
                     />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col span={18}>
                        <Link to='/Tempreview'><Icon type="eye"/> 预览模版</Link>
                    </Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const coursetemplate = (
        <div>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col>{coursetemplate_one}</Col>
          </Row>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col>{coursetemplate_two}</Col>
          </Row>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col>{coursetemplate_three}</Col>
          </Row>
          <Row style={{ margin: '8px 8px 8px 0',textAlign: 'center' }}>
            <Pagination  defaultCurrent={1} total={500} />
            {/* <Pagination showQuickJumper defaultCurrent={1} total={500} /> */}
          </Row>
        </div>
      );
        const sidecontent=(
            <div>
                <div borderd={false} title="选择知识点" style={{ margin: '16px 16px 16px 16px'}}>
                      <Tree showLine defaultExpandedKeys={['0-0-0', '0-1-2']} onSelect={this.onSelect}>
                        <TreeNode title="一次方程" key="0-0">
                          <TreeNode title="一次方程概念" key="0-0-0" />
                          <TreeNode title="一次方程特点" key="0-0-1" />
                          <TreeNode title="一次方程应用" key="0-0-2">
                            <TreeNode title="应用实例" key="0-0-2-0" />
                          </TreeNode>
                        </TreeNode>
                        <TreeNode title="二次方程" key="0-1">
                          <TreeNode title="二次方程概念" key="0-1-0" />
                          <TreeNode title="二次方程特点" key="0-1-1" />
                          <TreeNode title="二次方程应用" key="0-1-2">
                            <TreeNode title="应用实例" key="0-1-2-0" />
                          </TreeNode>
                        </TreeNode>
                        <TreeNode title="二次函数" key="0-2" />
                        <TreeNode title="分数" key="0-3" />
                        <TreeNode title="比值" key="0-4" />
                      </Tree>
                    </div>
            </div>
        );
     
      return (
        <Layout style={{ backgroundColor: '#fff' }}>
        <Modal
          title="是否选用该模版"
          visible={this.state.templatevisible}
          onOk={this.handleOk_template}
          onCancel={this.handleCancel_template}
          footer={null}
        >
        <p className="right">
           <Button key="return" onClick={this.handleCancel_template}>取消</Button>
           <Button key="next" type="primary" onClick={this.handleOk_template}> 确定 </Button>
        </p>
        </Modal>   
        <Sider 
        width={300}
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        collapsedWidth={0}
       
        className="Sider"
        style={{width: '100%', height: '700px'}}
        >
         {sidecontent}
        </Sider>
      <Card style={{width: '100%', height: '100%'}}>
          <div className="flowbar" style={{right:10,top:20}}>
            <span style={{ marginRight: 24, }}>
            <Link to='/Account'><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}  icon="user"/></Link>
            </span>
          </div>
        <div>
         <Row gutter={16}>
         <Col span={12}>
        <div style={{ color: 'green', fontSize:'20px',margin:'10px 0px 30px 0px' }} >创建课件</div>
         
        <Form>
          <Form.Item label="课件名称" {...formItemLayout}>
            <Input placeholder="20字以内"  style={{ width: 300 }}/>
          </Form.Item>
          <Form.Item label="年级科目" {...formItemLayout}>
          <Row gutter={16}>
          <Col span={12}>
          <Select defaultValue="1" onChange={handleChange} style={{width:'100%'}}>
                    <Option value="1">请选择年级</Option>
                    <Option value="2">小学</Option>
                    <Option value="3"> 初中</Option>
                    <Option value="4">高中</Option>
          </Select> 
          </Col> 
          <Col span={12}>
           <Select defaultValue="1" onChange={handleChange} style={{width:'100%'}}>
                    <Option value="1">请选择科目</Option>
                    <Option value="2">语文</Option>
                    <Option value="3"> 数学</Option>
                    <Option value="4">英语</Option>
                    <Option value="5"> 物理</Option>
                    <Option value="6">化学</Option>
                    <Option value="7">生物</Option>
                    <Option value="8"> 政治</Option>
                    <Option value="9">历史</Option>
                    <Option value="10">地理</Option>
            </Select> 
            </Col> 
            </Row>                 
          </Form.Item>
          <Form.Item label="课件简介" {...formItemLayout}>
           <TextArea style={{ minHeight: 32 ,minWidth: 300}} placeholder="200个字以内" rows={4} />
          </Form.Item>

          <Form.Item label="知识点" {...formItemLayout}>
          <Row gutter={16}>
          <Col span={20}>
             <Input placeholder="在这里写下你的知识点"  style={{ width:'100%'}}/>
          </Col> 
           <Col span={4}>
              <Button onClick={this.toggle}>选择知识点</Button>
            </Col> 
            </Row>                 
          </Form.Item>
          <Form.Item label="公开/私密" {...formItemLayout}>
          <Row gutter={8}>
          <Col span={10}>
             <Switch checkedChildren="公开" unCheckedChildren="私密" defaultChecked />
          </Col> 
          </Row>
          </Form.Item>
          <Form.Item label="是否可编辑" {...formItemLayout}>
          <Select defaultValue="1" onChange={handleChange} style={{width:"100%"}}>
                    <Option value="1">可编辑</Option>
                    <Option value="2">不可编辑</Option>
          </Select> 
          </Form.Item>
          <Form.Item label="课件目录" {...formItemLayout}>
          <Row gutter={16}>
           <Col span={12}>
            <Button type="dashed" style={{ width: '100%' }} onClick={this.handlePlus.bind(this)}><Icon type="plus" />添加</Button>
            </Col>
            <Col span={12}>
            <Button type="dashed" style={{ width:'100%' }} onClick={this.handleMinus.bind(this)}><Icon type="minus" />删除</Button>
            </Col>
            </Row>
          </Form.Item>
          <Form.Item label="目录名称" {...formItemLayout}>
          <Row key={this.state.arrSize}>
                <Col span={8}>
                  {
                    this.arr.map((v, i) => {
                      return (
                        <Row gutter={8} key={i}>
                           <Col span={10}>
                          <Input placeholder="课件目录名称"  style={{ width: 300 }}/>
                           </Col>
                        </Row>
                      )
                    })
                  }
                </Col>
            </Row>
            </Form.Item>
               <Form.Item label="课件大纲安排" {...formItemLayout}>
                  <Button onClick={this.showModal} type="primary" >
                    课件大纲
                  </Button>
               </Form.Item>
        </Form>
        <CourseLine
              ref={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate.bind(this)}
            />
            </Col>
            <Col span={12}>
              <Card style={{margin:'50px 0px 30px 100px',width:320 }} >
                 {coursetemplate}
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
      </Layout>
      );
    }
  }
  
  export default Creatcourse;