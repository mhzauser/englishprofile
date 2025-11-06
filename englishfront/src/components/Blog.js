import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookIcon } from './SVGIcon';
import './Blog.css';

const API_URL = 'http://localhost:8000/api/blog/';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      // Handle pagination response
      const postsData = response.data.results || response.data;
      setPosts(Array.isArray(postsData) ? postsData : []);
      setLoading(false);
    } catch (err) {
      setError('Failed to load blog posts');
      setLoading(false);
      console.error(err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const formatContent = (content) => {
    // Convert markdown-style formatting to HTML
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return <strong key={index}>{line.replace(/\*\*/g, '')}</strong>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index}>{line}</p>;
      });
  };

  if (loading) {
    return (
      <div className="blog">
        <div className="blog-header">
          <h1>English Learning Blog</h1>
          <p>Tips, tricks, and insights to help you master English</p>
        </div>
        <div className="blog-container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog">
        <div className="blog-header">
          <h1>English Learning Blog</h1>
          <p>Tips, tricks, and insights to help you master English</p>
        </div>
        <div className="blog-container">
          <div className="error">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="blog">
        <div className="blog-header">
          <div className="blog-header-icon">
            <BookIcon className="header-svg-icon" />
          </div>
          <h1>English Learning Blog</h1>
          <p>Tips, tricks, and insights to help you master English</p>
        </div>

        <div className="blog-container">
          {posts.length === 0 ? (
            <div className="no-posts">
              <div className="no-posts-icon">📝</div>
              <h3>No posts yet</h3>
              <p>Check back soon for amazing English learning content!</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post, index) => (
                <article key={post.id} className="blog-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  {post.image_url ? (
                    <div className="blog-image">
                      <img src={post.image_url} alt={post.title} />
                      <div className="blog-image-overlay"></div>
                    </div>
                  ) : (
                    <div className="blog-image-placeholder">
                      <BookIcon className="placeholder-icon" />
                    </div>
                  )}
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-author">
                        <span className="author-icon">👤</span>
                        {post.author}
                      </span>
                      <span className="blog-date">
                        <span className="date-icon">📅</span>
                        {formatDate(post.created_at)}
                      </span>
                    </div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">
                      {post.content.length > 200
                        ? `${post.content.substring(0, 200)}...`
                        : post.content}
                    </p>
                    <div 
                      className="blog-read-more"
                      onClick={() => handleReadMore(post)}
                    >
                      <span>Read More</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12H19M12 5L19 12L12 19"/>
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div className="blog-modal-overlay" onClick={closeModal}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6L18 18"/>
              </svg>
            </button>
            <div className="modal-header">
              {selectedPost.image_url ? (
                <div className="modal-image">
                  <img src={selectedPost.image_url} alt={selectedPost.title} />
                </div>
              ) : (
                <div className="modal-image-placeholder">
                  <BookIcon className="modal-placeholder-icon" />
                </div>
              )}
              <div className="modal-meta">
                <span className="modal-author">
                  <span className="author-icon">👤</span>
                  {selectedPost.author}
                </span>
                <span className="modal-date">
                  <span className="date-icon">📅</span>
                  {formatDate(selectedPost.created_at)}
                </span>
              </div>
              <h2 className="modal-title">{selectedPost.title}</h2>
            </div>
            <div className="modal-content">
              <div className="modal-text">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') {
                    return <br key={index} />;
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="modal-subtitle">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.match(/^\d+\.\s\*\*/)) {
                    const parts = paragraph.split(/\*\*/);
                    return (
                      <p key={index} className="modal-list-item">
                        <strong>{parts[1]}</strong>
                        {parts.slice(2).join('')}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="modal-paragraph">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
