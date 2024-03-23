
import { AiTwotoneMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Loginform.css';

function Loginform() {
    const initialvalue = { email: '', password: "" };
    const [data, setdata] = useState(initialvalue);
    const [formerror, setformerror] = useState({});
    const gotoctable = useNavigate();
    const [issubmit, setissubmit] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        setformerror(validate(data));
        setissubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formerror).length === 0 && issubmit) {
            console.log(data);
        }
    }, [formerror]);

    const validate = (values) => {
        const errorr = {};
        if (!values.email) {
            errorr.email = 'Username is required';
        }
        if (!values.password) {
            errorr.password = 'Password is required';
        }
        return errorr;
    };

    return (
        <div className="login-container">
            <h1>Login to SurePass BMS</h1>
            <form onSubmit={handlesubmit} className='login-form'>
                {Object.keys(formerror).length === 0 && issubmit ? (
                    <div className='success-message'>{gotoctable('/CT')}</div>
                ) : ''}
                <div className="input-container">
                    <AiTwotoneMail className="icon" />
                    <input type="email" placeholder='Email' name='email' value={data.email} onChange={handlechange} />
                    <p className="error-message">{formerror.email}</p>
                </div>
                <div className="input-container">
                    <MdPassword className="icon" />
                    <input type="password" placeholder="Password" name='password' value={data.password} onChange={handlechange} />
                    <p className="error-message">{formerror.password}</p>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Loginform;
