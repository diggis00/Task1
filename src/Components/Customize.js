import React, { Component } from 'react';
import { Popover, Button, Modal } from 'antd';
import GalleryLayout from './GalleryLayout';

export default class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          position: 'fixed',
          bottom: 10,
          right: 20
        }}
      >
        <Popover
          placement="topLeft"
          title="Customize this page"
          content={
            <div>
              <Button onClick={this.showModal}>Chrome backgrounds</Button>
              <br />
              <br />
              <Button>Upload an Image</Button>
            </div>
          }
          trigger="click"
        >
          <Button shape="circle" icon="edit" />
        </Popover>

        <Modal
          visible={visible}
          title="Select a Collection"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <GalleryLayout />
        </Modal>
      </div>
    );
  }
}
