import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import Lottie from 'lottie-react';
import register from '../../assets/register.json'

const Register = () => {
    const {createUser} = use(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email,password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='text-center lg:text-left'>
            <Lottie style={{width: '300px'}} animationData={register} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
            <div className="card-body">
            <h1 className="text-4xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister} className='fieldset'>
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <button className="btn btn-neutral mt-4">Register</button>
                <div><p>Already have an account? Please <Link to='/signIn' className='underline text-blue-500'>Sign In</Link></p></div>
              </form>
              <div className='mx-auto'>
                <SocialLogin/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;