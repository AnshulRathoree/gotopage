import React, { useEffect, useState } from 'react';
import '../assets/css/Blog.css'; 

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Building Futuristic UIs', date: 'Oct 10, 2023', excerpt: 'Learn how to craft stunning futuristic user interfaces using React and modern libraries.' },
    { title: 'Mastering React Animations', date: 'Sep 25, 2023', excerpt: 'Unlock the secrets of React animations and create immersive web experiences.' },
    { title: 'CSS Grid vs Flexbox', date: 'Sep 15, 2023', excerpt: 'Explore the ultimate showdown between CSS Grid and Flexbox with practical examples.' },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.blog-post');
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight * 0.85) {
          card.classList.add('animate');
        }
      });
    };
  
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="blog-page">
      <h1 className="page-title">My Blog</h1>
      <section className="blog-posts">
        {posts.map((post, index) => (
          <article key={index} className="blog-post">
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
