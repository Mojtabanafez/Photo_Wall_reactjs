import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {removedPost} from '../redux/action'

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
            <button onClick={() => {
                //  زمانی که dispatch تحریک می‌شود، متعاقباً store تابع reducer را فراخوانی می‌کند 
                props.removedPost(props.index)
                //  اگه mapDispathToProps تو App.js نباشه:
                // props.dispatch(removedPost(props.index)) 
            }}> Remove </button>
        </div>
    </figure>
}
Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

console.log("this is Photo");
export default Photo;