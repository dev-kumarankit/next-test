'use client';
import React from 'react'
interface Props {
    error: Error;
    reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
    // error file cannot capture error in root layout
    return (<>
        <div>An unexpected error has occured.{error.toString()}</div>
        <button className='btn' onClick={() => reset()}>Reset</button>
    </>
    )
}

export default ErrorPage