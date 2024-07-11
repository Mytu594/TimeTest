import React from 'react';
import './DashboardNav.css';
import Logo from '../Logo';
// import { PiCirclesThreeFill } from "react-icons/pi";
import { Mochiy_Pop_P_One,Montserrat } from '@next/font/google';
const font = Mochiy_Pop_P_One({weight:'400',subsets: ['latin'] });
const Mfont = Montserrat({weight:'400',subsets: ['latin'] });
const DashboardNav = () => {
  return (
    <header id="DashboardNav" className="flex justify-between">
      <Logo />
      <div className="flex items-center">
        <div className={"nav-btns"+" "+font.className}>
          <button className="nav-btn active" >Dashboard</button>
          <button className="nav-btn">Mint</button>
          <button className="nav-btn">Vault</button>
          <button className="nav-btn">Stake</button>
        </div>
        <div className="account-overview flex items-center">
          <div className="currency-display flex items-center">
            {/* <PiCirclesThreeFill className="currency-icon text-[#d43494]"/>
             */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
          <circle cx="12" cy="12" r="12" fill="#E7E7E9"/>
          <path d="M18.0978 15.4306L15.9102 12.4584C15.6726 12.1354 15.3207 11.942 14.9459 11.8993C14.8606 11.8894 14.7845 11.8399 14.7418 11.7653C14.6984 11.6906 14.6938 11.6 14.7281 11.5207C14.8781 11.1749 14.8873 10.7735 14.7258 10.4064L13.2458 7.02589C13.0264 6.52393 12.5305 6.2002 11.9829 6.2002C11.4352 6.2002 10.9393 6.52469 10.72 7.02589L9.23995 10.4064C9.07923 10.7735 9.08761 11.1749 9.23767 11.5207C9.27194 11.6 9.26661 11.6906 9.22396 11.7653C9.18054 11.8399 9.10513 11.8894 9.01982 11.8993C8.64506 11.942 8.29315 12.1354 8.05549 12.4584L5.86786 15.4306C5.54337 15.8717 5.51062 16.4627 5.78407 16.9373C6.05829 17.4111 6.58691 17.6784 7.13077 17.6183L10.7984 17.21C11.1968 17.1658 11.5403 16.9579 11.7643 16.6547C11.8153 16.5854 11.8968 16.5442 11.9829 16.5442C12.069 16.5442 12.1497 16.5854 12.2015 16.6547C12.4254 16.9579 12.769 17.1658 13.1673 17.21L16.8349 17.6183C17.3788 17.6792 17.9074 17.4118 18.1816 16.9373C18.4551 16.4627 18.4223 15.8717 18.0978 15.4306ZM10.1967 10.8306L11.679 7.44636C11.7323 7.32525 11.8519 7.24679 11.9836 7.24679C12.1154 7.24679 12.235 7.32525 12.2883 7.44636L13.7706 10.8306C13.8171 10.9373 13.8072 11.0607 13.7432 11.1582C13.6792 11.2557 13.571 11.3143 13.4537 11.3143H10.5128C10.3962 11.3143 10.2873 11.2557 10.2233 11.1582C10.1593 11.0607 10.1502 10.9373 10.1967 10.8306ZM10.9576 15.9829C10.9051 16.0872 10.803 16.1573 10.6872 16.1702L7.01576 16.5785C6.88474 16.593 6.75677 16.529 6.69051 16.4148C6.62424 16.3005 6.63262 16.1581 6.71107 16.0514L8.90099 13.0762C8.97031 12.9825 9.08152 12.9291 9.19806 12.936C9.3146 12.9421 9.41972 13.0068 9.47837 13.1081L9.48065 13.112L10.9469 15.6515L10.9492 15.6553C11.0079 15.7566 11.0109 15.88 10.9584 15.9836L10.9576 15.9829ZM12.2845 14.8342C12.2221 14.9416 12.1078 15.0086 11.9829 15.0086C11.8587 15.0086 11.7437 14.9424 11.6812 14.835L10.5547 12.8842C10.4922 12.7768 10.4922 12.6435 10.5547 12.5361C10.6171 12.4287 10.7314 12.3617 10.8563 12.3617H13.1087C13.2328 12.3617 13.3479 12.4272 13.4103 12.5353C13.4728 12.6435 13.4728 12.776 13.4103 12.8834L12.2845 14.8342ZM17.276 16.4148C17.2097 16.529 17.0825 16.5938 16.9507 16.5793L13.2793 16.171C13.1635 16.1581 13.0615 16.088 13.0089 15.9836C12.9563 15.8793 12.9594 15.7559 13.018 15.6553L13.0203 15.6515L14.4866 13.112L14.4889 13.1081C14.5476 13.0068 14.6527 12.9421 14.7692 12.936C14.8858 12.9299 14.9969 12.9825 15.0662 13.0762L17.2562 16.0514C17.3346 16.1581 17.3415 16.3005 17.276 16.4148Z" fill="#E81899"/>
        </svg>
            <span className={"amount"+" "+Mfont.className}>0,000 ETH</span>
          </div>
          <div className="user-profile flex items-center">
            {/* <i className="user-avatar bg-[#d43494] flex items-center justify-center"></i> */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr'>
              <circle cx="12" cy="12" r="12" fill="url(#pattern0_121_36)"/>
              <defs>
              <pattern id="pattern0_121_36" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_121_36" transform="scale(0.0025)"/>
              </pattern>
              <image id="image0_121_36" width="400" height="400" href="data:image/jpeg;base64,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"/>
              </defs>
              </svg>
            <span className={"user-name"+" "+Mfont.className}>0x12...123412</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
