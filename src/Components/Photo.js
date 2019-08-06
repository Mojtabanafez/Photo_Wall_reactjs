import React, { Component } from 'react'
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {removedPost} from '../redux/action'
import { Link } from 'react-router-dom'
>>>>>>> Stashed changes

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
        <Link to={`/single/${post.id}`}>
            <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
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
                //  زمانی که dispatch تحریک می‌شود، متعاقباً store تابع reducer را فراخوانی می‌کند 
                props.removedPost(props.index);
                props.history.push('/');
                //  اگه mapDispathToProps تو App.js نباشه:
                // props.dispatch(removedPost(props.index)) 
            }}> Remove </button>
            <Link to={`/single/${post.id}`} className="button">
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0 }
                </div>
            </Link>
>>>>>>> Stashed changes
        </div>
    </figure>
}

export default Photo;