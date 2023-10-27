
// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import indiaFlag from '../../assets/indianFlag.png'; // Import the India flag image
import "./Login.css";
import { useNavigate } from 'react-router-dom';

// Define the country code options with labels, values, and flag images
const countryCodeOptions = [
    { label: '+91', value: '+91', flag: indiaFlag },
    // Add more countries as needed
];

const Login = () => {
    const navigate = useNavigate();
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodeOptions[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [requestId, setRequestId] = useState(null);

    const sendOTP = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_ENDPOINT}/auth/login`,
                {
                    phoneNumber: selectedCountryCode.value + phoneNumber,
                }
            );
            setRequestId(response.data.requestId);
            navigate('/verify-otp',{ state: { phoneNumber: selectedCountryCode.value + phoneNumber, requestId: response.data.requestId } });
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    return (
        <div className='Main'>
            <div className='Login-Main'>
                <h1 className='login-header'>Sign In</h1>
                <p className='login-para'>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
                <div  className="phonenumber" >
                    {selectedCountryCode.flag && (
                        <img
                            src={selectedCountryCode.flag}
                            alt={selectedCountryCode.label}
                            className="country-flag"
                        />
                    )}
                    <div className='dropdown' >
                        <Select
                            options={countryCodeOptions}
                            value={selectedCountryCode}
                            onChange={(selectedOption) => setSelectedCountryCode(selectedOption)}
                        />
                    </div>
                    <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} className='inputBox' />
                </div>
                <button onClick={sendOTP} className='login-btn'>Sign in</button>
            </div>
        </div>
    );
};

export default Login;
