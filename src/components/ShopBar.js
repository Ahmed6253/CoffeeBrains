import { NavLink } from 'react-router-dom';
import classes from './shopBar.module.css';
import cupImg from '../assets/cup.png';
import bagImg from '../assets/bag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { searchActions } from '../store/search-slice';
import { useRef, useState } from 'react';

function ShopBar() {
  const searchInput = useRef();
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.currentTarget.value.trim() !== '') {
      setIsSearching(true);
    } else setIsSearching(false);
    dispatch(searchActions.setSearch(e.currentTarget.value.toLowerCase()));
  };
  const handelClearSearch = (e) => {
    e.preventDefault();
    searchInput.current.value = '';
    dispatch(searchActions.setSearch(''));
    setIsSearching(false);
  };
  return (
    <div className={classes.shopBar}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : '')}
        to="drinks"
      >
        <img src={cupImg} alt="cup" />
      </NavLink>
      <NavLink
        end
        className={({ isActive }) => (isActive ? classes.active : '')}
        to="coffeeBeans"
      >
        <img src={bagImg} alt="bag" />
      </NavLink>
      <form>
        <input
          ref={searchInput}
          onChange={handleSearch}
          placeholder="Search"
          className={classes.text}
          type="text"
          name="search"
        />

        {!isSearching && (
          <div className={classes.btn}>
            <FontAwesomeIcon
              className={classes.iconSearch}
              icon={faMagnifyingGlass}
            />
          </div>
        )}
        {isSearching && (
          <button onClick={handelClearSearch} className={classes.btn}>
            <FontAwesomeIcon icon={faXmark} className={classes.iconSearch} />
          </button>
        )}
      </form>
    </div>
  );
}

export default ShopBar;
