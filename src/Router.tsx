
import {Routes,Route} from 'react-router-dom';


import { DefaultLayout } from './layouts/components/DefaultLayout/Index';
import { Home } from './pages/Home/Index';
import { Register } from './pages/Register/Index';
import { Delivery } from './pages/Delivery/Index';


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/delivery" element={<Delivery/>}/>
         </Route>
        </Routes>
    )
}