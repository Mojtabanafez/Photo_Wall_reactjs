import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            <button  onClick={ ()=>{
                props.onRemovePhoto(post)
            }}> Remove </button>
        </div>
    </figure>
}

Photo.propTypes = {
    post:PropTypes.object.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}


export default Photo;