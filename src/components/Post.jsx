import React from 'react';
import styles from './Post.module.css';

const Post = ({ title, text, image }) => {
  return (
    <div className={styles.post}>
      <img src={image} alt={title} className={styles.postImage} />
      <div className={styles.postContent}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className={styles.readMoreButton}>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
};

export default Post;