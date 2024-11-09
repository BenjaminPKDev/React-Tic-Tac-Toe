"use client";
import { useRouter } from "next/navigation"


import { React } from 'react';
import PropTypes from 'prop-types';

export default function User({ params }) {
    const router = useRouter();

    return (
        <div>
            <h1>{params.id}</h1>
            <button onClick={router.back}>Go back</button>
        </div>
    );
}

User.propTypes = {
    params: PropTypes.string.isRequired,
};