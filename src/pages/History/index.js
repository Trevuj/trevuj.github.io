import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function History() {
  const [inputs, setInputs] = useState({company_name: '', email: ''});
  const [orderHistory, setOrderHistory] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchOrderHistory = async () => {

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/history?company_name=${inputs.company_name}&email=${inputs.email}`);
      setOrderHistory(response.data.data);
      setError('');
    } catch (err) {
      setError('No order history found for the provided company name and email');
      setOrderHistory([]);
    }
  };

  const getDatas = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/history/${id}`).then(function (response) {
      setInputs(response.data.data);
    });
  };

  const getRelational = async () => {
    try {
      // Add your relational data fetching logic here
    } catch (error) {
      console.error("Error fetching relational data", error);
    }
  };

  useEffect(() => {
    if (id) {
      getDatas();
    }
    getRelational();
  }, [id]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      let apiurl = `/history/create`;

      let response = await axios({
        method: 'post',
        responsiveType: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs
      });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const checkCustomer = async (e) => {
    e.preventDefault();

    try {
      let apiurl = `/history/`;

      let response = await axios({
        method: 'post',
        responsiveType: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs
      });

      if (response.data.data) {
        setInputs(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminLayout>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Order History</h1>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="company_name"
                  value={inputs.company_name || ''}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={inputs.email || ''}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" className="w-100" onClick={fetchOrderHistory}>
                Check History
              </Button>
            </Form>

            {error && <div className="mt-4 alert alert-danger">{error}</div>}

            {orderHistory.length > 0 && (
              <Table striped bordered hover className="mt-4">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Shipment Date</th>
                    <th>Cargo Type</th>
                    <th>Shipment Country</th>
                    <th>Warehouse Name</th>
                    <th>Cost</th>
                    <th>Shipment Status</th>
                    <th>Tracking Number</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order, index) => (
                    <tr key={index}>
                      <td>{order.company_name}</td>
                      <td>{order.email}</td>
                      <td>{order.shipment_date}</td>
                      <td>{order.cargo_type}</td>
                      <td>{order.shipment_country}</td>
                      <td>{order.warehouse_name}</td>
                      <td>${order.cost}</td>
                      <td>{order.shipment_status}</td>
                      <td>{order.tracking_number}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      </Container>
    </AdminLayout>
  );
}

export default History;