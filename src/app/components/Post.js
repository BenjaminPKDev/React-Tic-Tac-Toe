import React from 'react';
import PropTypes from 'prop-types';
import "./post.css";


export default function Post({ title, author, content }) {
    return (
        <div className='card'>
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        <p>{content}</p>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    following: PropTypes.string.isRequired,
};