import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import login from '../../assets/login.json'
import Lottie from 'lottie-react';

const SignIn = () => {
    const {signInUser} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password)
    
           signInUser(email, password)
           .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
           })
           .catch(error => {
            console.log(error)
           })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='text-center lg:text-left'>
              <Lottie style={{width: '300px'}} animationData={login} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
            <div className="card-body">
            <h1 className="text-4xl font-bold">Sign In now!</h1>
              <form onSubmit={handleSignIn} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Sign In</button>
                <div><p>New to this website? Please <Link to='/register' className='underline text-blue-500'>Register</Link></p></div>

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

export default SignIn;