import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

export class FavModal extends Component {
  render() {
    return (
      <div>
        <Modal show ={this.showModal} onHide={this.handleModalClose}>
          <Modal.Header>Editting</Modal.Header>

          <Modal.Body>
          <input defaultValue={this.props.title} onChange={this.props.handleTitle}></input>
          <input defaultValue={this.props.image} onChange={this.props.handleImage}></input>
          </Modal.Body>

          <Modal.Footer>
              <button onClick={this.UpdateFav}>Save </button>
              <button onClick={this.deleteFav}>Delete</button>

          </Modal.Footer>
          
        </Modal>
      </div>
    );
  }
}

export default FavModal;
