import classes from './Home.module.css';
import HomeBanner1 from '../components/HomeBanner1';
import HomeBanner2 from '../components/HomeBanner2';
import bagImg from '../assets/bag.png';
import cupImg from '../assets/cup.png';
import storeImg from '../assets/store.png';
import HomeCard from '../components/HomeCard';
import bagBannerImg from '../assets/CoffeeBag.png';
import cupBannerImg from '../assets/CoffeeCupBanner.png';
import storeBannerImg from '../assets/map.png';
import { useState } from 'react';

const cardsData = [
  { id: 'bag', img: bagImg, title: 'Fresh Roasted Coffee' },
  { id: 'cup', img: cupImg, title: 'Delicious Coffee Drinks' },
  { id: 'store', img: storeImg, title: 'Always There For You ' },
];

const bannerData = [
  {
    id: 'bag',
    img: bagBannerImg,
    details:
      'A lot of different types of high quality fresh roasted coffee beans between blinds and single origins.',
  },
  {
    id: 'cup',
    img: cupBannerImg,
    details:
      'Our professional baristas are always ready to make your coffee the way you like with the same delicious taste every time.',
  },
  {
    id: 'store',
    img: storeBannerImg,
    details:
      'We are everywhere across Egypt. Order your coffee wherever you are or drink it at the nearest branch.',
  },
];

function Home() {
  const [initBanner, setInitBanner] = useState(
    bannerData.find((data) => data.id === 'bag')
  );

  const getBannerId = (id) => {
    setInitBanner(bannerData.find((data) => data.id === id));
  };

  return (
    <div className={classes.Home}>
      <HomeBanner1 />
      <ul key="cards">
        {cardsData.map((card) => (
          <HomeCard
            getCardId={getBannerId}
            key={card.id}
            id={card.id}
            img={card.img}
            title={card.title}
          />
        ))}
      </ul>
      <HomeBanner2
        id={initBanner.id}
        img={initBanner.img}
        details={initBanner.details}
      />
    </div>
  );
}

export default Home;
