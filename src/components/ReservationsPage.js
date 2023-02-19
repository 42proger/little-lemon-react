import "./styles/Reservations.css";
import Form from "./Form";

function ReservationsPage() {
  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="form">
          <h1>Make a reservation</h1>
          <p>
            We accept reservations 7 days in advance, new dates become available
            at noon. Please call us or make an online reservation below
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;
