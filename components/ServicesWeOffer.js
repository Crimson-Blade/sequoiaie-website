// import { Link } from "next/link";
import Image from "next/image";
import Link from "next/link";



const ServicesWeOffer = () => {
  return (
    <div className="services_main_container">
    <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

<h2>Services We Offer</h2>
<p>
  We offer a wide range of flooring services, and high quality
  installation services at affordable prices.
</p>
</div>
<div className="services__we__offer">
<div className="service">
<Image
  className="img"
  src="/img/servicesImage.jpg"
  alt="House with beautifull Vinyl floor"
  width={1000}
  height={750}
  quality={100}
/>

<div className="service__content">
  <h2 className="tiles_head">Tiles and interior design</h2>
  <p>
    We offer a substantial list of suppliers, some of which shown below.
    We provide competitive prices and ensure the project is completed on
    time, on budget and to the required standard.
  </p>
  <a href="/services">Our services</a>
</div>
</div>
</div>
    </div>
      
  );
};

export default ServicesWeOffer;
