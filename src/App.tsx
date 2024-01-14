import { HeaderLayout } from './layout/HeaderLayout';
import { Suspense } from 'react';
import Routes from './routes/Router';

function App() {
  return (
    <Suspense fallback>
      <HeaderLayout />
      <Routes />
    </Suspense>
  );
}

export default App;
