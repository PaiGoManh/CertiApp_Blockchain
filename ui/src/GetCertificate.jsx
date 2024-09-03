import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from './SCdata/Cert.json';
import { certModuleCert } from './SCdata/deployed_addresses.json';

const GetCertificate = () => {
  const provider = new BrowserProvider(window.ethereum);
  const [certId, setCertId] = useState('');
  const [certificateDetails, setCertificateDetails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const signer = await provider.getSigner();
      const instance = new Contract(certModuleCert, abi, provider);
      const certificate = await instance.Certificates(certId);
      console.log("a",certificate);

      const certDetails = {
        course: certificate[0],         
        candidateName: certificate[1],  
        grade: certificate[2],          
        issueDate: certificate[3],
      };
      setCertificateDetails(certDetails);
  };

  return (
    <>
      <div className='mt-10 ml-[80%]'>
        <Link to="/" className=" bg-[orange] text-black w-[200px] h-10 p-2 pl-3 cursor-pointer">
          Issue New Certificate
        </Link>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-center text-3xl font-bold mb-4">Get Issued Certificate</h3>
        <form className="w-1/2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="certificateID">Enter Certificate ID *</label>
            <input
              type="text"
              className="border-2 border-black w-full p-2"
              id="certificateID"
              name="certificateID"
              placeholder="Enter Certificate ID"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              required
            />
          </div>
          <button
            className="border-2 bg-[orange] text-black px-4 py-2"
            type="submit"
          >
            Get Certificate
          </button>
        </form>

        {certificateDetails && (
          <div className="mt-10 border-2 p-6 rounded shadow-lg w-1/2">
            <h4 className="text-2xl font-bold mb-4">Certificate Details</h4>
            <p><strong>Course:</strong> {certificateDetails.course}</p>
            <p><strong>Candidate Name:</strong> {certificateDetails.candidateName}</p>
            <p><strong>Grade:</strong> {certificateDetails.grade}</p>
            <p><strong>Issue Date:</strong> {certificateDetails.issueDate}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GetCertificate;
