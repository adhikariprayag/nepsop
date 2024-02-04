import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-orange text-light'>
        <div className="container">
          <div className="row g-5">
            <div className=" col-12 col-md-4">
              <h5 className='fw-bolder fs-4  '>Follow Us:</h5>
              <ul className='p-0 m-0 fw-normal py-2 d-flex flex-column gap-3 '>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h5 className='fw-bolder fs-4  '>Contact Us:</h5>
              <ul className='p-0 m-0 fw-normal py-2 d-flex flex-column gap-3'>
                <li>FAQs</li>
                <li>Customer Care</li>
                <li>Return and Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Raise a ticket</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h5 className='fw-bolder fs-4  '>Nepsop:</h5>
              <ul className='p-0 m-0 fw-normal py-2 d-flex flex-column gap-3'>
                <li>Download App</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>

          <div className="row text-center mb-0 py-3 ">
            <div className="col-lg-12 border-top">
              <i className="bi bi-eye fs-2  border-light"></i>
            </div>
            <div className="col-12">
              <h6 className='fw-semibold '>A YAGG creation.</h6>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer