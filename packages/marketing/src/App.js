import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // switch was there
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
    return (
    <div>
        <StylesProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/pricing' element={<Pricing />} /> 

                    <Route path='/' element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
    );
}

/*
<Routes>
                    <Route exact path='/pricing' element={<Pricing />} /> 

                    <Route path='/' element={<Landing />} />
                </Routes>

switch was there -- component
 */