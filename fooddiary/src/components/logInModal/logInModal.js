import React, { Component } from 'react';
import ReactModal from 'react-modal';
import LogInForm from '../logInForm/logInForm'
import './logInModal.css';

export default class LogInModal extends Component {
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
             shouldCloseOnEsc={true}
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <LogInForm />
          </ReactModal>
        </div>
      );
    }
  }