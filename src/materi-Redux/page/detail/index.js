import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../store/cart/slice";
import { getDetail } from "../../store/course/action";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { entity, loading } = useSelector((state) => state.course);

  const fetchCourse = async (courseId) => {
    await dispatch(getDetail(courseId));
  };
  useEffect(() => {
    console.log("additem", addItem);
    fetchCourse(id);
  }, []);
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <Image
            style={{ width: "100%", objectFit: "contain" }}
            src={entity.image}
            rounded
          />
        </Col>
        <Col md={4}>
          <h3>{entity.title}</h3>
          <p>{entity.description}</p>
          <h5>$ {entity.price}</h5>
          <Button variant={"success"} onClick={() => dispatch(addItem(entity))}>
            + Keranjang
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
