import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Post from './components/Post.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css';
import { posts } from './data/posts.js';

const App = () => {
  const [uniqueTags, setUniqueTags] = useState([]);

  // Funzione per calcolare i tag unici
  const getUniqueTags = (posts) => {
    console.log(posts);
    
    const allTags = posts.flatMap((post) => post.tags);
    console.log(allTags);
    
    const uniqueTags = [...new Set(allTags)];
    console.log(uniqueTags);
    
    setUniqueTags(uniqueTags);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        {posts
            .filter((post) => post.published)
            .map((post) => (
              <Post key={post.id} post={post} uniqueTags={uniqueTags.toString(' ')}
              title= {post.title}
              content= {post.content}
              image= {post.image}  
               />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
