import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import AdminLayout from '../../layouts/AdminLayout';

const calculateDistance = (departureCountry, arrivalCountry) => {
  const distances = {
    "Bangladesh-India": 400,
    "Bangladesh-Myanmar": 275,
    "Bangladesh-Nepal": 1200,
    "Bangladesh-Bhutan": 1300,
    "Bangladesh-China": 2500,
    "Bangladesh-Pakistan": 2000,
    "Bangladesh-Afghanistan": 2500,
    "Bangladesh-Iran": 3500,
    "Bangladesh-Turkey": 5000,
    "Bangladesh-Saudi Arabia": 5500,
    "Bangladesh-United Arab Emirates": 4000,
    "Bangladesh-Qatar": 4500,
    "Bangladesh-Kuwait": 5000,
    "Bangladesh-Oman": 4500,
    "Bangladesh-Yemen": 5000,
    "Bangladesh-Jordan": 5500,
    "Bangladesh-Lebanon": 5500,
    "Bangladesh-Syria": 5000,
    "Bangladesh-Iraq": 4500,
    "Bangladesh-Egypt": 5500,
    "Bangladesh-Libya": 6000,
    "Bangladesh-Tunisia": 6500,
    "Bangladesh-Algeria": 7000,
    "Bangladesh-Morocco": 7500,
    "Bangladesh-Spain": 8000,
    "Bangladesh-Portugal": 8500,
    "Bangladesh-France": 8000,
    "Bangladesh-Italy": 7500,
    "Bangladesh-Greece": 7000,
    "Bangladesh-Bulgaria": 6500,
    "Bangladesh-Romania": 6000,
    "Bangladesh-Ukraine": 5500,
    "Bangladesh-Russia": 6000,
    "Bangladesh-Kazakhstan": 5000,
    "Bangladesh-Uzbekistan": 4500,
    "Bangladesh-Kyrgyzstan": 4000,
    "Bangladesh-Tajikistan": 3500,
    "Bangladesh-Turkmenistan": 4000,
    "Bangladesh-Mongolia": 4500,
    "Bangladesh-Japan": 5000,
    "Bangladesh-South Korea": 5500,
    "Bangladesh-North Korea": 6000,
    "Bangladesh-Vietnam": 2000,
    "USA-Canada": 3000,
    "USA-Mexico": 2000,
    "Germany-France": 800,
    "India-China": 2500,
    "Australia-New Zealand": 4155,
    "Brazil-Argentina": 2575,
    "Russia-China": 6800,
    "Japan-South Korea": 1150,
    "UK-Germany": 930,
    "Spain-Morocco": 13,
    "South Africa-Namibia": 1300,
    "Egypt-Saudi Arabia": 1200,
    "Turkey-Greece": 500,
    "Italy-Switzerland": 750,
    "Canada-Alaska": 3500,
    "USA-Brazil": 8500,
    "India-Bangladesh": 400,
    "China-Vietnam": 1250,
    "France-Spain": 1050,
    "Germany-Poland": 575,
    "UK-Ireland": 460,
    "Australia-Indonesia": 3150,
    "Mexico-Guatemala": 900,
    "Argentina-Chile": 1400,
    "Russia-Kazakhstan": 2100,
    "Japan-Taiwan": 1900,
    "South Korea-China": 1000,
    "UK-France": 350,
    "Spain-Portugal": 620,
    "Canada-Greenland": 2500,
    "USA-Cuba": 1800,
    "India-Nepal": 750,
    "China-Mongolia": 1600,
    "France-Italy": 1100,
    "Germany-Austria": 650,
    "UK-Netherlands": 350,
    "Australia-Papua New Guinea": 2500,
    "Mexico-Belize": 200,
    "Argentina-Uruguay": 200,
    "Russia-Belarus": 700,
    "Japan-Philippines": 2500,
    "South Korea-Japan": 1150,
    "UK-Belgium": 300,
    "Spain-Andorra": 150,
    "Canada-Iceland": 3000,
    "USA-Bahamas": 1000,
    "India-Pakistan": 1200,
    "China-North Korea": 1000,
    "France-Monaco": 10,
    "Germany-Czech Republic": 350,
    "UK-Denmark": 950,
    "Australia-Fiji": 2700,
    "Mexico-Honduras": 1100,
    "Argentina-Paraguay": 1000,
    "Russia-Ukraine": 750,
    "Japan-Russia": 1000,
    "South Korea-Russia": 1100,
    "UK-Sweden": 1100,
    "Spain-Gibraltar": 1,
    "Canada-Norway": 4000,
  };

  // Combine countries to create key and return the distance or a default value
  const key = `${departureCountry}-${arrivalCountry}`;
  return distances[key] || 5000; // Default to 5000 km if not found
};

function Calculator() {
  const [productName, setProductName] = useState('');
  const [departureCountry, setDepartureCountry] = useState('');
  const [departureWarehouse, setDepartureWarehouse] = useState('');
  const [arrivalCountry, setArrivalCountry] = useState('');
  const [arrivalWarehouse, setArrivalWarehouse] = useState('');
  const [containerType, setContainerType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalCost, setTotalCost] = useState(null);
  const [perUnitCost, setPerUnitCost] = useState(null);
  const [secondaryTotalCost, setSecondaryTotalCost] = useState(null);
  const [secondaryPerUnitCost, setSecondaryPerUnitCost] = useState(null);
  const [distance, setDistance] = useState(null);
  const [secondaryDistance, setSecondaryDistance] = useState(null);

  // Cost calculation logic
  const calculateCost = () => {
    // Mock distance calculation between the two countries
    const primaryDistance = calculateDistance(departureCountry, arrivalCountry);
    const secondaryDistance = primaryDistance * 1.2; // Assume secondary route is 20% longer

    setDistance(primaryDistance);
    setSecondaryDistance(secondaryDistance);

    let baseCost = 5; // Reduced base cost
    const primaryDistanceFactor = primaryDistance * 0.05; // Reduced distance factor
    const secondaryDistanceFactor = secondaryDistance * 0.05; // Reduced distance factor
    const warehouseFactor = (departureWarehouse.length + arrivalWarehouse.length) * 0.05; // Reduced warehouse factor
    const containerFactor = containerType === 'Standard' ? 0.05 : 0.005; // Reduced container factor

    const primaryTotal = baseCost + (primaryDistanceFactor + warehouseFactor) * containerFactor * parseInt(quantity, 10);
    const secondaryTotal = baseCost + (secondaryDistanceFactor + warehouseFactor) * containerFactor * parseInt(quantity, 10);

    const primaryPerUnit = primaryTotal / parseInt(quantity, 10); // Calculate primary per-unit cost
    const secondaryPerUnit = secondaryTotal / parseInt(quantity, 10); // Calculate secondary per-unit cost

    setTotalCost(primaryTotal);
    setPerUnitCost(primaryPerUnit);
    setSecondaryTotalCost(secondaryTotal);
    setSecondaryPerUnitCost(secondaryPerUnit);
  };

  return (
    <AdminLayout>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Logistics Cost Calculator</h1>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Departure Country</Form.Label>
                <Form.Control
                  type="text"
                  value={departureCountry}
                  onChange={(e) => setDepartureCountry(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Departure Warehouse Name</Form.Label>
                <Form.Control
                  type="text"
                  value={departureWarehouse}
                  onChange={(e) => setDepartureWarehouse(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Arrival Country</Form.Label>
                <Form.Control
                  type="text"
                  value={arrivalCountry}
                  onChange={(e) => setArrivalCountry(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Arrival Warehouse Name</Form.Label>
                <Form.Control
                  type="text"
                  value={arrivalWarehouse}
                  onChange={(e) => setArrivalWarehouse(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Container Type</Form.Label>
                <Form.Select
                  value={containerType}
                  onChange={(e) => setContainerType(e.target.value)}
                >
                  <option value="">Select Container</option>
                  <option value="Standard">Standard</option>
                  <option value="Refrigerated">Refrigerated</option>
                  <option value="Open Top">Open Top</option>
                  <option value="Flat Rack">Flat Rack</option>
                  <option value="Tank Container">Tank Container</option>
                  <option value="High Cube">High Cube</option>
                  <option value="Insulated">Insulated</option>
                  <option value="Bulk">Bulk</option>
                  <option value="Platform">Platform</option>
                  <option value="Double Door">Double Door</option>
                  <option value="Reefer">Reefer</option>
                  <option value="Ventilated">Ventilated</option>
                  <option value="Dry Bulk">Dry Bulk</option>
                  <option value="ISO Tank">ISO Tank</option>
                  <option value="Half Height">Half Height</option>
                  <option value="Car Carrier">Car Carrier</option>
                  <option value="Livestock Carrier">Livestock Carrier</option>
                  <option value="Roll-on/Roll-off (RoRo)">Roll-on/Roll-off (RoRo)</option>
                  <option value="Flexitank">Flexitank</option>
                  <option value="Swap Body">Swap Body</option>
                  <option value="Jumbo">Jumbo</option>
                  <option value="Megaports">Megaports</option>
                  <option value="Triaxle">Triaxle</option>
                  <option value="Side Loader">Side Loader</option>
                  <option value="Conestoga">Conestoga</option>
                  <option value="Intermodal">Intermodal</option>
                  <option value="Piggyback">Piggyback</option>
                  <option value="Livestock">Livestock</option>
                  <option value="Breakbulk">Breakbulk</option>
                  <option value="Bulk Liquid">Bulk Liquid</option>
                  <option value="Bulk Gas">Bulk Gas</option>
                  <option value="Bulk Dry">Bulk Dry</option>
                  <option value="Bulk Solid">Bulk Solid</option>
                  <option value="Bulk Powder">Bulk Powder</option>
                  <option value="Bulk Cryogenic">Bulk Cryogenic</option>
                  <option value="Bulk Hazardous">Bulk Hazardous</option>
                  <option value="Bulk Non-Hazardous">Bulk Non-Hazardous</option>
                  <option value="Bulk Food Grade">Bulk Food Grade</option>
                  <option value="Bulk Chemical">Bulk Chemical</option>
                  <option value="Bulk Pharmaceutical">Bulk Pharmaceutical</option>
                  <option value="Bulk Agricultural">Bulk Agricultural</option>
                  <option value="Bulk Mining">Bulk Mining</option>
                  <option value="Bulk Construction">Bulk Construction</option>
                  <option value="Bulk Industrial">Bulk Industrial</option>
                  <option value="Bulk Automotive">Bulk Automotive</option>
                  <option value="Bulk Electronics">Bulk Electronics</option>
                  <option value="Bulk Textiles">Bulk Textiles</option>
                  <option value="Bulk Plastics">Bulk Plastics</option>
                  <option value="Bulk Rubber">Bulk Rubber</option>
                  <option value="Bulk Paper">Bulk Paper</option>
                  <option value="Bulk Wood">Bulk Wood</option>
                  <option value="Bulk Metal">Bulk Metal</option>
                  <option value="Bulk Glass">Bulk Glass</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" className="w-100" onClick={calculateCost}>
                Calculate Cost
              </Button>
            </Form>

            {totalCost !== null && (
              <Alert variant="info" className="mt-4 text-center">
                <h4>Primary Route Cost:</h4>
                <h5>Total Cost: ${totalCost.toFixed(2)}</h5>
                <h5>Per Unit Cost: ${perUnitCost.toFixed(2)}</h5>
                <h6>Distance between {departureCountry} and {arrivalCountry}: {distance} km</h6>

                <h4 className="mt-4">Secondary Route Cost:</h4>
                <h5>Total Cost: ${secondaryTotalCost.toFixed(2)}</h5>
                <h5>Per Unit Cost: ${secondaryPerUnitCost.toFixed(2)}</h5>
                <h6>Distance between {departureCountry} and {arrivalCountry}: {secondaryDistance} km</h6>
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Container>
    </AdminLayout>
  );
}

export default Calculator;