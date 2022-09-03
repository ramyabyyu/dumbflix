import { Col, Container, Row, Table } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";

function Payment() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <h6 className="text-light mb-4 mx-4">Incoming Transaction</h6>
            <Table striped bordered hover variant="dark">
              <thead style={{ height: "60px" }}>
                <tr className="text-danger text-center align-items-center">
                  <th>No</th>
                  <th>Users</th>
                  <th>Bukti Transfer</th>
                  <th>Remaining Active</th>
                  <th>Status User</th>
                  <th>Status Payment</th>
                  <th style={{ width: "60px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: "60px" }} className="text-center">
                  <td>1</td>
                  <td>Radif Ganteng</td>
                  <td>bca.jpg</td>
                  <td>26 / Hari</td>
                  <td className="text-success">Active</td>
                  <td className="text-success">Approve</td>
                  <td>
                    <BsFillCaretDownFill
                      style={{ marginLeft: "20px" }}
                      className="text-primary"
                    />
                  </td>
                </tr>
                <tr style={{ height: "60px" }} className="text-center">
                  <td>2</td>
                  <td>Haris Rahman</td>
                  <td>bni.jpg</td>
                  <td>26 / Hari</td>
                  <td className="text-success">Active</td>
                  <td className="text-success">Approve</td>
                  <td>
                    <BsFillCaretDownFill
                      style={{ marginLeft: "20px" }}
                      className="text-primary"
                    />
                  </td>
                </tr>
                <tr style={{ height: "60px" }} className="text-center">
                  <td>3</td>
                  <td>Amin Subagiyo</td>
                  <td>permata.jpg</td>
                  <td>0 / Hari</td>
                  <td className="text-danger">Not Active</td>
                  <td className="text-danger">Cancel</td>
                  <td>
                    <BsFillCaretDownFill
                      style={{ marginLeft: "20px" }}
                      className="text-primary"
                    />
                  </td>
                </tr>
                <tr style={{ height: "60px" }} className="text-center">
                  <td>4</td>
                  <td>Haris Astina</td>
                  <td>permata.jpg</td>
                  <td>0 / Hari</td>
                  <td className="text-danger">Not Active</td>
                  <td className="text-warning">Pending</td>
                  <td>
                    <BsFillCaretDownFill
                      style={{ marginLeft: "20px" }}
                      className="text-primary"
                    />
                  </td>
                </tr>
                <tr style={{ height: "60px" }} className="text-center">
                  <td>5</td>
                  <td>Aziz Oni On</td>
                  <td>bi.jpg</td>
                  <td>0 / Hari</td>
                  <td className="text-danger">Not Active</td>
                  <td className="text-warning">Pending </td>
                  <td>
                    <BsFillCaretDownFill
                      style={{ marginLeft: "20px" }}
                      className="text-primary"
                    />
                  </td>
                </tr>
                <tr style={{ height: "60px" }} className="text-center">
                  <td>6</td>
                  <td>Sugeng No Pants</td>
                  <td>bni.jpg</td>
                  <td>0 / Hari</td>
                  <td className="text-danger">Not Active</td>
                  <td className="text-warning">Pending</td>
                  <td>
                    <BsFillCaretDownFill
                      style={{ marginLeft: "20px" }}
                      className="text-primary"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Payment;
