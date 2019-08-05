import React, { Component } from 'react';
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import { removedPost} from '../redux/action'

class Main extends Component {
    constructor(){
        console.log("constructorr");
        super();
    }        
    render() {        
        console.log(this.props.posts);
        return < div >
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path="/" render={() => (
                <div>
                    
                    <Photowall {...this.props} />
                </div>
            )} />

            <Route path="/AddPhoto" render={({ history }) =>
                <AddPhoto {...this.props} onHistory={history} />
            } />
        </div >
    }
}
console.log("this is Main");

export default Main;