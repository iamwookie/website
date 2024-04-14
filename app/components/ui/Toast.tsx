'use client';

import { ToastContainer, Flip } from 'react-toastify';

export default function Toast() {
    return (
        <ToastContainer
            limit={3}
            theme="colored"
            transition={Flip}
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            closeOnClick={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
        />
    );
}
