import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { httpService } from "../../utils/service";
import { getAll } from "../../store/course/action";

const ProductListPage = () => {
  const { entities, loading } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    await dispatch(getAll());
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div>
      <h3>List</h3>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {loading
          ? "Sedang memuat data, mohon ditunggu "
          : entities.length === 0
          ? "Belum ada data"
          : entities.map((item, index) => {
              return (
                <Card style={{ width: "18rem" }} key={index}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <p>$ {item.price}</p>
                  </Card.Body>
                </Card>
              );
            })}
      </div>
    </div>
  );
};

export default ProductListPage;
