import React, { Component } from 'react';
import ReactModal from 'react-modal';
import SignUpForm from '../signUpForm/signUpForm'
import './signUpModal.css';

export default class SignUpModal extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
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
          <button onClick={this.handleOpenModal}>Sign Up Now</button>
          <ReactModal
          shouldCloseOnEsc={true}  
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <SignUpForm />
          </ReactModal>
        </div>
      );
    }
  }