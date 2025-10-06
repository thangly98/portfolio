import { Outlet } from 'react-router-dom';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Particles from '@components/Fragments/Particles';
import Menu from '@components/Layout/Menu';

function Layout() {
  return (
    <>
      <Menu />
      <Outlet />

      <Analytics />
      <SpeedInsights />

      <div className='fixed left-0 top-0 -z-10 h-full w-full'>
        <Particles particleCount={300} particleBaseSize={90} />
      </div>
    </>
  );
}

export default Layout;
