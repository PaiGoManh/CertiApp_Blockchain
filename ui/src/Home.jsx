import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from './SCdata/Cert.json';
import { certModuleCert } from './SCdata/deployed_addresses.json';
import { useNavigate } from 'react-router-dom';
import  image  from './assets/elearning.png';

const Home = () => {
  const provider = new BrowserProvider(window.ethereum);
  const [certId, setCertId] = useState('');
  const [certificateDetails, setCertificateDetails] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      const signer = await provider.getSigner();
      const instance = new Contract(certModuleCert, abi, provider);
      const certificate = await instance.Certificates(certId);
      console.log("a",certificate);

      const certDetails = {      
        candidateName: certificate[0],
        course: certificate[1],
        grade: certificate[2],          
        issueDate: certificate[3],
      };
      setCertificateDetails(certDetails);
      navigate('/getcert',{ state: { certDetails } })
  };

  return (
    <>
      <div className='mt-10 ml-[80%]'>
        <Link to="/issue" className=" bg-[blue] hover:bg-orange-500 text-black w-[200px] h-10 p-2 pl-3 cursor-pointer">
          Issue New Certificate
        </Link>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-center text-[blue] font-bold text-3xl  mb-4">CERTIFICATE</h3>
        <div>
          <img src={image} alt='icon' width={200} height={150}/>
        </div>
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
            className="border-2 bg-[blue] hover:bg-orange-500 text-black px-2 py-2"
            type="submit"
          >
            Get Certificate
          </button>
        </form>

        
      </div>
    </>
  );
};

export default Home;
