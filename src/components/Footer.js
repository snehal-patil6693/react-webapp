import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div className='footer-container'>
        <section className='footer-1'>
      <div className='footer-subscription'>
        <p className='footer-subscription-heading1'>
          Follow Us
          </p>
          <p className='footer-subscription-heading2'>  
        <h1>Hloov is Social</h1>
        </p>
        <p className='footer-subscription-text'>
        <div class='social-icons-1'>
           <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>  
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
           
           
            </div>
        </p>
       
      </div>
      </section>
      <section className='footer-2'>
      <div className='input-areas'>
        <div className='footer2-text'>
        <h5>Subscribe</h5>  
        Stay ahead of the curve with a subscription to<br/> 
        our newsletter. You will get updates on everything<br/> 
        related to the built environment's digital<br/>
        transformation that is shaping our world today!<br/>   
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='jane.doe@example.com'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
          </div>
        </div>
        </section>
      <section className='footer-3'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <p className='footer-link-title'>Hloov</p>
            <Link to='/'>How it works</Link>
            <Link to='/'>Who we are</Link>
            <Link to='/hluas'>Hloov Hluas</Link>
            <Link to='/'>Hloov Tenet</Link>
            <Link to='/diversity'>Diversity</Link>
          </div>
          <div class='footer-link-items'>
          <p className='footer-link-title'>Careers</p>
            <Link to='/'>Professionals</Link>
            <Link to='/'>Students</Link>
            <Link to='/'>Campus</Link>
            <Link to='/'>Search</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <p className='footer-link-title'>Platform</p>
            <Link to='/'>Project Tagwaye</Link>
            <Link to='/'>Project Heart</Link>
            <Link to='/'>Early Access</Link>
            <Link to='/'>Support</Link>
          </div>
          <div class='footer-link-items'>
          <p className='footer-link-title'>Sectors</p>
            <Link to='/'>Build Environment</Link>
            <Link to='/'>Real Estate</Link>
            <Link to='/'>Healthcare</Link>
            <Link to='/'>Hospitality</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <p className='footer-link-title'>Connect</p>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Blogs & Stories</Link>
            <Link to='/'>News & Media</Link>
            <Link to='/'>Hloov Partners</Link>
            <Link to='/'>Investor Relations</Link>
          </div>
          </div>
      </div>
      </section>
      <section className='footer-4'>
      <div class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <Link to='/privacy'>Privacy</Link>
          <Link to='/terms'>Terms</Link>
          <Link to='/trademarks'>Trademarks</Link>
          </div>
          <small class='website-rights'>@ Copyright 2022 Hloov. All rights reserved.</small>
          
          <div class='social-icons-2'>
            <h4>Follow Us</h4>
            <Link
              class='social-icon-link1 twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link1 twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link1 instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link1 youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link1 facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
           
           
            
           
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default footer   