import React from 'react';
import ReactDOM from 'react-dom';

import MainContent from './MainContent';

it('main Application is Mounting Proplerly',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<MainContent />, div);
    ReactDOM.unmountComponentAtNode(div);
})
