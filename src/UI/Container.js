import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import classes from './Container.module.css';
import coffeeBagImg from '../assets/CoffeeBag.png';
import coffeeCupImg from '../assets/CoffeeCupBanner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

async function getProductsData(category) {
  const response = await fetch(
    'https://ahmed-535-default-rtdb.firebaseio.com/' + category + '.json'
  );
  const data = await response.json();
  return data;
}

function Container(props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [props.category],
    queryFn: () => getProductsData(props.category),
  });
  let productsData;
  const searchValue = useSelector((state) => state.search.searchValue);

  if (searchValue.trim() === '') {
    productsData = data;
  }
  if (searchValue.trim() !== '' && data) {
    console.log(searchValue.length);
    productsData = data.filter((prod) =>
      prod.name.split(' ')[0].toLowerCase().includes(searchValue)
    );
  }

  return (
    <div className={classes.ProductsContainer}>
      {isLoading && (
        <div className={classes['newtons-cradle']}>
          <div className={classes['newtons-cradle__dot']}></div>
          <div className={classes['newtons-cradle__dot']}></div>
          <div className={classes['newtons-cradle__dot']}></div>
          <div className={classes['newtons-cradle__dot']}></div>
        </div>
      )}
      {isError && (
        <div className={classes.error}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faTriangleExclamation}
          />
          <h2>Somthing Went Wrong!!</h2>
        </div>
      )}
      {productsData && productsData.length === 0 && !isLoading && (
        <h2 className={classes.noSearch}>
          Your search - <span>{searchValue}</span> - did not match any product.
        </h2>
      )}
      {productsData &&
        productsData.map((product) => (
          <ProductCard
            imgClassName={props.category}
            key={product.name}
            name={product.name}
            type={product.type}
            notes={product.notes}
            img={props.category === 'drinks' ? coffeeCupImg : coffeeBagImg}
            price={product.price}
          />
        ))}
    </div>
  );
}

export default Container;
