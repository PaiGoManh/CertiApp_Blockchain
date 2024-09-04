import React, { useState } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { Link } from 'react-router-dom';

import { abi } from './SCdata/Cert.json';
import { certModuleCert } from './SCdata/deployed_addresses.json';

const App = () => {
  const provider = new BrowserProvider(window.ethereum);

  const [certificateID, setCertificateID] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [course, setCourse] = useState('Certified Blockchain Associate');
  const [grade, setGrade] = useState('S');
  const [issueDate, setIssueDate] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  async function connectToMetamask() {
    const signer = await provider.getSigner();
    setIsConnected(true);
    console.log("s",signer.address);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signer = await provider.getSigner();
    const instance = new Contract(certModuleCert, abi, signer);
    
    const transactionLog = await instance.issue(certificateID,candidateName,course,grade,issueDate);

    console.log("TXL",transactionLog);

    console.log({ course, certificateID, candidateName, grade, issueDate }); 
  };

  return (
    <>
      <div className='flex justify-between px-[5%]'>
        <div
          className={`mt-10 ml-4 ${isConnected ? 'bg-orange-500' : 'bg-blue-500'} text-black w-[200px] h-10 p-2 pl-3 cursor-pointer`}
          onClick={connectToMetamask}
        >
          {isConnected ? 'Connected to MetaMask' : 'Connect to MetaMask'}
        </div>
        <Link to="/" className="mt-10 ml-4 bg-[blue] hover:bg-orange-500 text-black w-[200px] h-10 p-2 pl-3 cursor-pointer">
            Get Issued Certificate
        </Link>
      </div>

      <div>
        <h3 className="text-center text-3xl font-bold mb-4 text-[blue] ">Issue New Certificate</h3>
        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="border-2 rounded px-20 border-[blue]">

            <div className="p-2">
                <label className="block mt-5" htmlFor="certificateID">Certificate ID *</label>
                <input
                  type="text"
                  className="border-2 border-[blue] pl-2"
                  name="certificateID"
                  id="certificateID"
                  placeholder="Certificate ID"
                  value={certificateID}
                  onChange={(e) => setCertificateID(e.target.value)}
                  required
                />
              </div>

              <div className="p-2">
                <label className="block" htmlFor="candidateName">Candidate Name *</label>
                <input
                  type="text"
                  className="border-2 border-[blue] pl-2"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  required
                />
              </div>

              <div className="p-2">
                <label className="block" htmlFor="courseName">Select Course *</label>
                <select
                  className="border-2 border-[blue] pl-1 w-[260px]"
                  name="course"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option>Certified Blockchain Associate</option>
                  <option>Certified Ethereum Developer</option>
                  <option>Blockchain Foundation</option>
                  <option>Ethereum Fundamentals</option>
                </select>
              </div>


              <div className="p-2">
                <label className="block" htmlFor="grade">Select Grade *</label>
                <select
                  className="border-2 border-[blue] pl-2"
                  id="grade"
                  name="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option>S</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <div className="p-2">
                <label className="block" htmlFor="date">Issue Date *</label>
                <input
                  type="date"
                  className="border-2 border-[blue] pl-2"
                  id="date"
                  name="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  required
                />
              </div>
              <button className="border-2 bg-blue-950  hover:bg-orange-500 mt-6 ml-10 text-white px-4 py-2 mb-5" type="submit">
                Issue Certificate
              </button>
            </div>
          </form>
        </div>
      </div> 
    </>
  );
}

export default App;
