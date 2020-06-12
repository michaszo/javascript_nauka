import React from 'react';
import PropTypes from 'prop-types';
import styles from "./ListItem.module.scss";
import Button from '../../Button/Button';
import Title from '../../Title/Title';

const ListItem = ({ image, name, description, twitterLink }) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li className={styles.wrapper}>
            <ImageTag 
                src={image ? image : ''} 
                className={image ? styles.image : styles.imageNone} 
                alt={name} />
            <div>
                <Title>{name}</Title>
                <p className={styles.description}>{description}</p>
                <Button
                    href={twitterLink}
                >Visit twitter account</Button>
            </div>
        </li>   
    ) 
};


ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    twitterLink: PropTypes.string
}

ListItem.defaultProps = {
    image: null,
    twitterLink: 'https://twitter.com/'
}

export default ListItem;