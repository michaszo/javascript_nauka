import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({name, description, image, twitterLink}) => (
    <li className="listItem__wrapper">
        <img className="listItem__img" src={image} alt={name} />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__desc">{description}</p>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="listItem__btn">Visit twitter page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    twitterLink: PropTypes.string
}

ListItem.defaultProps = {
    twitterLink: 'https://twitter.com/'
}

export default ListItem;