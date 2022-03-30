import React from 'react';
import HomePageBekbolsun from '../HomePageBekbolsun/HomePageBekbolsun';
import HomePageWatchesBlock from '../HomePageWatchesBlock/HomePageWatchesBlock'
import SectionThird from '../SectionThird/SectionThird'
import CarouselEldiyar from '../CarouselEldiyar/CarouselEldiyar'
const Home = () => {
    return (
        <div>
            <HomePageBekbolsun />
            <HomePageWatchesBlock />
            <SectionThird />
            <CarouselEldiyar />
        </div>
    );
};

export default Home;
