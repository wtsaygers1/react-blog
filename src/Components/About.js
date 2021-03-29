import React from "react";

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <p>
                    I've drank from the fountain of youth<br />
                    ...molded the minds of the future<br />
                    ...surfed the warm waters of Hawaii<br />
                    ...piloted the friendly skies<br />
                    ...sailer the rough seas<br />
                    ...salsa'd in Colombia<br />
                    and now have started a journey to become a full stack web developer!<br />
                    Welcome to my site and explore to discover more.
                </p>

                
            </div>
        </div>
    );
}

export default About;