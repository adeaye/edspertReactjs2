import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { httpService } from "../../utils/service";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    const response = await httpService.get("/product");
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <h3>List</h3>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {products.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListPage;
