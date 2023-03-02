import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { entities } = useSelector((state) => state.cart);

  const countTotal = (courses) => {
    const result = courses.reduce((prev, curr) => {
      return prev + parseInt(curr.price, 10);
    }, 0);
    return result;
  };
  return (
    <Container style={{ padding: "24px 0" }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Ringkasan Pembelian</h1>
          <p>
            Magna cillum irure nulla eu quis ipsum duis elit. Lorem cillum quis
            sunt incididunt. Minim excepteur minim cupidatat est commodo
            reprehenderit laborum dolor. Laboris minim voluptate quis labore
            quis sunt mollit elit sit tempor tempor occaecat. Esse nostrud
            incididunt ad esse exercitation pariatur minim eiusmod ea id
            aliquip. Ea nostrud officia consectetur enim sint elit cupidatat
            incididunt officia excepteur.
          </p>

          <p>Berikut barang barang anda</p>
          <Table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((item, index) => {
                return (
                  <tr>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>$ {countTotal(entities)}.00</td>
              </tr>
            </tfoot>
          </Table>

          <h5>Metode Pembayaran: </h5>
          <p>
            Silahkan transfer ke Rek ABC a.n Abc def nomor rekening 1234 72772
            18882 1123
          </p>

          <Button variant={"success"}>Bayar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
