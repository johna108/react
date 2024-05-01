// Home.js
import React from 'react';
import './home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Opaque overlay */}
      <div className="content">
        <h2>Home</h2>
        <p>This is the home page of the Online Art Gallery.</p>
      </div>
    </div>
  );
}

export default Home;
