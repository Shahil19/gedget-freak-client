import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../firebase/firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const Login = () => {


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    if (user) {
        // console.log(user.user);
        // console.log({ email: user.user.email });
        const URL = 'http://localhost:5000/login';
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // navigates to which protected route user wanted to go
                navigate(from, { replace: true });
                localStorage.setItem('accessToken', data.token)
                console.log(data.token)
            });

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