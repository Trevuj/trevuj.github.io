import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useRef } from 'react';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Track() {
  const [inputs, setInputs] = useState({ id: '', location:'', location_time:'', customer_id: '', recived_by:'',  warehouse_id: '', warehouse_block_id:'', status: '', note: ''});
  const [serialNumber, setSerialNumber] = useState('');
  const [containerInfo, setContainerInfo] = useState(null);
  const [mapUrl, setMapUrl] = useState('');

  const containerData = [
    {
      id: 'ABC123',
      location: 'Port of Los Angeles',
      size: '40ft',
      capacity: '33.4tn',
      lat: 33.7366,
      lng: -118.2923,
      arrivalHistory: [
        { port: 'Port of Chittagong', date: '2024-10-01 10:00' },
        { port: 'Port of Busan', date: '2024-10-07 15:30' },
        { port: 'Port of Los Angeles', date: '2024-10-26 12:00'}
      ],
    },
    {
      id: 'DEF456',
      location: 'Port of Chittagong',
      size: '40ft',
      capacity: '33.4tn',
      lat: 22.3091,
      lng: 91.8018,
      arrivalHistory: [
        { port: 'Port of Singapur', date: '2024-09-23 10:00' },
        { port: 'Port of Banda Aceh', date: '2024-09-29 15:30' },
        { port: 'Port of Chittagong', date: '2024-10-03 12:00' },
      ],
    },
    {
      id: 'GHI789',
      location: 'Port of Chicago',
      size: '40ft',
      capacity: '33.4tn',
      lat: 41.7286,
      lng: 87.5355,
      arrivalHistory: [
        { port: 'Port of Toronto', date: '2024-10-11 10:00' },
        { port: 'Port of Owendo', date: '2024-10-15 15:30' },
        { port: 'Port of Chicago', date: '2024-10-21 12:00' },
        
      ],
    },
  ];
  const MapComponent = ({ container }) => {
    const mapRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow (false);
    const handleShow = () => setShow (true);
    // const{} = useParams();
    useEffect(() => {
      if (!mapRef.current) {
        const map = L.map(`map-${container.id}`).setView([container.lat, container.lng], 10);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
        }).addTo(map);
  
        const marker = L.marker([container.lat, container.lng]).addTo(map);
  
        marker.bindPopup(`
          <strong>ID:</strong> ${container.id}<br />
          <strong>Location:</strong> ${container.location}<br />
          <strong>Size:</strong> ${container.size}<br />
          <strong>Capacity:</strong> ${container.capacity}
        `);
        
        mapRef.current = map;
      }
    }, [container]);
  
    return <div id={`map-${container.id}`} style={{ height: '300px', width: '100%', marginBottom: '20px' }} />;
  };
  function MyVerticallyCenteredModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <Modal
      // <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Track Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <div class="container mt-5">
    <form>
            <div class="mb-3">
                <label for="location" class="form-label">Location</label>
                <input type="text" class="form-control" name="location" id="location" value="USA"/>
            </div>
            <div class="mb-3">
                <label for="location_time" class="form-label">Receiving Time</label>
                <input type="text" class="form-control" name="location_time" id="location_time" Value=" 12:05 a.m 12.11.2024"/>
            </div>
            <div class="mb-3">
                <label for="recived_by" class="form-label">Receiver's Name</label>
                <input type="text" class="form-control" id="recived_by" name="recived_by" value="Rimon Ahmed"/>
            </div>
            <div class="mb-3">
                <label for="warehouse_id" class="form-label">Warehouse Name</label>
                <input type="text" class="form-control" id="warehouse_id" name="warehouse_id" value="warehouse-205"/>
            </div>
            <div class="mb-3">
                <label for="warehouse_block_id" class="form-label">Warehouse Block</label>
                <input type="text" class="form-control" id="warehouse_block_id" name="warehouse_block_id" value="section-5T"/>
            </div>
            <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <input type="text" class="form-control" id="status" name="status" value="Recived"/>
            </div>
            <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <textarea class="form-control" id="note" name="note" rows="3" value="2 days delay from Port of Busan"></textarea>
            </div>
        </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  // Main Component
  const App = () => {
    return (
      
      <div>
        <h1>Container Locations</h1>
        {containerData.map((container) => (
          <MapComponent key={container.id} container={container} />
        ))}
      </div>
    );
  };
  const trackContainer = () => {
    const upperCaseSerialNumber = serialNumber.toUpperCase();
    const container = containerData.find(c => c.id === upperCaseSerialNumber);

    if (container) {
      setContainerInfo(container);
      updateMap(container.lat, container.lng);
    } else {
     setContainerInfo(null);
  setMapUrl('');
    }
  };

  const updateMap = (lat, lng) => {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik`;
    setMapUrl(url);
  };

  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  return (

    <AdminLayout>
       < div className=''>
      <Button variant="success d-block mx-auto" onClick={() => setModalShow(true)}>
        Informations
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
      
      <section id="search-form" className="py-4 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Track Your Container</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text" className="form-control" placeholder="Enter Container Serial Number" value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)} />
                <button className="btn btn-primary" type="button" onClick={trackContainer}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tracking-info" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Container Location</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-success">
                <tr>
                  <th>Serial Number</th>
                  <th>Location Name</th>
                  <th>Container Size</th>
                  <th>Product Weight</th>
                </tr>
              </thead>
              <tbody id="tracking-table">
                {containerInfo ? (
                  <tr>
                    <td>{containerInfo.id}</td>
                    <td>{containerInfo.location}</td>
                    <td>{containerInfo.size}</td>
                    <td>{containerInfo.capacity}</td>
                  </tr>
                ) : (
                  <tr><td colSpan="4" className="text-center">No data found</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {mapUrl && (
            <div id="map" className="map-container mt-4">
              <iframe src={mapUrl} style={{ border: 0, width: "100%", height: "400px" }} allowFullScreen="" loading="lazy" title="Container Map"></iframe>
            </div>
          )}

          {containerInfo && containerInfo.arrivalHistory && (
            <div className="mt-5">
              <h2 className="text-center mb-4">Arrival History</h2>
              <div className="arrival-history row">
                {containerInfo.arrivalHistory.map((arrival, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card p-3 mb-3">
                      <h5>{arrival.port}</h5>
                      <p>{arrival.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </AdminLayout>
  );
}

export default Track;
