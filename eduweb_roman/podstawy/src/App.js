import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from './components/Form/Form';

const initialStateItems = [
    {
        image: 'https://image.freepik.com/free-vector/cute-avocado-cartoon-hand-drawn-style_42349-476.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://image.freepik.com/free-vector/cute-avocado-cartoon-hand-drawn-style_42349-476.jpg',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://image.freepik.com/free-vector/cute-avocado-cartoon-hand-drawn-style_42349-476.jpg',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    },
    {
        image: 'https://image.freepik.com/free-vector/cute-avocado-cartoon-hand-drawn-style_42349-476.jpg',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
];

class App extends React.Component {

    state = {
        items: [...initialStateItems]
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value, 
            description: e.target[3].value,
        }
        
        //20min debugowania przez nie dodanie spreadoperator
        //index.js:1437 Warning: Failed prop type: The prop `name` is marked as required in `ListItem`, but its value is `undefined`.
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));
        
        e.target.reset();
    }

        

 render() {
    return (
    <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
    </div>
    );
}}


export default App;
