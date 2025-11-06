import React from 'react';
import { Link } from 'react-router-dom';
import { BookIcon, TargetIcon, ChatIcon, StarIcon, ArrowRightIcon } from './SVGIcon';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <CoffeeIcon className="coffee-icon" />
            <span>Professional English Teaching</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Welcome to</span>
            <span className="title-highlight">English Excellence</span>
          </h1>
          <p className="hero-subtitle">
            Transform your English skills with personalized, professional instruction
            designed to help you achieve fluency and confidence
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <ArrowRightIcon className="btn-icon" />
            </Link>
            <Link to="/blog" className="btn btn-secondary">
              Read Blog
              <ArrowRightIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">Experience the difference of professional English instruction</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BookIcon className="feature-icon-svg" />
              </div>
              <h3>Expert Instruction</h3>
              <p>Learn from an experienced English teacher with years of expertise and proven teaching methods</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <TargetIcon className="feature-icon-svg" />
              </div>
              <h3>Personalized Learning</h3>
              <p>Customized lessons tailored to your individual needs, goals, and learning style</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ChatIcon className="feature-icon-svg" />
              </div>
              <h3>Interactive Sessions</h3>
              <p>Engaging conversations and practical exercises designed to improve your fluency naturally</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <StarIcon className="feature-icon-svg" />
              </div>
              <h3>Proven Results</h3>
              <p>Join hundreds of successful students who have achieved their English learning goals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-decoration">
          <div className="cta-wave"></div>
        </div>
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Contact us today and take the first step towards English mastery</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Contact Us Now
            <ArrowRightIcon className="btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Coffee icon component for hero badge
const CoffeeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 1V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 1V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 1V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Homepage;
