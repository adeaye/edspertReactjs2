import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import courseService from "./utlis/service";

const MateriCRUD = () => {
  const [courses, setCourses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const fetchCourses = () => {
    const result = courseService.getAllCourse();
    setCourses(result.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  };
  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h3>Course List</h3>
            <Button variant={"success"} onClick={toggleCreateModal}>
              Add Course
            </Button>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Deskripsi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>Aksi</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <CourseCreateModal
        show={showCreateModal}
        handleClose={toggleCreateModal}
        handleSubmit={handleAddCourse}
      />
    </>
  );
};

export default MateriCRUD;
