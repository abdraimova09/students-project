import React from 'react';
import HomePageBekbolsun from '../HomePageBekbolsun/HomePageBekbolsun';
import HomePageWatchesBlock from '../HomePageWatchesBlock/HomePageWatchesBlock'
import SectionThird from '../SectionThird/SectionThird'
import CarouselEldiyar from '../CarouselEldiyar/CarouselEldiyar'
import HomePage5Uluk from '../HomePage5Uluk/HomePage5Uluk';
import WachBrandAlsu from '../WachBrandAlsu/WachBrand'
const Home = () => {
    return (
        <div>
            <HomePageBekbolsun />
            <HomePageWatchesBlock />
            <SectionThird />
            <CarouselEldiyar />
            <HomePage5Uluk />
            <WachBrandAlsu />
        </div>
    );
};

export default Home;
