import React from 'react'
import { useLocation } from 'react-router-dom';
import img from './assets/KBA_logo.png'

const GetCertificate = () => {
  const location = useLocation();
  const certDetails = location.state?.certDetails;
  return (
    <>
    {certDetails && (
      <div className='w-[90%] h-[550px] mx-10 my-10 border-[25px] border-[blue]'>
        <div className='text-center'>
          <div className='flex items-center ml-[5%]'>
            <div className=''>
              <img src={img} alt='kba_logo'/>
            </div>
            <div className='ml-[20%]'>
              <h1 className='mt-5 text-4xl text-[blue] font-extrabold'>KERALA BLOCKCHAIN ACADEMY</h1>
              <h1 className='mt-5 text-3xl text-[blue] font-bold '>CERTIFICATE OF COMPLETION</h1>
              <hr className='mt-5 h-0.5 bg-[blue] border-0'/>
            </div>
          </div>
          <div className='mt-[10%] text-2xl text-blue-800'>
            <div className='mt-2'>This is to certify that <span className='ml-1 mr-1 text-[blue] font-bold'>{certDetails.candidateName}</span></div>
            <div className='mt-2'>has successfully completed <span className='ml-1 mr-1 text-[blue] font-bold'>{certDetails.course}</span></div>
            <div className='mt-2'>with<span className='ml-1 mr-1 text-[blue] font-bold'>{certDetails.grade}</span>Grade on <span className='ml-1 mr-1 text-[blue] font-bold'>{certDetails.issueDate}</span></div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default GetCertificate