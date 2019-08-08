import React, { Component } from 'react';
import Title from './Title'
import Photowall from './PhotoWall'


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
<<<<<<< Updated upstream
    constructor(){
        super();
        this.state = {
            posts:[{
                id: "0",
                description: "beautiful landscape",
                imageLink: " " + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbehQmX7booN-lD3PhXReVX2aGdJNACig9m8GXWi9ZlucXlKuwIw"
            }, {
                id: "1", description: "Aliens???",
                imageLink: " https://www.canva.com/learn/wp-content/uploads/2018/12/00-winterlandscapes_featimage.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://www.goodfreephotos.com/cache/italy/other-italy/beautiful-landscape-with-mountains-and-lakes-with-sky-in-italy_800.jpg?cached=1522446501"
            }]
        }
=======
    componentDidMount(){
        this.props.startLoadingPost();  
>>>>>>> Stashed changes
    }
    // render() {
    //     return <div>
    //         <Title title={"Photowall"} />
    //         <Photowall post={posts} />
    //     </div>
    // }
    render() {
        return <div>
            <Title title={"Photowall"} />
            <Photowall posts={this.state.posts}/>
        </div>
    }
}
export default Main;