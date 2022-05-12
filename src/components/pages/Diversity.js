import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';
import './Diversity.css';

export default function Diversity() {
  return (
    <div className='hluas'>
      <secion className='hluas-container'>
         <figure className='hluas-image'>
            <img className='main-img' src='https://uploads-ssl.webflow.com/61f3a8ab34a4598782349a76/620a79e9732426066fcb2ea0__5555test.jpg' alt='Hluas'/>
            <figcaption>
               <h2 class="headline">We <br/>Celebrate<br/>diverse<br/>Perspectives</h2>
               <p class="main-slide-description">There is power in the collective, and we believe that by amplifying diverse<br/> perspectives and voices, we can create a better world for everyone.</p>
              {/*  <div class="slide-button">
                  <Button buttonStyle='btn--outline'>Click Here</Button>
               </div> */} 
            </figcaption>
          </figure>
      </secion>  
      <secion className='hluas-container-1'>
        <div className='img-content-2'> 
          <div className='img-title'>Our</div>
          <div className='img-heading'>Nucleus</div>
          <div className='img-content'>We recognize the power of diversity and <br/>inclusion in creating an environment where <br/>everyone brings their best selves to work and <br/>contributes in a meaningful way. Diversity and <br/>inclusion are at the nucleus of our Values.</div>
        </div>
        <img className='img-h2' src='images/img-d1.jpg' alt='Hluas'/>
      </secion>
      <secion className='hluas-container-2'>
        <div className='img-content-3'> 
          <div className='img-h3-title'>Diversity</div>
          <div className='img-h3-heading'>Drives<br/>Innovation</div>
          <div className='img-h3-content'>Our diverse backgrounds allow us to approach problems with fresh perspectives and empathy for others. We embrace differences of thought, or experience, to create unique solutions together!</div>
        </div>
        <img className='img-h2' src='images/img-d2.jpg' alt='Hluas'/>
      </secion>
      <secion className='hluas-container-5'>
        <div className='img-content-2'> 
            <div className='img-h5-title'>Proudly Diverse & Inclusive</div>
            <div className='img-h5-heading'>We've made it our mission to create an inclusive work environment where people with diverse perspectives and voices can thrive and our numbers speak for themselves.</div>
           
        </div>
        <img className='img-h5' src='images/img-d3.jpg' alt='Hluas'/>
      </secion>
      
    <secion className='hluas-container-2'>
        <div className='img-content-3'> 
          <div className='img-h6-title'>Our Three T's</div>
          <div className='img-h6-heading'>Trust,<br/> Transparency,<br/> & Teamwork.</div>
          <div className='img-h3-content'>We seek collaboration across boundaries and bring out the best of everyone we work with to achieve our mission together while promoting trust, transparency, and teamwork.</div>
        </div>
        <img className='img-h2' src='images/img-d4.jpg' alt='Hluas'/>
      </secion>
    <secion className='hluas-container-5'>
        <div className='img-content-2'> 
            <div className='img-h5-title'> Let's Make It Better</div>
            <div className='img-h5-heading'>Learn more about how you can become part of something bigger than yourself with Hloov!</div>
            <div class='h5-button'>
              <Button buttonStyle='btn--outline'>EXPLORE OPPORTUNITIES</Button>
            </div>
        </div>
        <img className='img-h5' src='images/img-d5.jpg' alt='Hluas'/>
      </secion>
      <secion className='hluas-container-3'>
        <div className='card-title'>Hloov Values</div>
        <p className='card-title1'>Like the foundation of any built environment asset, our core values provide the strong groundwork for our actions, decisions, and behaviors and point the needle of our compass to deliver our mission.</p>
        <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <CardItem
            src= '/images/img-dc1.jpg'

            text='We value the right to act, speak, or express ourselves as we want without impediment and unfettered.'
            label='Freedom'
            
          />
          <CardItem
            src= '/images/img-dc2.jpg'
            text='We celebrate diverse perspectives and those who take pride in their unique identity. – #BeYou@Hloov'
            label='Diversity'
           
          />
          <CardItem
            src= '/images/img-dc3.jpg'
            text='We do what we love to do and pour heart, soul, and a little moxie into everything we do to empower people.'
            label='Passion'
          
          />
          <CardItem
            src= '/images/img-dc4.jpg'

            text='We’re inquisitive every day, we harness the power of our ideas to inspire curiosity and transform lives.'
            label='Innovation'
            
          />
          <CardItem
            src= '/images/img-dc5.jpg'
            text='Integrity is our cornerstone, we conduct business fairly and honestly with our employees, clients, & investors.'
            label='Integrity'
           
          />
          <CardItem
            src= '/images/img-dc6.jpg'
            text='We believe in every person’s intrinsic worth and treat everyone with courtesy and respect.'
            label='Respect'
          
          />
          </ul>
        
        </div>
      </div>
    </secion>
  </div>
 
  );
}


