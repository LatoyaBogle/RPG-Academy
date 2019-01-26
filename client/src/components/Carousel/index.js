import React from 'react';
import test from '../../images/test.png';
import "../Carousel/index.css";
 

export function Carousel () {

  
  return (
    <div id="carousel-main" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10">
      <img src={test} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item" data-interval="10000">
      <img src={test} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item" data-interval="10000">
      <img src={test} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" style={{borderRadius:"50%"}}></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" style={{borderRadius:"50%"}}></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  );

  
};


 
 


export default Carousel;