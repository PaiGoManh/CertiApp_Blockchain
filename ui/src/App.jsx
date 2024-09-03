import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IssueCertificate from './IssueCertificate'; 
import GetCertificate from './GetCertificate'; 

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<IssueCertificate />} />
          <Route path="/get-certificate" element={<GetCertificate />} />
        </Routes>
    </Router>
  );
};

export default App;
