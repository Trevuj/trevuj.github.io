import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Chart } from 'chart.js/auto';
import AdminLayout from '../../layouts/AdminLayout';

function Forcast() {
  const [location, setLocation] = useState('');
  const [productName, setProductName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  // Static weather reports for countries
  const weatherReports = {
      'Iceland': {
        'weather': 'Cold and cloudy with a chance of rain or snow. Low wind speeds.',
        'war_status': 'No active war.'
      },
      'New Zealand': {
        'weather': 'Variable weather, from sunny to rainy. Moderate temperatures.',
        'war_status': 'No active war.'
      },
      'Portugal': {
        'weather': 'Warm and sunny with occasional coastal breezes. Mild temperatures.',
        'war_status': 'No active war.'
      },
      'Switzerland': {
        'weather': 'Cool and clear with a chance of rain in the mountains. Moderate temperatures.',
        'war_status': 'No active war.'
      },
      'Singapore': {
        'weather': 'Hot and humid with frequent rain showers. High humidity.',
        'war_status': 'No active war.'
      },
      'France': {
        'weather': 'Variable weather, from sunny to cloudy with occasional rain. Mild temperatures.',
        'war_status': 'No active war.'
      },
      'China': {
        'weather': 'Wide range of climates, from hot and humid in the south to cold in the north.',
        'war_status': 'No active war.'
      },
      'Nepal': {
        'weather': 'Variable weather, from hot in the lowlands to cold in the mountains. Monsoon season brings heavy rain.',
        'war_status': 'No active war.'
      },
      'Brazil': {
        'weather': 'Hot and humid in the north, temperate in the south. Rainforests experience frequent rain.',
        'war_status': 'No active war.'
      },
      'Turkey': {
        'weather': 'Variable weather, from hot and dry in the interior to mild and wet along the coasts.',
        'war_status': 'No active war.'
      },
      'Russia': {
        'weather': 'Cold and snowy in the winter, hot and dry in the summer. Wide range of climates.',
        'war_status': 'No active war.'
      },
      'Ukraine': {
        'weather': 'Cold and snowy in the winter, mild and wet in the summer. Variable weather.',
        'war_status': 'Active war with Russia.'
      },
      'Yemen': {
        'weather': 'Hot and dry with occasional sandstorms. High temperatures.',
        'war_status': 'Active civil war.'
      },
      'Venezuela': {
        'weather': 'Hot and humid with frequent rain showers. High humidity.',
        'war_status': 'No active war.'
      },
      'Somalia': {
        'weather': 'Hot and dry with occasional coastal breezes. High temperatures.',
        'war_status': 'Active conflict and terrorism.'
      },
      'North Korea': {
        'weather': 'Cold and snowy in the winter, hot and humid in the summer. Variable weather.',
        'war_status': 'No active war, but high tensions with South Korea and the USA.'
      },
      'South Sudan': {
        'weather': 'Hot and dry with occasional rain showers. High temperatures.',
        'war_status': 'Active civil war.'
      },
      'Libya': {
        'weather': 'Hot and dry with occasional sandstorms. High temperatures.',
        'war_status': 'Active conflict and instability.'
      },
      'Thailand': {
        'weather': 'Hot and humid with frequent rain showers. High humidity.',
        'war_status': 'No active war.'
      },
      'Iraq': {
        'weather': 'Scorching heat and strong winds. Dust storms likely.',
        'war_status': 'No active war, but ongoing conflict and terrorism.'
      },
      'USA': {
        'weather': 'Wide range of climates, from hot and humid in the south to cold in the north. Variable weather depending on region.',
        'war_status': 'No active war.'
      },
      'London': {
        'weather': 'Cool and often cloudy with frequent rain. Mild temperatures.',
        'war_status': 'No active war.'
      },
      'UAE': {
        'weather': 'Hot and dry with occasional sandstorms. High temperatures.',
        'war_status': 'No active war.'
      },
      'Bangladesh': {
        'weather': 'Hot and humid with frequent rain showers. High humidity, especially during the monsoon season.',
        'war_status': 'No active war.'
      }
  };

  const fetchRecommendation = async () => {
    try {
      const recommendation = getRecommendation(location, productName, dateTime);
      setRecommendation(recommendation);
      updateChart(recommendation);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  const getRecommendation = (location, productName, dateTime) => {
    let safetyLevel = 'green'; // Safe (Low)
    let truck = 'Flatbed Truck';
    let container = 'Standard Container';
    let truckSpeed = '60 km/h';
    let fastestRoute = 'Main highways recommended';
    let safeRoute = 'Secondary roads recommended for safety';
    let warStatus = weatherReports[location]?.war_status || 'No information available';

    // Adjust recommendations based on location, product, and time
    if (location.toLowerCase().includes('snow') || productName.toLowerCase().includes('fragile')) {
      safetyLevel = 'red'; // Dangerous (High)
      truck = 'Covered Truck';
      container = 'Insulated Container';
      truckSpeed = '30 km/h';
      fastestRoute = 'Avoid snowy or hilly areas.';
      safeRoute = 'Use well-maintained roads with minimal elevation changes.';
    } else if (location.toLowerCase().includes('rain') || productName.toLowerCase().includes('perishable')) {
      safetyLevel = 'yellow'; // Moderate
      truck = 'Covered Truck';
      container = 'Insulated Container';
      truckSpeed = '40 km/h';
      fastestRoute = 'Avoid flooded areas.';
      safeRoute = 'Use higher ground routes to avoid flooding.';
    }

    const currentDate = new Date(dateTime);
    const hour = currentDate.getHours();
    if (hour >= 22 || hour <= 6) {
      safetyLevel = 'yellow'; // Moderate risk at night
      truckSpeed = '40 km/h';
      fastestRoute = 'Use well-lit roads.';
      safeRoute = 'Avoid remote areas and use well-populated routes.';
    }

    const lowRiskCountries = ['Iceland ', 'New Zealand', 'Portugal ', 'Switzerland ', 'Singapore ','USA'];
    const moderateRiskCountries = ['France', 'China', 'Nepal', 'Brazil', 'Turkey ','London'];
    const highRiskCountries = ['Russia', 'Thailand', 'Yemen', 'Venezuela ', 'Somalia','UAE'];
    const criticalRiskCountries = ['North Korea', 'African ', 'Libya', 'Ukraine', 'Iraq','Bangladesh'];

    if (criticalRiskCountries.includes(location)) {
      safetyLevel = 'red'; // Dangerous (Critical)
      truck = 'Armored Truck';
      container = 'Secure Container';
      truckSpeed = '20 km/h';
      fastestRoute = 'Avoid conflict zones.';
      safeRoute = 'Use secure and well-guarded routes.';
    } else if (highRiskCountries.includes(location)) {
      safetyLevel = 'orange'; // High Risk
      truck = 'Covered Truck';
      container = 'Insulated Container';
      truckSpeed = '30 km/h';
      fastestRoute = 'Use main highways.';
      safeRoute = 'Avoid remote and less secure areas.';
    } else if (moderateRiskCountries.includes(location)) {
      safetyLevel = 'yellow'; // Moderate Risk
      truck = 'Covered Truck';
      container = 'Insulated Container';
      truckSpeed = '40 km/h';
      fastestRoute = 'Use main highways.';
      safeRoute = 'Avoid high-traffic and congested areas.';
    } else if (lowRiskCountries.includes(location)) {
      safetyLevel = 'green'; // Safe (Low)
      truck = 'Flatbed Truck';
      container = 'Standard Container';
      truckSpeed = '70 km/h';
      fastestRoute = 'Fastest route via main highways.';
      safeRoute = 'Use secondary roads for added safety.';
    }

    return {
      truck,
      container,
      truckSpeed,
      fastestRoute,
      safeRoute,
      safetyLevel,
      warStatus,
      report: `Based on location: ${location}, product: ${productName}, and date/time: ${dateTime}, use ${truck} with ${container}. Speed: ${truckSpeed}. Fastest Route: ${fastestRoute}. Safe Route: ${safeRoute}. War Status: ${warStatus}.`
    };
  };

  const updateChart = (recommendation) => {
    const ctx = document.getElementById('safetyChart').getContext('2d');
    if (chartInstance) {
      chartInstance.destroy();
    }
    const safetyLevel = recommendation.safetyLevel;
    const safetyColor = {
      green: 'rgba(75, 192, 192, 0.2)', // Low risk
      yellow: 'rgba(255, 205, 86, 0.2)', // Moderate risk
      orange: 'rgba(255, 159, 64, 0.2)', // High risk
      red: 'rgba(255, 99, 132, 0.2)' // Critical risk
    };

    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Low', 'Moderate', 'High', 'Critical'],
        datasets: [{
          label: 'Safety Level',
          data: [
            safetyLevel === 'green' ? 100 : 0,
            safetyLevel === 'yellow' ? 100 : 0,
            safetyLevel === 'orange' ? 100 : 0,
            safetyLevel === 'red' ? 100 : 0
          ],
          backgroundColor: [safetyColor.green, safetyColor.yellow, safetyColor.orange, safetyColor.red],
          borderColor: [safetyColor.green, safetyColor.yellow, safetyColor.orange, safetyColor.red],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
    setChartInstance(newChartInstance);
  };

  return (
    <AdminLayout>
    <section id="risk-assessment" className="py-4 bg-light">
      <Container>
        <h2 className="text-center mb-4">Risk Assessment</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
              </Form.Group>
              <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
              </Form.Group>
              <Form.Group controlId="dateTime">
                <Form.Label>Date and Time</Form.Label>
                <Form.Control type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="button" className="mt-3" onClick={fetchRecommendation}>
                Get Recommendations
              </Button>
            </Form>
          </div>
        </div>

        {recommendation && (
          <section id="recommendation-info" className="py-5">
            <Container>
              <h2 className="text-center mb-4">Recommendations</h2>
              <div className="row">
                <div className="col-md-6">
                  <Card>
                    <Card.Body>
                      <Card.Title>Transport Recommendations</Card.Title>
                      <Card.Text>
                        <strong>Recommended Truck:</strong> {recommendation.truck}<br />
                        <strong>Recommended Container:</strong> {recommendation.container}<br />
                        <strong>Truck Speed:</strong> {recommendation.truckSpeed}<br />
                        <strong>Fastest Route:</strong> {recommendation.fastestRoute}<br />
                        <strong>Safe Route:</strong> {recommendation.safeRoute}<br />
                        <strong>War Status:</strong> <span style={{ color: 'red' }}>{recommendation.warStatus}</span><br />
                        <strong>Suggestions:</strong> <span style={{ color: 'green' }}>{recommendation.warStatus.toLowerCase().includes('active') ? 'Avoid the area if possible. If not, use secure and well-guarded routes.' : 'Proceed with standard precautions.'}</span><br />
                        
                        {/* Display static weather report */}
                        <strong>Current Weather Report for {location}:</strong> <br />
                        {weatherReports[location] ? (
                          <span style={{ color: 'blue' }}>{weatherReports[location].weather}</span>
                        ) : 'No static weather report available.'}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6">
                  <canvas id="safetyChart" width="400" height="200"></canvas>
                </div>
              </div>
            </Container>
          </section>
        )}
      </Container>
    </section>
    </AdminLayout>
  );
}

export default Forcast;