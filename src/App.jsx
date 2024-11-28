import React from 'react';
import Header from './components/Header.jsx';
import Post from './components/Post.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Post
          title="Titolo del Post"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolor fugit deserunt recusandae nemo. Quis, quia! Cupiditate, quidem dolor, inventore repellat in amet voluptas iusto nostrum ipsam vero adipisci dignissimos, temporibus sit iste impedit ducimus."
          image="https://via.placeholder.com/600x400" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
