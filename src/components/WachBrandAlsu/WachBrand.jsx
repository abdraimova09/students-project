import { Carousel } from 'antd';
import React from 'react';
import './WachBrand.css'


const WachBrand = () => {
    return (
        <div>
            <div className='text'>
           <h1>FEATURED BRANDS</h1> 
           <h3>Discover an Exclusive Selection of Luxury Timepieces</h3>
           </div>
           <Carousel autoplay >
            <div className='card'>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src='https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/rolex-bc-jun21.jpg'/></div>
                   <img src='https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/rolex-logo-brand-card-feb21.jpg'/>
               </div>
               <div className='card_ol'>
                   <div className='kil'>
                       <img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/cartier-bc-jun21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/cartier.jpg" /> 
               </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/tag-bc-jun21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/tag-heuer.jpg" />
                </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/omega-mar21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/omega.jpg" />
                </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/breitling-bc-jun21.jpg" /></div>
                   <img src="   https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/breitling.jpg" />
                </div>
            </div>
            <div className='card'> <div className='card_ol'>
                   <div className='kil'><img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/iwc-bc-jun21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/iwc-schaffhausen.jpg" />
               </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/grandseiko-bc-jun21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/grand-seiko.jpg" />
               </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="   https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/longines-bc-jun21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/longines.jpg" />
               </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="   https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/jlc-bc-jun21.jpg" /></div>
                   <img src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/jaeger-lecoultre.jpg" />
               </div>
               <div className='card_ol'>
                   <div className='kil'><img className='img' src="	https://content.thewosgroup.com/mayors/homepage/brand-carousel/images/tudor-bc-jun21.jpg" /></div>
                   <img src="   https://content.thewosgroup.com/mayors/homepage/brand-carousel/logos/tudor.jpg" />
               </div>
               </div>

                </Carousel>
                
           <div className=' btn-display'>
           <button className='bnn_w'>VIEW ALL BRANDS</button>

           </div>
        </div>
    );
};

export default WachBrand;