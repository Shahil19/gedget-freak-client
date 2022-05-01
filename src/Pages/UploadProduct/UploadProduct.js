import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const UploadProduct = () => {

    const [user] = useAuthState(auth);

    const handleUploadProduct = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        // console.log({ name, price });

        // send data to backend 
        fetch('http://localhost:5000/product', {
            method: 'POST',
            body: JSON.stringify(
                { name, price }
            ),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                event.target.reset()
                console.log(json)
            });

    }

    return (
        <div >
            <h1 className='text-center'>Upload PD</h1>
            <Form className='w-50 mx-auto' onSubmit={handleUploadProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Product Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="number" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Upload product
                </Button>
            </Form>
        </div>
    );
};

export default UploadProduct;