import React from 'react';
import CakeContainer from './components/cake-container';
import HooksIcecreamContainer from './components/hooks-icecream-container';
import NewCakeContainer from './components/new-cake-container';
import UserContainer from './components/user-container';

function App() {
    return (
        <div>
            <CakeContainer />
            <HooksIcecreamContainer />
            <NewCakeContainer />
            <UserContainer />
        </div>
    )
}

export default App
