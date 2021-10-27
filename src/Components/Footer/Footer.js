import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white bg-dark red-border-top">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Volunteer Network</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                This is a volunteer network website server. Here you can take different types of volunteer work.
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Service</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Child Support
                                </NavLink>
                            </p>


                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Refuge Shelter
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Food Charity
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Good Education
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/home" className="text-white text-decoration-none">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/donation" className="text-white text-decoration-none">
                                    Donation
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">Events</NavLink>
                            </p>

                            <p>
                                <NavLink to="/blog" className="text-white text-decoration-none">
                                    Blog
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p><i className="fas fa-home mr-3"></i> Dhaka, Gulshan 1212, Bangladesh</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@volunteer-network.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +880 199 999 888</p>
                            <p><i className="fas fa-print mr-3"></i> +880 199 999 888</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <span className="me-2">© 2021 Copyright</span>

                <NavLink to="/" className="text-white text-decoration-none metal-font" href="https://mdbootstrap.com/">
                    MD. RIFAT ISLAM
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;