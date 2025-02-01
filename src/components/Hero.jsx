import React from 'react'

export const Hero = () => {
    return (
        <div>
            <div className="container ms-lg-5 d-flex  m-md-2  justify-content-md-center">
                <div className="row mt-5 g-5 hero" style={{ marginLeft: "4rem" }}>
                    <div className="col-md-10 col-sm-12 col-lg-6">
                        <h1 className='text-uppercase'>Your FEET <br />
                            DESERVE <br />
                            THE BEST</h1>
                        <h5 className='text-uppsercase pt-3'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
                            HELP YOU WITH OUR SHOES. YOUR FEET DESERVE
                            <br />  THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                            <br />SHOES.</h5>
                        <div className='d-flex mt-5'>
                            <button className="btn btn-danger btn-sm me-5 rounded-0" style={{ height: "41px", width: "141px" }} type="submit">Shop Now</button>
                            <button className="btn border-black btn-sm me-5 rounded-0 custom-btn" style={{ color: "#5A5959", height: "41px", width: "141px" }} type="submit">Category</button>
                        </div>
                        <p className="mt-4" style={{ color: "#5A5959", fontWeight: "400", fontSize: "16px", lineHeight: "19.36px", fontFamily: "Inter" }}>Also Available On</p>
                        <div className='d-flex gap-3 brand_logo'>
                            <img src="/images/flipkart.png" alt="flipkart" />
                            <img src="/images/amazon.png" alt="amazon" />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-5 pt-5 mt-5 ms-md-5 text-lg-end">
                        <img src="/images/shoe_image.png" alt="ShoeImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}
