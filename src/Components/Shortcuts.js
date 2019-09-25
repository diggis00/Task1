import React, { Component } from 'react';
import { Avatar, Row, Col, Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import AddShortcuts from './AddShortcuts';

export default class Shortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      name: '',
      url: '',
      Shortcut: [
        { name: 'Digvijay Singh', url: 'www.google.com' },
        { name: 'Pratik', url: 'www.pratik.com' }
      ]
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
    this.setState({
      Shortcut: [...this.state.Shortcut, { name: e.target.value }]
    });
    console.log(this.state.Shortcut.map(s => s.name));
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addShortcut = e => {
    e.preventDefault();
    // e.preventDefault();
    // let shortcut = this.state.Shortcut.concat(['asd']);
    this.setState({
      Shortcut: [...this.state.Shortcut, { name: e.target.value }]
    });
    console.log('working');
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="shortcut-container">
        <Row
          style={{
            margin: 20,
            display: 'flex',
            justifyContent: 'space-around '
          }}
        >
          <Col
            span={6}
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            {this.state.Shortcut.map(s => (
              <AddShortcuts key={s.name} />
            ))}
            <div style={{ padding: 10 }}>
              <Button onClick={this.showModal} shape="circle" size="large">
                <Avatar icon="plus-circle" />
              </Button>
              <Modal
                title="Add Shortcut"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button style={{ float: 'left' }}>Remove</Button>,
                  <Button onClick={this.handleCancel}>Cancel</Button>,
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleOk}
                  >
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
          </Col>
        </Row>
      </div>
    );
  }
}
