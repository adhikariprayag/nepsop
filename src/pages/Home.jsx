import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import { Link } from "react-router-dom";
import '../scss/Home.scss'
import Card from "../components/Card";
import cat, { product } from '../Data.jsx'
function Home() {
  return (
    <>
      <Header />
      <section className="py-5 homepage">
        <div className="container pb-5">

          <div className="row ">

            <div className="col-lg-3">
              <ul className="list-group cat-box">
                <li className="list-group-item active text-center fw-bold bg-orange" aria-current="true">CATEGORIES</li>
                {cat.map((a) => (
                  <li className="list-group-item"><Link to={`/category/${a}/`} className="text-capitalize text-decoration-none fw-light">{a}</Link></li>
                ))}
              </ul>
            </div>

            <div className="col-lg-9 p-sm-3 p-lg-0">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://icms-image.slatic.net/images/ims-web/41506e57-b7da-4153-b57c-d0f982797c3d.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item active">
                    <img src="https://icms-image.slatic.net/images/ims-web/41506e57-b7da-4153-b57c-d0f982797c3d.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item active">
                    <img src="https://icms-image.slatic.net/images/ims-web/41506e57-b7da-4153-b57c-d0f982797c3d.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="row border-black py-5 ">
            <div className="col-lg-12 text-center py-3 fs-2 text-uppercase border-top border-bottom ">
              Trending Products
            </div>

            <div className="container col-lg-12">
              <div className="row d-flex  justify-content-center ">
                {product.map((a) => (
                  <div className="col-md-6 col-lg-4 py-4 items-card-res justify-content-center d-flex">
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
  );
}

export default Home
