import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import MainLayout from './mainLayout.tsx'
import {getFlagValue, initFlagsmith} from "./flagsmithClient.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./pages/start.tsx";
import Products from "./pages/products.tsx";
import User from "./pages/user.tsx";
import Help from "./pages/help.tsx";
import Default from "./pages/default.tsx";

initFlagsmith().then(() => {
  const pluginA = getFlagValue("plugin_a");

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout/>}>
            <Route path="" element={<Default/>}/>
            {pluginA &&
              <>
                <Route path="start" element={<Start/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="user" element={<User/>}/>
                <Route path="help" element={<Help/>}/>
              </>
            }
          </Route>

        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
});

