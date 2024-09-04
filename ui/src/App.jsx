import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IssueCertificate from './IssueCertificate'; 
import GetCertificate from './GetCertificate';
import Home from './Home';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/issue' element={<IssueCertificate/>}/>
          <Route path="/getcert" element={<GetCertificate />} />
        </Routes>
    </Router>
  );
};

export default App;
