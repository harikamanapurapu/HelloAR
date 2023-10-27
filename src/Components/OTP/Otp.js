
import React, { useState } from 'react';
import axios from 'axios';
import "./Otp.css"
import { useNavigate , useLocation } from 'react-router-dom'; 

const VerifyOTP = ({  }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

    // Get the requestId from the route's state
    const { state } = useLocation();
    const phoneNumber = state?.phoneNumber;
    const requestId = state?.requestId;

  const verifyOTP = async () => {
    try {
      const enteredOtp = otp.join(''); // Combine the array of OTP digits
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}/auth/verify_otp`,
        {
          phoneNumber: phoneNumber,
          requestId: requestId,
          otp: enteredOtp, // Use the provided test OTP
        }
      );
      setToken(response.data.token);
      navigate('/home');
    } catch (error) {
      console.log( error);
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    if (value.length === 1 && index < otp.length - 1) {
      // Focus on the next input field
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };
  

  return (
    <div className='Main'>
        <div className='OTP-Main'>
        <h1 className='otp-header'>OTP Verification</h1>
          <p className='otp-para'>We have sent and OTP to {state?.phoneNumber}. Please enter the code received to verify.</p>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                key={index} className='otpinput'
              />
            ))}
          </div>
          <button onClick={verifyOTP} className='verify'>Verify</button>
          <p className='resend' >Resend OTP</p>
          <p className='another' onClick={()=>navigate('/login')}>Use another number</p>
      </div>
    </div>

  );
};

export default VerifyOTP;

