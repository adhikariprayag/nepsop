import React from 'react'
import '../scss/Card.scss'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className="item-card">
                <img src={props.src} alt="" />
                <h4>{props.title}</h4>
                <p>
                    Price:
                    ${props.des}</p>
                <p>
                    Discount: 
                    {props.dis}%</p>
                <div className='buttons'>
                    <div className="btn btn-white border"><Link to={props.lnk}>Details</Link></div>
                    <div className="btn btn-secondary bg-orange ">Add to cart</div>
                </div>
            </div>
        </>
    )
}

export default Card