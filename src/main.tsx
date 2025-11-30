import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@app/index.css'
import MainLayout from '@app/mainLayout.tsx'
import {getFlagValue, initFlagsmith} from '@app/flagsmithClient';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Start from '@app/pages/start.tsx';
import Products from '@app/pages/products.tsx';
import User from '@app/pages/user.tsx';
import Help from '@app/pages/help.tsx';
import Default from '@app/pages/default.tsx';
import Admin from '@app/pages/admin.tsx';

initFlagsmith().then(() => {
  const pluginA = getFlagValue('plugin_a');
  const pluginB = getFlagValue('plugin_b');

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainLayout/>}>
            <Route path='' element={<Default/>}/>
            {pluginA &&
              <>
                <Route path='start' element={<Start/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='user' element={<User/>}/>
                <Route path='help' element={<Help/>}/>
              </>
            }
            {pluginB &&
              <Route path='admin' element={<Admin/>}/>
            }
          </Route>

        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
});

