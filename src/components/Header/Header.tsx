import React from 'react';
import "./styleHeader.css";

export default function Header(): JSX.Element {
  return (
    <header className='bg-success d-flex align-items-center px-1 header'>
        <h1 className='text-light'>Pokemon App</h1>
    </header>
  )
}
