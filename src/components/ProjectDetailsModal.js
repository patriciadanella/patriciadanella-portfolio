import React, { Component } from "react";
import { Modal } from "react-bootstrap";
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">            
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "0px 5px 15px 5px" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p style={{padding: "0px 5px 20px 5px"}} className="modal-description">{description}</p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
