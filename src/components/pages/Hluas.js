import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';
import './Hluas.css';

export default function Hluas() {
  return (
    <div className='hluas'>
      <secion className='hluas-container'>
         <figure className='hluas-image'>
            <img className='main-img' src='https://uploads-ssl.webflow.com/61f3a8ab34a4598782349a76/61f4351cb2b692d6246fa46d_20210401_Hloov_Technology_Featured%20Image_2560x1440.jpg' alt='Hluas'/>
            <figcaption>
               <h2 class="headline">Empowering <br/>the Future!</h2>
               <p class="main-slide-description">Hloov Hluas - A global innovation platform to connect, collaborate, and create – <br/>together!</p>
               <div class="slide-button">
                  <Button buttonStyle='btn--outline'>Click Here</Button>
               </div> 
            </figcaption>
          </figure>
      </secion>  
      <secion className='hluas-container-1'>
        <div className='img-content-2'> 
          <div className='img-title'>Hloov Hluas</div>
          <div className='img-heading'>Our world is <br/>changing fast!</div>
          <div className='img-content'>Urbanization is increasing day by day,<br/> technology is changing everything we do,<br/> environmental pressures are reaching to the <br/> alarming levels, and tensions in the society are <br/>rising almost in every part of this world. In this <br/>rapidly changing world, the worst impact of <br/>global warming is on GenZ and generations <br/>following them.</div>
        </div>
        <img className='img-h2' src='images/img-h2.jpg' alt='Hluas'/>
      </secion>
      <secion className='hluas-container-2'>
        <div className='img-content-3'> 
          <div className='img-h3-title'>Hloov Hluas</div>
          <div className='img-h3-heading'>Future of work<br/> is here!</div>
          <div className='img-h3-content'>AI and automation will disrupt 85 million jobs by 2025 and create 97 million new opportunities with machines and humans working together. But are these young professionals equipped enough to enter "The Future Workplace"?</div>
        </div>
        <img className='img-h2' src='images/img-h3.jpg' alt='Hluas'/>
      </secion>
      <secion className='hluas-container-3'>
        <div className='card-title'>Connect, Collaborate and Create – <br/>Together!</div>
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
    </secion>
    <secion className='hluas-container-1'>
      <div className='img-content-2'> 
         <div className='img-h4-title'>Hloov Hluas</div>
         <div className='img-h4-heading'>Hloov Research</div>
         <div className='img-content'>Hloov Research aims to endure leading edge research and knowledge exchange to disrupt, innovate and reform the practices in the built environment for an energy efficient and better tomorrow.</div>
      </div>
      <img className='img-h2' src='images/img-h4.jpg' alt='Hluas'/>
    </secion>
    <secion className='hluas-container-3'>
        <div className='card-title'>Initiatives</div>
        <p className='card-title1'>Hloov Hluas will empower the future by providing a holistic platform to the young professionals from different geographies to <br/>come together and solve the problems of built environment through advanced research, tourneys and technology innovation.</p>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
        <CardItem
           src='/images/img-4.jpg'
           text='A platform for the Digital Natives to explore thepath uncharted and futuristic aspects of built environment from multidisciplinary parameters and facilitate innovation.'
           label='Fellowship'
        />
        <CardItem
           src='/images/img-5.jpg'
           text='A perfect fusion of Industry Experience and Technology Skills that provide a life-changing opportunity for young professionals to gain exposure and real-world work experience.'
           label='Internship'
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
    </secion>
    <secion className='hluas-container-5'>
        <div className='img-content-2'> 
            <div className='img-h5-title'> Hloov Internship Program 2022</div>
            <div className='img-h5-heading'>Reimagine Your Tomorrow with<br/>a perfect fusion of Industry <br/>Experience and Technology <br/>Skills.</div>
            <div class='h5-button'>
              <Button buttonStyle='btn--outline'>LEARN MORE</Button>
            </div>
        </div>
        <img className='img-h5' src='images/img-h5.jpg' alt='Hluas'/>
      </secion>
  </div>
 
  );
}
