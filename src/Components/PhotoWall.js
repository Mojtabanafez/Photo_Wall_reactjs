import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    console.log(props.posts);
    
    return <div>
        <Link className="addIcon" to="/AddPhoto">f</Link>
        <div className="photoGrid">
            {props.posts.sort(function(x,y){
                return y.id-x.id
            }).map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

console.log("this is Photowall");

export default PhotoWall;