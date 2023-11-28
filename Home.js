import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Adjust the path as needed





function LandingPage() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>

        
      <h1>Welcome to the Lottery Ticket System</h1>
      <button className="button" onClick={() => navigateTo('/browse-lottery-tickets')}>Browse Lottery Tickets</button><br />
    <button className="button" onClick={() => navigateTo('/previous-winning-numbers')}>Previous Winning Numbers</button><br />
    <button className="button" onClick={() => navigateTo('/order-history')}>Order History</button><br />
    <button className="button" onClick={() => navigateTo('/user-profile')}>View User Profile</button><br />
    <button className="button" onClick={() => navigateTo('/search-ticket')}>Search for a Ticket</button>

    </div>
  );
}

export default LandingPage;