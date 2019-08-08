import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'
<<<<<<< Updated upstream


// const tasks = ['take out the trash', 'shovel the deiveway', 'walk the dog ']

// const element1 = React.createElement('ol', null,
//     React.createElement('li', null, 'Take out the trash'),
//     React.createElement('li', null, 'Take out the trash'),
//     React.createElement('li', null, ' walk the dog')
// );

// const element = React.createElement('ol', null,
//     tasks.map((task, index) => React.createElement('li', {key:index}, task))
// );


//JSX
// const element = <ol>
//     <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li> 
// </ol> 

// const element =
//     <div> 
//         <h1> Task List </h1>
//         <ol>
//             {tasks.map((task, index)=><li key={index}>{task}</li>)}
//         </ol>
//     </div>

// ReactDom.render(element, document.getElementById('root'));

/*
class List extends Component {
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        )
    }
}

class Title extends Component {
    render() {
        return <h1> {this.props.title} </h1>
    }
}
class Main extends Component {
    render() {
        return <div>
            <Title title={"Hello world"} />
            <List tasks={['hose the driveway', 'finish the laundry']} />
            <List tasks={['Mow the low', 'walk the dog']} />
        </div>
    }
}
*/

ReactDom.render(<Main />, document.getElementById('root'));
=======
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import database from './database/config'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
console.log("this is index.js");
ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
>>>>>>> Stashed changes
