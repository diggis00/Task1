import React, { Component } from 'react';
import { Avatar, Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css';
export default class AddShortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      name: '',
      url: ''
        // Shortcut: [
        //   { name: 'Digvijay Singh', url: 'www.google.com' },
        //   { name: 'Pratik', url: 'www.pratik.com' }
        // ]
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = e => {
    e.preventDefault();
    this.setState({ visible: false });
    console.log(this.state.name);
    console.log(this.state.url);
    // this.setState({
    //   Shortcut: [...this.state.Shortcut, { name: 'de' }]
    // });
    // console.log(e.target.name.value);
    // console.log(this.state.Shortcut.map(s => s.name));
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <div style={{ padding: 10 }}>
        <Button onClick={this.showModal} shape="circle" size="large">
          <Avatar icon="user" />
        </Button>
        <Modal
          title="Edit Shortcut"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button style={{ float: 'left' }}>Remove</Button>,
            <Button onClick={this.handleCancel}>Cancel</Button>,
            <Button type="primary" htmlType="submit" onClick={this.handleOk}>
              OK
            </Button>
          ]}
        >
          <Input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Input
            placeholder="URL"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </Modal>
      </div>
    );
  }
}
