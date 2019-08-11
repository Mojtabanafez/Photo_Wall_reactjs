import React, { Component } from 'react';
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import { removedPost } from '../redux/action'
import Single from './Single';

class Main extends Component {

    state={Loading:true};

    componentDidMount(){
        
        this.props.startLoadingPost().then(()=>{
            this.state.Loading = false;
        });
        this.props.startLoadingComments(); 
    }
    render() {
        return < div >
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path="/" render={(history) => (
                <div>
                    <Photowall {...this.props} />
                </div>
            )} />

            <Route path="/AddPhoto" render={({ history }) =>                
                <AddPhoto {...this.props} onHistory={history} />
            } />
            <Route path="/single/:id" render={(params) => (
                <Single Loading = {this.state.Loading} {...this.props} {...params} />
            )} />
        </div >
    }
}
export default Main;