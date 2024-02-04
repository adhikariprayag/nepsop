import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import cat, { product } from '../Data'
import '../scss/Cardres.scss'
function Category() {
    let { cid } = useParams()
    let cdata = product.filter((a) => a.category == cid)
    return (
        <>
            <Header />

            <section className="category py-5">
                <div className="container py-5 text-dark">

                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="list-group cat-box">
                                <li className="list-group-item active text-center fw-bold bg-orange" aria-current="true">CATEGORIES</li>
                                {cat.map((a) => (
                                    <li className="list-group-item"><Link to={`/category/${a}/`} className="text-capitalize text-decoration-none fw-light">{a}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className='col-lg-9 py-sm-3 py-lg-0'>
                            <div class="row">
                                <div className="col-lg-12 text-center py-3 border-top border-bottom bg-orange text-light shadow rounded">
                                    <h2><span className='text-uppercase '>{cid}</span> </h2>
                                </div>

                                {cdata.map((a) => (
                                <div className="col-lg-6 col-md-6 py-4 items-card-res">
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
            </section>
            <Footer />
        </>
    )
}

export default Category