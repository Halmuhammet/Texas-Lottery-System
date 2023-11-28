import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react'
import './App.css';

import BrowseLotteryTickets from './browseLotteryTickets';
import PreviousWinningNumbers from './previousWinningNumber';
import OrderHistory from './orderHistory';
import UserProfile from './userProfile';
import SearchTicket from './searchTicket';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/browse-lottery-tickets" element={<BrowseLotteryTickets />} />
          <Route path="/previous-winning-numbers" element={<PreviousWinningNumbers />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/search-ticket" element={<SearchTicket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
