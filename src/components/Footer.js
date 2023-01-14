import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './Featured.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='col col-1'>
          <h1>
            De<span className='primary'>Fi</span>
          </h1>
        </div>
        <div className='col'>
          <h5>Support</h5>
          <span className='bar'>
            <a href='/'>Contact Us</a>
            <a href='/'>Chat</a>
            <a href='/'>Help Center</a>
            <a href='/'>FAQ</a>
          </span>
        </div>
        <div className='col'>
          <h5>Developers</h5>
          <span className='bar'>
            <a href='/'>Cloud</a>
            <a href='/'>Commerce</a>
            <a href='/'>Pro</a>
            <a href='/'>API</a>
          </span>
        </div>
        <div className='col'>
          <h5>Company</h5>
          <span className='bar'>
            <a href='/'>About</a>
            <a href='/'>Information</a>
            <a href='/'>Legal</a>
            <a href='/'>Privacy</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
