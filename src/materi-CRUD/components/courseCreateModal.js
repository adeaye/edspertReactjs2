import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitData = () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const submitPayload = {
      id: timestamp,
      title,
      description,
    };
    handleSubmit(submitPayload);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Course title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Course Description"
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={submitData} variant="primary">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseCreateModal;
