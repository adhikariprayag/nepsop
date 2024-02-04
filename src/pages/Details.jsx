import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import cat, { product } from '../Data'
import Card from '../components/Card'
import '../scss/Cardres.scss'
function Details() {
  let { cid } = useParams()
    let cdata = product.filter((a) => a.category == cid)
  let { id } = useParams()
  var dataid = product.find((a) => a.id == id)
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-3">
            <ul className="list-group cat-box">
              <li className="list-group-item active text-center fw-bold bg-orange" aria-current="true">CATEGORIES</li>
              {cat.map((a) => (
                <li className="list-group-item"><Link to={`/category/${a}/`} className="text-capitalize text-decoration-none fw-light">{a}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-lg-9 mt-2 ">
            <div className="row">
              <div className="col-lg-6">
                <img src={dataid.thumbnail} className='w-100 border rounded' alt="" />
              </div>
              <div className="col-lg-6">
                <h2 className='fs-1 fw-bolder '>{dataid.title}</h2>
                <p className='fw-medium '>Ratings: {dataid.rating}/5</p>
                <h6>Brand: {dataid.brand}</h6>
                <p className='py-0 '>Category: {dataid.category}</p>
                <p className='fw-semibold '>{dataid.description}</p>
                <div className='d-flex justify-content-start gap-3 '>
                  <div className="btn btn-light border">Buy Now</div>
                  <div className="btn btn-primary bg-orange  border">Favourite</div>
                </div>
              </div>

              <div className="col-lg-12 text-center py-5">
                <h2 className='border-top border-bottom py-3'>Other Products </h2>
              </div>

              {product.slice(0,6).map((a) => (
              <div className="col-lg-4 py-4 items-card-res">
                <Card
                  src={a.thumbnail}
                  title={a.title}
                  des={a.price}
                  dis={a.discountPercentage}
                  lnk={`/details/${a.id}`} />
              </div>
            ))}
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Details