import Head from 'next/head'
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//creates an instance of an application that gives the default values
var applicationData = {
  status: 'PENDING',
  primary_al: false,
  primary_gl: false,
  primary_el: false,
  is_deleted: false
};

 //after form is submitted send to server
  const handleSubmit = e => {
    e.preventDefault();
    console.log(applicationData)
    return applicationData;
  }

  //as user is typing, will set the data before submission
  const handleChange = e => {
    if(e.target.value == 'on'){
      applicationData[e.target.name] = true;
    }else{
      applicationData[e.target.name] = e.target.value;
    }
  }

const Home = () => (
<div className="container">
  <Head>
    <title>Commercial Auto Application</title>
  </Head>

  <main>
    <h1 className="title">
      Commercial Auto Application
    </h1>

    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control name="first_name" onChange={handleChange} type="text" maxLength="50" required/>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="last_name" onChange={handleChange} type="text" maxLength="50" required/>
      </Form.Group>
      <Form.Group controlId="emailAddress">
        <Form.Label>Email Address</Form.Label>
        <Form.Control name="email_address" onChange={handleChange} type="email" placeholder="name@example.com" maxLength="100" required/>
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name="phone_number" onChange={handleChange} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" required/>
      </Form.Group>
      <Form.Group controlId="companyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control name="company_name" onChange={handleChange} type="text" maxLength="50" required/>
      </Form.Group>
      <Form.Group controlId="effectiveDate">
        <Form.Label>Effective Date</Form.Label>
        <Form.Control name="effective_date" onChange={handleChange} type="date" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" placeholder="MM/DD/YYYY" required/>
      </Form.Group>
      
      <Form.Group controlId="primaryAL">
        <Form.Check name="primary_al" onChange={handleChange} type="checkbox" label="Primary AL (Auto Liability)"/>
      </Form.Group>
      <Form.Group controlId="primaryGL">
        <Form.Check name="primary_gl" onChange={handleChange} type="checkbox" label="Primary GL (General Liability)"/>
      </Form.Group>
      <Form.Group controlId="primaryEL">
        <Form.Check name="primary_el" onChange={handleChange} type="checkbox" label="Primary EL (Employee Liability)"/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Link href="/dashboard">
      <a>Dashboard</a>
    </Link>

  </main>

</div>
)

export default Home