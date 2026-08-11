import { Outlet } from 'react-router-dom';
import Footer from '../../shared/components/Footer';
import { Header } from '../components/Header';

export const AppLayout = () => {
  return (
    <>
      <div>
        <header className="max-w-6xl mx-auto">
          <Header />
        </header>
        <main className="py-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
