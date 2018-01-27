import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './logInModal.css';

export default class LogInModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Log In</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      );
    }
  }
  
  // const props = {};
  
  // ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))