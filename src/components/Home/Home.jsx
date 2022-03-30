import React from 'react';
import HomePageBekbolsun from '../HomePageBekbolsun/HomePageBekbolsun';
import HomePageWatchesBlock from '../HomePageWatchesBlock/HomePageWatchesBlock'
import SectionThird from '../SectionThird/SectionThird'
import CarouselEldiyar from '../CarouselEldiyar/CarouselEldiyar'
import HomePage5Uluk from '../HomePage5Uluk/HomePage5Uluk';
import WachBrandAlsu from '../WachBrandAlsu/WachBrand'
import Block7 from '../HomePage7BlockCardsChynara/HomePage7BlockCardsChynara'
import SectionEradil from '../SectionEradil/SectionEradil';
import Block9 from '../HomePage9BlockCalibre/HomePage'
const Home = () => {
    return (
        <div>
            <HomePageBekbolsun />
            <HomePageWatchesBlock />
            <SectionThird />
            <CarouselEldiyar />
            <HomePage5Uluk />
            <WachBrandAlsu />
            <Block7 />
            <SectionEradil />
            <Block9 />
        </div>
    );
};

export default Home;
