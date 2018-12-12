import React, { Component } from 'react';
import { Layout, Menu, Card, Input, Tag,Button,Drawer,Avatar, Badge,Icon,Dropdown,Popover} from 'antd';
import './App.css';
import {Link} from 'react-router-dom'
import Editor from './components/Editor/canvaslib'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const text =<div><Link to='/Account'><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size="large" >Tom</Avatar></Link><span>用户ID</span></div>;
const menu = (
  <Menu>
    <Menu.Item key="0">
      1st menu item
    </Menu.Item>
    <Menu.Item key="1">
     2nd menu item
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

  class App extends Component {
    state = {
      collapsed: false,
      visible: false
    };
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    render() {
      return (
        <Layout>
          <Sider 
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          collapsedWidth={0}
         
          className="Sider"
          style={{overflow: 'visible', height: '100vh',}}
          >
            left sidebar
          </Sider>
         
         
         
          <div className="flowbar" style={{right:170,top:20}}>
           
           <Popover placement="bottomLeft" title={text} content={menu} trigger="click">
           <Button type="dashed" shape="circle" >
           <Icon type="ellipsis" />
           </Button>

         </Popover>
                
            
          </div>

            <div className="flowbar" style={{right:90,top: 20}}>
               <Button type="primary" onClick={this.showDrawer}>
                 视图
              </Button>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            
            </div>
            <div className="flowbar" style={{right:10,top:20}}>
            <span style={{ marginRight: 24, }}>
                <Badge count={1}><Link to='/Account'><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}  icon="user" /></Link></Badge>
              </span>
            </div>
            <Layout>
            <Content className="Content" style={{minHeight:"100vh", margin: '0 16px'}}>
            <div>Contentaaaaaaaaaaa</div>
            <Editor/>
            </Content>
            </Layout>
          </Layout>
      );
    }
  }

  export default App;