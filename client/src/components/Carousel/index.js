import React from "react";
//import { Carousel } from 'react-responsive-carousel';
 //import Image from './POE.jpg';
 import test from '../../images/test.png';
 
 //import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel';

export function DemoCarousel() {
    
        return (
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={test} className="d-block w-100" alt="..." style={{width:600, height:600}}/>
              <div className="carousel-caption d-none d-md-block">
    <h5>PATCH NOTES</h5>
    <p>...</p>
  </div>
            </div>
            <div className="carousel-item">
            <img src={test} className="d-block w-100" alt="..." style={{width:600, height:600}}/>
            <div className="carousel-caption d-none d-md-block">
    <h5>CURRENT LEAGUES</h5>
    <p>...</p>
  </div>
            </div>
            <div className="carousel-item">
            <img src={test} className="d-block w-100" alt="..." style={{width:600, height:600}}/>
            <div className="carousel-caption d-none d-md-block">
    <h5>FEATURED BUILDS</h5>
    <p>...</p>
  </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        );
    
  };
 
 

export function Owl() {
  
  return(
 <section className="bg-inverse p-y-0">
<div className="owl-carousel owl-slide full-height owl-loaded owl-drag">



<div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(-2966px, 0px, 0px)", transition: "all 0.25s ease 0s", width: 10381}}><div className="owl-item cloned" style={{width:1483}}><div className="carousel-item" style={{backgroundImage:"url(../../backgroung.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">The Last of Us: Remastered</h3>
<p>Survive an apocalypse on Earth in The Last of Us, a PlayStation 4-exclusive title.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=W2Wnvvj33Wo" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div><div className="owl-item cloned" style={{width:1483}}><div className="carousel-item" style={{backgroundImage: "url(../../images/background.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">For Honor: The Berserker</h3>
<p>Enter the chaos of a raging war as a bold knight, brutal viking, or mysterious samurai.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=zFUymXnQ5z8" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div><div className="owl-item active" style={{width:1483}}><div className="carousel-item" style={{backgroundImage: "url(../../images/background.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">The Witcher 3: Blood and Wine</h3>
<p>The world is in chaos. The air is thick with tension and the smoke of burnt villages.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=c0i88t0Kacs" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div><div className="owl-item" style={{width:1483}}><div className="carousel-item" style={{backgroundImage: "url(../../images/background.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">The Last of Us: Remastered</h3>
<p>Survive an apocalypse on Earth in The Last of Us, a PlayStation 4-exclusive title.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=W2Wnvvj33Wo" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div><div className="owl-item" style={{width: 1483}}><div className="carousel-item" style={{backgroundImage: "url(../../images/background.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">For Honor: The Berserker</h3>
<p>Enter the chaos of a raging war as a bold knight, brutal viking, or mysterious samurai.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=zFUymXnQ5z8" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div><div className="owl-item cloned" style={{width: 1483}}><div className="carousel-item" style={{backgroundImage: "url(../../images/background.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">The Witcher 3: Blood and Wine</h3>
<p>The world is in chaos. The air is thick with tension and the smoke of burnt villages.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=c0i88t0Kacs" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div><div className="owl-item cloned" style={{width:1483}}><div className="carousel-item" style={{backgroundImage: "url(../../images/background.png)", height:423}}>
<div className="carousel-overlay"></div>
<div className="carousel-caption">
<div>
<h3 className="carousel-title">The Last of Us: Remastered</h3>
<p>Survive an apocalypse on Earth in The Last of Us, a PlayStation 4-exclusive title.</p>
<a className="btn btn-primary btn-rounded btn-shadow btn-lg" href="https://www.youtube.com/watch?v=W2Wnvvj33Wo" data-lightbox="" role="button">Watch Gameplay</a>
</div>
</div>
</div></div></div></div><div className="owl-nav"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div>
</section>
);
}

export default DemoCarousel;