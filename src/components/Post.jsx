import React from 'react';
import styles from './Post.module.css';

const Post = ({ post, uniqueTags, title }) => {
  const getImage = (image) => {
    return image || 'https://via.placeholder.com/600x400'; // Immagine di placeholder
  };
  
  const getColor = (tag) => {
    const colors = ['green', 'pink', 'blue', 'orange'];
    return colors[uniqueTags.indexOf(tag) % colors.length]
  }
  return (
    <div className={styles.post}>
      <img src={getImage(post.image)}alt={title} className={styles.postImage} />
      <div className={styles.postContent}>
        <h2>{post.title}</h2>
        {post.tags.map((tag) => (
          <span key={tag} style={{ backgroundColor: getColor(tag) }}>
            {tag}
          </span>))}
        <p>{post.content}</p>
        <button className={styles.readMoreButton}>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
};

export default Post;