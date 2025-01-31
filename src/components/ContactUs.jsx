import React from 'react'

export const ContactUs = () => {
    return (
        <div className='container-fluid  m-md-2'>
            <div style={{ marginLeft: "6.5rem" }}>
                <h1 className='text-uppercase contact-us' >Contact Us</h1>
                <h5>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR
                    <br />JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR
                    BY PHONE, EMAIL, OR <br />SOCIAL MEDIA. </h5>
                <div className="row contact-us">
                    <div className="col-md-6 col-lg-5 mt-5 pt-4">
                        <div className="d-flex gap-5">
                            <button className='btn btn-dark d-flex align-items-center ps-4 contact' style={{ marginRight: "8px" }}>
                                <i class="bi bi-chat-left-text text-white fw-bold pt-1" style={{ marginRight: "8px" }}></i> VIA CHAT SUPPORT</button>
                            <button className="btn btn-dark contact">
                                <i className="bi bi-telephone-fill text-white me-2"></i> VIA CALL
                            </button>
                        </div>
                        <button className='btn border-black mt-4 contact-us'>
                            <i className="bi bi-chat-left-text fw-bold" style={{ marginRight: "8px" }}></i>VIA EMAIL FORM</button>

                        <form action="">

                        </form>
                    </div>
                    <div className="col-md-12 col-lg-6 text-lg-end service-image">
                        <img src="/images/service.png" alt="Service" />
                    </div>
                </div>
            </div>
        </div>
    )
}
