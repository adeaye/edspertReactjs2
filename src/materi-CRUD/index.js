import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import CourseDeleteModal from "./components/courseDeleteModal";
import CourseEditModal from "./components/courseEditModal";
import courseService from "./utlis/service";

const MateriCRUD = () => {
  const [courses, setCourses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const openEditModal = (course) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedCourse({});
    setShowEditModal(false);
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
  const handleEditCourse = (payload) => {
    const { id, ...others } = payload;
    courseService.updateCourse(id, others);
    closeEditModal();
    fetchCourses();
  };
  const handleDeleteCourse = () => {
    const { id } = selectedCourse;
    courseService.deleteCourse(id);
    closeDeleteModal();
    fetchCourses();
  };
  const openDeleteModal = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false);
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
                      <td>
                        <Button
                          onClick={() => openEditModal(item)}
                          variant={"warning"}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => openDeleteModal(item)}
                          variant={"danger"}
                        >
                          Delete
                        </Button>
                      </td>
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
      <CourseEditModal
        show={showEditModal}
        handleClose={closeEditModal}
        handleSubmit={handleEditCourse}
        data={selectedCourse}
      />
      <CourseDeleteModal
        show={showDeleteModal}
        handleClose={closeDeleteModal}
        onAgree={handleDeleteCourse}
      />
    </>
  );
};

export default MateriCRUD;
