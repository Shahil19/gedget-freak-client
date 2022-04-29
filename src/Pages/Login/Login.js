import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../firebase/firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
        navigate(from, { replace: true });
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Login</h1>
            <Button className='m-2' onClick={handleSignInWithGoogle}>Sign In With Google</Button>
            <br />
            <Button onClick={handleSignOut}>Sign Out</Button>
            {
                error && <p>Error: {error.message}</p>
            }
            {
                loading && <p>Loading...</p>
            }
        </div>
    );
};

export default Login;