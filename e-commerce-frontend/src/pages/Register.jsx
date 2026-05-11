import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
  return (
    
    <div id="form-container">
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter full name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>phone</Form.Label>
          <Form.Control type="tel" pattern="[6-9]{1}[0-9]{9}" required placeholder="+91" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>create Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control required placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." >
            <option >Choose state</option>
            <option Value="andhra pradesh">AP</option>
            <option Value="telangana">TL</option>
            <option Value="tamilnadu">TN</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
       <span>If you already register click here to {" "} <a href="/Login">Login</a></span>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Register;