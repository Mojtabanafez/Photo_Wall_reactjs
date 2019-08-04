import React, { Component } from 'react';
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'

// const posts = [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: " " + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbehQmX7booN-lD3PhXReVX2aGdJNACig9m8GXWi9ZlucXlKuwIw"
// }, {
//     id: "1", description: "Aliens???",
//         imageLink: " https://www.canva.com/learn/wp-content/uploads/2018/12/00-winterlandscapes_featimage.jpg" 
// }, {
//     id: "2",
//     description: "On a vacation!",
//         imageLink:"https://www.goodfreephotos.com/cache/italy/other-italy/beautiful-landscape-with-mountains-and-lakes-with-sky-in-italy_800.jpg?cached=1522446501"
// }]

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: " " + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbehQmX7booN-lD3PhXReVX2aGdJNACig9m8GXWi9ZlucXlKuwIw"
            }, {
                id: 1, description: "Aliens???",
                imageLink: " https://www.canva.com/learn/wp-content/uploads/2018/12/00-winterlandscapes_featimage.jpg"
            }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://www.goodfreephotos.com/cache/italy/other-italy/beautiful-landscape-with-mountains-and-lakes-with-sky-in-italy_800.jpg?cached=1522446501"
            }],
            // screen: '/'
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
        this.addPhoto = this.addPhoto.bind(this);

    }

    // render() {
    //     return <div>
    //         <Title title={"Photowall"} />
    //         <Photowall post={posts} />
    //     </div>
    // }

    removePhoto(postRemoved) {
        this.setState((state) => ({
            posts: state.posts.filter(post => post != postRemoved)
        }))

    }
    addPhoto(postSubmitted) {
        // console.log(this.state.posts);

        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
        // console.log(this.state.posts);

    }

    navigate() {
        this.setState({
            screen: '/AddPhoto'
        })
    }

    componentDidMount() {
        // const data = SimulateFetchFromDatabase();
        // this.setState({
        //     posts:data
        // })
    }
    // componentWillMount(prevProps, prevState) {
    //      alert("re-render")
    // }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState.posts);
        // console.log(this.state);
    }
    render() {
        console.log(this.state.posts);
        
        return < div >

            <Route exact path="/" render={() => (
                <div>
                    <Title title={"Photowall"} />
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                </div>
            )} />

            <Route path="/AddPhoto" render={({ history }) =>
                <AddPhoto onAddPhoto={ addedPosts => {

                    
                    
                    this.addPhoto(addedPosts)
                    history.push("/")
                }} />
            } />

        </div >

    }
}
export default Main;