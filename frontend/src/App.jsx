import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';

function App() {
    return (
        <>
            <Login />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )

}

export default App;
