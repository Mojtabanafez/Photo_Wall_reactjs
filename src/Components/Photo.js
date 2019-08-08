import React, { Component } from 'react'

// class Photo extends Component {
//     render(){
//         const post = this.props.post;
//         return <figure className="figure">
//             <img className="Photo" src={post.imageLink} alt={post.description}>
//             </img>
//             <figcaption>
//                 <p>
//                     {post.description}
//                 </p>
//             </figcaption>
//             <div className = "button-container">
//                 <button> Remove </button>
//             </div>
//         </figure>
//     }
// }
function Photo(props) {
    const post = props.post;
    return <figure className="figure">
        <img className="Photo" src={post.imageLink} alt={post.description}>
        </img>
        <figcaption>
            <p>
                {post.description}
            </p>
        </figcaption>
        <div className="button-container">
<<<<<<< Updated upstream
            <button className="remove-button"> Remove </button>
=======
            <button onClick={() => {
                console.log(props.posts);
                props.startRemovingPosts(props.index, post.id);
                props.history.push('/');
            }}> Remove </button>
            <Link className="button" to={`single/${post.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble">
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </div>
                </div>
            </Link>
>>>>>>> Stashed changes
        </div>
    </figure>
}

export default Photo;