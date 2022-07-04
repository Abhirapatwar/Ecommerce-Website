import React from 'react'
import { a } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Nav(props) {
    const navigate = useNavigate();
    let tim=props.person
    console.log("the value of tim is "+tim)
    function checkouthandle(){
        navigate(`/checkout/${props.person}`);
    }
    function gohome(){
        navigate(`/confirmed/${props.person}`);
        
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbarclass">
                <div className="container-fluid navbarst">
                    <a className="navbar-brand Dark link text-warning" href="/home">Shopper's Shop  </a>
                    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                        <span className="navbar-hrefggler-icon"></span>
                    </buthrefn>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active  mt-1 text-warning" aria-current="page" onClick={gohome} >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mt-1 text-warning" href="" onClick={checkouthandle}> Checkout</a>
                            </li>
                            <h5 className='person'> <em>Wellcome {props.person} !!!</em>  </h5>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-hrefggle" href="#" id="navbarDropdown" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="">Action</a></li>
                                    <li><a className="dropdown-item" href="">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                        <a class="navbar-brand d-inline" href="#">
                            <img src="https://img.myloview.com/posters/paper-cut-shopping-cart-icon-isolated-on-blue-background-online-buying-concept-delivery-service-sign-supermarket-basket-symbol-paper-art-style-vechrefr-700-263463169.jpg" alt="" width="40" height="30" className='icon' />
                        </a>
                            <h4 className='numbercart'>{props.pqty}</h4>
                            <a className="navbar-brand Dark link text-warning" href="/">Signout </a>
                </div>
            </nav>
        </>
    )
}
export default Nav