import { Navigate, Outlet } from 'react-router-dom';
import ShopBar from '../components/ShopBar';

function Shop() {
  return (
    <>
      <ShopBar />
      <Outlet />
      <Navigate to="/shop/coffeeBeans" />
    </>
  );
}

export default Shop;
