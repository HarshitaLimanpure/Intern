import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
<>

<div className="container-fluid " id='foot'>
      <footer className="text-white text-center text-lg-start bg-dark container-fluid">
        {/* Grid container */}
        <div className="container-fluid p-4">
          {/* Grid row */}
          <div className="row mt-4">
            {/* Grid column */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti.
              </p>

              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                molestias.
              </p>

              <div className="mt-4">
                {/* Facebook */}
                <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fa fa-facebook-f"></i></a>
                {/* Dribbble */}
                <a type="button" className="btn btn-floating btn-light btn-lg  m-1"><i className="fa fa-dribbble"></i></a>
                {/* Twitter */}
                <a type="button" className="btn btn-floating btn-light btn-lg  m-1"><i className="fa fa-twitter"></i></a>
                {/* Google + */}
                <a type="button" className="btn btn-floating btn-light btn-lg  m-1"><i className="fa fa-google-plus"></i></a>
                {/* Linkedin */}
              </div>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

              <div className="form-outline form-white mb-4">
                <input type="text" id="formControlLg" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="formControlLg">Search</label>
              </div>

              <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">New York, NY 10012, US</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2021 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </div>

</>
    )
}
