import React from 'react'
import '../scss/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='head'>
            <div className="top bg-orange py-1 d-none d-sm-block">
                <div className="container align-content-center">
                    <ul className='d-flex align-items-center m-0 flex-wrap gap-4 p-0'>
                        <li><Link to='/'>Be a seller</Link></li>
                        <li><Link to='/'>Pay</Link></li>
                        <li><Link to='/'>Help & Support</Link></li>
                        <li><Link to='/'>Partner</Link></li>
                    </ul>
                </div>
            </div>

            <header className='w-100'>
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-orange" >
                        <div className="container d-flex justify-content-between ">
                            <a className="navbar-brand fs-2 fw-bold" href="/">Nepsop</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-bs-theme='dark'>
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none text-center ">
                                    <li className='nav-item '><Link className='d-flex gap-1  nav-link ' to="/"><i className="bi bi-house"></i> Home</Link></li>
                                    <li className='nav-item '><Link className='d-flex gap-1 nav-link' to='/cart'><i className="bi bi-cart"></i> Cart</Link></li>
                                    <li className=' nav-item btn border-light border-2 text-light w-25 mt-2'><Link to='/login' className=' text-light fw-normal  '>Login</Link></li>
                                    <li className=' nav-item btn btn-light w-25 mt-2 signup-btn'><Link to='/signup' className='text-danger  fw-normal sign-up-btn'>Signup</Link></li>
                                </ul>

                                <form className="d-flex w-75 mx-lg-auto me-0" role="search">
                                    <input className="form-control me-2 bg-light border-light  " type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-dark btn-light" type="submit">Search</button>
                                </form>
                            </div>

                            <div className=' d-none d-lg-block'>
                                <div className='d-flex navigation-links align-items-center'>
                                    <div>
                                        <ul className='p-0 m-0 d-flex justify-content-between gap-4'>
                                            <li><Link className='d-flex gap-1  ' to="/"><i className="bi bi-house"></i> Home</Link></li>
                                            <li><Link className='d-flex gap-1' to='/cart'><i className="bi bi-cart"></i> Cart</Link></li>
                                        </ul>
                                    </div>
                                    <div className='btn border-light border-2 text-light '><Link to='/login' className=' text-light fw-normal  '>Login</Link></div>
                                    <div className='btn btn-light text-secondary signup-btn'><Link to='/signup' className=' text-dark fw-normal sign-up-btn'>Signup</Link></div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>

 
            </header>
        </div>
    )
}

export default Header