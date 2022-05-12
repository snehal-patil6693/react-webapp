import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='card-title'>Connect, Collaborate and Create – Together!</div>
      <p className='card-title1'>Hloov Hluas aims to provide opportunities to perform research, exercise innovation and creativity, gain exposure and share <br/>knowledge on the aspects related to the built environment, thereby empowering the future.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src= '/images/img-1.jpg'

              text='Create a global platform where young professionals and institutions from diverse backgrounds can connect through various initiatives.'
              label='Connect'
              
            />
            <CardItem
              src= '/images/img-2.jpg'
              text='Various academic institutions and young professionals can collaborate to outline the challenges being faced by built environment.'
              label='Collaborate'
             
            />
            <CardItem
              src= '/images/img-3.jpg'
              text='Foster advance research and innovation tourneys to solve the challenges of built environment with the help of technological advancements.'
              label='Create'
            
            />
          </ul>
          
        </div>
      </div>
    
    <div className='card-title'>Connect, Collaborate and Create – Together!</div>
    <p className='card-title1'>Hloov Hluas aims to provide opportunities to perform research, exercise innovation and creativity, gain exposure and share <br/>knowledge on the aspects related to the built environment, thereby empowering the future.</p>
    <div className='cards__container'>
      <div className='cards__wrapper'>
      <ul className='cards__items'>

  <CardItem
  src='/images/img-4.jpg'
  text='A platform for the Digital Natives to explore the uncharted and futuristic aspects of built environment from multidisciplinary parameters and facilitate innovation.'
  label='Fellowship'
  path='/services'
/>
<CardItem
  src='/images/img-5.jpg'
  text='A perfect fusion of Industry Experience and Technology Skills that provide a life-changing opportunity for young professionals to gain exposure and real-world work experience.'
  label='Internship'
  path='/products'
/>
<CardItem
  src='/images/img-6.jpg'
  text='Construir is Hloovs innovation contest platform to foster creative thinking and empower digital natives to Ideate, Design, and Create innovation.'
  label='Construir'
  path='/sign-up'
/>
</ul>
</div>
      </div>
    </div>
  );
}

export default Cards;