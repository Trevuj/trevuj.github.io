import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const scheduleData = {
  sailing: [

    { id: 'Pacific Asia', country: 'Bangladesh', depPort: 'Chittagong', depDate: '2024-10-05', arrPort: 'Singapore', arrDate: '2024-10-10', time: '5 Days' },
    { id: 'Asia Pearl', country: 'Bangladesh', depPort: 'Chittagong', depDate: '2024-10-12', arrPort: 'Colombo', arrDate: '2024-10-16', time: '4 Days' },
    { id: 'Ganges Voyager', country: 'India', depPort: 'Kolkata', depDate: '2024-10-14', arrPort: 'Chittagong', arrDate: '2024-10-18', time: '4 Days' },
    { id: 'Bay King', country: 'Bangladesh', depPort: 'Dhaka', depDate: '2024-10-20', arrPort: 'Penang', arrDate: '2024-10-24', time: '4 Days' },
    { id: 'Tiger Express', country: 'India', depPort: 'Mumbai', depDate: '2024-11-01', arrPort: 'Chittagong', arrDate: '2024-11-06', time: '5 Days' },
    { id: 'Jade Wave', country: 'China', depPort: 'Shanghai', depDate: '2024-11-10', arrPort: 'Chittagong', arrDate: '2024-11-15', time: '5 Days' },
  ],
  airfreight: [
    { id: 'BG789', country: 'Bangladesh', depAirport: 'Shahjalal International Airport, Dhaka', depDate: '2024-10-05', arrAirport: 'Singapore Changi Airport', arrDate: '2024-10-05', time: '4 Hours' },
    { id: 'CX456', country: 'Hong Kong', depAirport: 'Hong Kong International Airport', depDate: '2024-10-10', arrAirport: 'Shahjalal International Airport, Dhaka', arrDate: '2024-10-10', time: '5 Hours' },
    { id: 'AI789', country: 'India', depAirport: 'Indira Gandhi International Airport, Delhi', depDate: '2024-10-15', arrAirport: 'Osmani International Airport, Sylhet', arrDate: '2024-10-15', time: '3 Hours' },
    { id: 'SG123', country: 'Singapore', depAirport: 'Changi Airport', depDate: '2024-10-18', arrAirport: 'Hazrat Shahjalal International Airport, Dhaka', arrDate: '2024-10-18', time: '4 Hours' },
    { id: 'BG456', country: 'Bangladesh', depAirport: 'Shah Amanat International Airport, Chittagong', depDate: '2024-10-22', arrAirport: 'Dubai International Airport', arrDate: '2024-10-22', time: '5 Hours' },
    { id: 'TK789', country: 'Turkey', depAirport: 'Istanbul Airport', depDate: '2024-10-25', arrAirport: 'Hazrat Shahjalal International Airport, Dhaka', arrDate: '2024-10-25', time: '7 Hours' },
  ],
  highway: [
    { id: 'TRK123', country: 'Bangladesh', depCity: 'Chittagong', depDate: '2024-10-08', arrCity: 'Dhaka', arrDate: '2024-10-09', time: '1 Day' },
    { id: 'TRK789', country: 'India', depCity: 'Kolkata', depDate: '2024-10-12', arrCity: 'Dhaka', arrDate: '2024-10-14', time: '2 Days' },
    { id: 'TRK456', country: 'Bangladesh', depCity: 'Dhaka', depDate: '2024-10-15', arrCity: 'Sylhet', arrDate: '2024-10-15', time: '1 Day' },
    { id: 'TRK012', country: 'India', depCity: 'Guwahati', depDate: '2024-10-18', arrCity: 'Chittagong', arrDate: '2024-10-20', time: '2 Days' },
    { id: 'TRK013', country: 'Bangladesh', depCity: 'Chittagong', depDate: '2024-10-22', arrCity: 'Cox’s Bazar', arrDate: '2024-10-23', time: '1 Day' },
    { id: 'TRK014', country: 'Bangladesh', depCity: 'Dhaka', depDate: '2024-11-05', arrCity: 'Rajshahi', arrDate: '2024-11-06', time: '1 Day' },
    { id: 'TRK015', country: 'Myanmar', depCity: 'Yangon', depDate: '2024-11-10', arrCity: 'Chittagong', arrDate: '2024-11-12', time: '2 Days' },
  ],
};
    

function Sailing() {
 const [date, setDate] = useState('');

 
  const formatDateToDDMMYYYY = (dateStr) => {
const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  const filterSchedules = () => {
    const filter = (item) => (!date || formatDateToDDMMYYYY(item.depDate) === date);
 const filteredSailing = scheduleData.sailing.filter(filter);
    const filteredAirfreight = scheduleData.airfreight.filter(filter);
  const filteredHighway = scheduleData.highway.filter(filter);

    return { sailing: filteredSailing, airfreight: filteredAirfreight, highway: filteredHighway };
  };

  const { sailing, airfreight, highway } = filterSchedules();

  return (
    <AdminLayout>
     <div className="container py-5 text-center">
       <div className="mb-4">
         <h1>Find your schedules</h1>
     <div className="row justify-content-center">
            <div className="col-md-4">
           <input type="text" className="form-control" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
  </div>
        </div>

        <div className="mb-5">
    <h3>Sailing Schedule</h3>
          <table className="table table-striped">
        <thead>
              <tr>
        <th>ID</th>     <th>Departure Port</th>
    <th>Departure Date</th>
             <th>Arrival Port</th>
         <th>Arrival Date</th>
           <th>Duration</th>
  </tr>
      </thead>
            <tbody>
    {sailing.length ? (
          sailing.map((item) => (
           <tr key={item.id}>
                    <td>{item.id}</td>
           <td>{item.depPort}</td>
                    <td>{formatDateToDDMMYYYY(item.depDate)}</td>
        <td>{item.arrPort}</td>
             <td>{formatDateToDDMMYYYY(item.arrDate)}</td>
       <td>{item.time}</td>
                  </tr>
                ))
              ) : (
      <tr>
                  <td colSpan="6">No Sailing Schedule Found</td>
          </tr>
              )}
     </tbody>
          </table>  </div>

                          <div className="mb-5">
                            <h3>Airfreight Schedule</h3>
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>ID</th>
                        <th>Departure Airport</th>
                                  <th>Departure Date</th>
                <th>Arrival Airport</th>
        <th>Arrival Date</th>
                <th>Duration</th>
              </tr>
        </thead>
            <tbody>
         {airfreight.length ? (
                airfreight.map((item) => (
               <tr key={item.id}>
           <td>{item.id}</td>
              <td>{item.depAirport}</td>
                        <td>{formatDateToDDMMYYYY(item.depDate)}</td>
                                  <td>{item.arrAirport}</td>
                  <td>{formatDateToDDMMYYYY(item.arrDate)}</td>
                                  <td>{item.time}</td>
                                </tr>
                    ))
                  ) : (
                      <tr>
                                <td colSpan="6">No Airfreight Schedule Found</td>
                              </tr>
                )}
                          </tbody>
           </table>
</div>

        <div className="mb-5">
   <h3>Highway Schedule</h3>
          <table className="table table-striped">
       <thead>
              <tr>
         <th>ID</th>
                <th>Departure City</th>
       <th>Departure Date</th>
           <th>Arrival City</th>
                <th>Arrival Date</th>
        <th>Duration</th>
         </tr>
            </thead>
            <tbody>
        {highway.length ? (
          highway.map((item) => (
            <tr key={item.id}>
       <td>{item.id}</td>
      <td>{item.depCity}</td>
            <td>{formatDateToDDMMYYYY(item.depDate)}</td>
                <td>{item.arrCity}</td>
                  <td>{formatDateToDDMMYYYY(item.arrDate)}</td>
                        <td>{item.time}</td>
          </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Highway Schedule Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <section id="contact" className="py-5 bg-light">
                            <div className="container">
                      <h2 className="text-center mb-4">Contact Us</h2>
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                                            <form>
                   <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                   </div>
                          <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                          </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your inquiry"></textarea>
         </div>
                <button type="submit" className="btn btn-success w-100">Submit</button>
       </form>
            </div>
 </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Sailing;