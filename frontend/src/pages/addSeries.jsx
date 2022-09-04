import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <>
            <h2 className='text-light mb-4' style={{ marginLeft: '264px' }}>Add Episode</h2>
            <Form>
                <div className='d-flex justify-content-center'>
                    <Form.Group className="mb-5 bg-dark" style={{ width: '802px', }} controlId="formBasicEmail">
                        {/* <h2 className='text-white mb-4'>Add Episode</h2> */}
                        <Form.Control type="text" placeholder="Title Episode" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-5 mx-1" controlId="formBasicEmail">
                        {/* <h2 className='text-white mb-4'>Add Episode</h2> */}
                        <Form.Control type="text" placeholder="Attach Thumbnail" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                    </Form.Group>

                </div>

                <div  className='d-flex justify-content-center'>
                    <Form.Group className="mb-3 mx-3" style={{width:'1019px'}} controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="text" placeholder="Link Film" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                    <button type="submit" className="btn bg-danger text-white px-5 rounded mt-3" style={{ width: "350px", height: '50px', marginRight: '257px'}}>Add</button>
                </div>
            </Form>
        </>

    );
}

export default BasicExample;