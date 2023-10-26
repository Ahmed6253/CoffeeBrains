import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  let screen = window.innerWidth;
  return (
    <>
      {screen > 600 && <Navbar />}
      <Outlet />
      {screen < 600 && <Navbar />}
    </>
  );
}

export default Layout;
