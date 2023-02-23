import { Modal, Button } from "react-bootstrap";

const CourseDeleteModal = ({ show, handleClose, onAgree }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={onAgree} variant="primary">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseDeleteModal;
