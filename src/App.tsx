import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Routes from './routes/Router';
import { BottomTabMenu } from '@components/BottomTabMenu';
import { ROOT_PATH } from '@constants/paths';

function App() {
  const { pathname } = useLocation();

  const rootPath = pathname.split('/')[1];

  return (
    <Suspense fallback>
      <Routes />
      {rootPath === ROOT_PATH.login || rootPath === ROOT_PATH.join ? null : (
        <BottomTabMenu />
      )}
    </Suspense>
  );
}

export default App;
