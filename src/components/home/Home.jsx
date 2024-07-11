import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './home.css'
import { Link } from 'react-router-dom'
import service from  '/service.jpg'
import hero from '/hero.jpeg'
import contact_image from '/contact-image.jpg'
import contact1 from '/contact-image-1.jpg'
import Footer from '../footer/Footer'
import rightArrow from '/rightArrow.png'
import leftArrow from "/leftArrow.png"
import { sendContactMessage } from '../../api/internal'
import {testimonialsData} from './testimonialsData'
const tLenght=testimonialsData.length;
const transition = {type : 'spring', duration : 0.3}
  const mobile = window.innerWidth<=768 ? true : false;
const Home = () => {
  const [selected, setSelected] = useState(0);
  const [ name, setSendContactName] = useState();
  const [ contact, setSendContactNumber] = useState();
  const [ gmail, setSendContactEmail] = useState();

const  contactMessageSend = async(e) =>{
  e.preventDefault();
  const data ={
   name,
   gmail,
   contact
  }
  const response = await sendContactMessage(data);
  if(response.status === 200){
    setmessagestatus(true);
    setTimeout(()=>{setmessagestatus(false)}, 5000)
  }
}
  return (
  <>
  
    <div  className='container1'>
   <div className='hero-section'>  
        <div className='contains-heading'>
          <div> 
          <motion.h1
           initial={{x: "-100%"}}
           whileInView={{x: '0'}}
           transition={{transition, type :'tween', delay : 0.3}}
          > Unite Against Child Trafficking</motion.h1> 
         <motion.h1
          initial={{x: "-100%"}}
          whileInView={{x: '0'}}
          transition={{transition, type :'tween', delay : 0.5}}
         >
          Empower Hope, Restore Lives</motion.h1>  
          </div>
        <motion.div className='contains-p'
         initial={{opacity: "0.01", scale : 0}}
         whileInView={{opacity: '1', scale : 1}}
         transition={{transition, type :'tween', delay : 0.5}}
        >
        <p>Every day, children around the world fall victim to this horrific practice, 
            robbed </p>
            <p> of their innocence and basic human rights.
            Join us in the fight to end child trafficking.</p>
        </motion.div>
           <motion.div className='btn-container'
           initial={{x: "-100%"}}
           whileInView={{x: '0'}}
           transition={{transition, type :'tween', delay : 0.6}}
           >
          <Link to='/uploadAndComment'><button className="hero-btn">Rise Report</button></Link>  
            </motion.div>
        </div>
        <div className='hero-image'>
          <img src={hero} alt=""/>
        </div>
   </div>
   </div>
   <div className='about'>
    <div className='about-contain'> 
   <h1>Awarness-------</h1>
    <p>
    Welcome to our platform dedicated to raising awareness 
    and combating the insidious crime of child trafficking. Every day, 
    children around the world fall victim to this horrific practice, 
    robbed of their innocence and basic human rights. Our mission is to
     shed light on this issue, provide resources for prevention, and support survivors 
     on their path to healing and justice.
    Through education, advocacy, and community engagement, we strive to create a world
     where every child is safe from exploitation and trafficking. Explore our website 
     to learn about the signs of child trafficking, understand the root causes, and discover 
     ways you can make a difference.
     </p>
     <motion.div
     initial={{opacity : '0.01' , scale : '0'}}
     whileInView={{opacity : '1' , scale : '1'}}
     transition={{transition, type :'tween', delay : 0.2}}
     ><Link to='/About'><button className='about-btn'>Read More</button></Link></motion.div>
    </div>
    <div className='about-image'>
    <motion.div className='about-image-effect'
    initial={{opacity: "0.01", scale : '0'}}
    whileInView={{opacity : '1', scale : "1"}}
    transition={{transition, type :'tween', delay : 0.2}}
    ></motion.div>
    <motion.div className='about-image-effect1'
    initial={{left : "330px", scale : 0}}
    whileInView={{left : "155px" , scale : 1}}
    transition={{transition, type :'tween', delay : 0.4}}
    ></motion.div>
    <motion.div className='about-image-effect2'
     initial={{left : "320px", scale : 0}}
     whileInView={{left : "105px" , scale : 1}}
     transition={{transition, type :'tween', delay : 0.3}}
    ></motion.div>
      <motion.img src="https://delhipostnews.com/wp-content/uploads/2020/02/child-begging-Slider-.jpg"
      initial={{x : "320px", scale : 0}}
      whileInView={{x : "0" , scale : 1}}
      transition={{transition, type :'tween', delay : 0.4}}
      className="about-img" alt="" />
    </div>
   </div>
   <div   className='service'>
    <motion.div className='service-description'
     initial={{x : "-100%", opacity :0.01}}
     whileInView={{x : "0", opacity : 1}}
     transition={{transition, type :'tween', delay : 0.2}}
    >
     <h1>Our Partnership with NGOs and police</h1>
      <p className='first-para'>
        Our approach hinges on collaboration with 
        reputable Non-Governmental Organizations (NGOs) 
        specializing in anti-trafficking initiatives. 
        These partnerships are fundamental to our mission,
         as they allow us to tap into their expertise, 
         resources, and networks, amplifying the impact
          of our collective efforts.
      </p>
      <p className='second-para'>
        
Through our platform, we facilitate the
 connection between individuals, organizations,
  and NGOs dedicated to combating child trafficking. 
  Users can access a directory of trusted NGOs working
   in the field, providing a gateway for those seeking 
   to contribute resources, volunteer, or seek assistance.
      </p>
    </motion.div>
    <div className='img-service'>
    <img className="service-img" src={service} alt="" />
    </div>
    <div className='service-steps'>
      <motion.div 
      className='service-box-one'
      initial={{opacity : '0.01' , scale : '0'}}
      whileInView={{opacity : '1' , scale : '1'}}
      transition={{transition, type :'tween', delay : 0.2}}
  >
        <h1>step 1</h1>
        <h2>Observation</h2>
        <p>
        Users who notice a child begging at traffic 
        lights and suspect they may be a 
        victim of trafficking can discreetly take a photo.
        </p>
      </motion.div>
      <motion.div className='service-box-one'
   initial={{opacity : '0.01' , scale : '0'}}
   whileInView={{opacity : '1' , scale : '1'}}
   transition={{transition, type :'tween', delay : 0.4}}
      >
      <h1>step 2</h1>
      <h2>Submission</h2>
      <p>
      They can submit the photo through our website or mobile
       app along with any relevant details or observations. 
      </p>
      </motion.div>
      <motion.div 
      className='service-box-one'
      initial={{opacity : '0.01' , scale : '0'}}
      whileInView={{opacity : '1' , scale : '1'}}
      transition={{transition, type :'tween', delay : 0.5}}
      >
      <h1>step 3</h1>
      <h2>Response</h2>
      <p>If the child is identified as missing or at risk,appropriate 
        measures are taken to ensure their safety and well-being.
        </p>
      </motion.div>
     
    </div>

   </div>
   <div className='infomation'>
      <div className='info-box'>
        <div className='info-box-img'>
          <div className='info-box-img-1'>
        <i className="fa-solid fa-person-circle-question"></i>
          </div>
        </div>
        <div className='info-box-discription'>
          <h1>Rise Report</h1>
          <p className='linked'>file report of missing person with correct and accurate information , like 
             <span> Basic Information</span> , 
             <span>Circumstances of Disappearence</span> 
          </p>
             <Link to='/MissingReport' className='info-discription-linked'>
               <p>Report <i className="fa-solid fa-arrow-right"></i></p></Link>
        </div>
      </div>
      <div className='info-box second-box'>
      <div className='info-box-img'>
          <div className='info-box-img-1'>
        <i className="fa-solid fa-person-circle-question"></i>
          </div>
        </div>
        <div className='info-box-discription'>
          <h1>Sotries</h1>
          <p className='linked'>Check your report Status our team will focused on resolving or finding person in 24 hours</p>
             <Link to='/Enquiry' className='info-discription-linked'> <p>Story <i className="fa-solid fa-arrow-right"></i></p></Link>
        </div>
      </div>
      <div className='info-box'>
        <div className='info-box-img'>
          <div className='info-box-img-1'>
        <i className="fa-solid fa-person-circle-question"></i>
          </div>
        </div>
        <div className='info-box-discription'>
          <h1>Report Suspicious Activity</h1>
          <p className='linked'>Help Combat Child Trafficking by Uploading Photos of Suspected Individuals on Traffic Lights
          </p>
             <Link to='/SpotAndShoot' className='info-discription-linked'> <p>spot shoot<i className="fa-solid fa-arrow-right"></i></p></Link>
        </div>
      </div>
   </div>
   <div className='contact'>
    <div className='contact-image'>
      <div className='contact-image-container'>
      <div className='contact-image-1'>
          <img src={contact_image} alt=""  />
      </div> 
       <div className='contact-image-2'>
      <img src={contact1} alt="" />
      </div>
      </div>
    </div>
    <div className='contact-details'>
      
      <form onSubmit={contactMessageSend}>
      <motion.h1
       initial={{opacity : '0.01' , scale : '0'}}
       whileInView={{opacity : '1' , scale : '1'}}
       transition={{transition, type :'tween', delay : 0.2}}
      >contact us</motion.h1>
      <motion.div className='contact-form'
        initial={{opacity : '0.01' , scale : '0'}}
        whileInView={{opacity : '1' , scale : '1'}}
        transition={{transition, type :'tween', delay : 0.2}}
      >
         <input 
         type="text" 
         name="" 
         id=""  
         placeholder='name'
         onChange={(e) => setSendContactName(e.target.value)}/>
         <input 
         type="email"
        name="" 
        id=""  
        placeholder='email'
        onChange={(e) => setSendContactEmail(e.target.value)}
        />
         <input type="number"
          placeholder='number'
          onChange={(e) => setSendContactNumber(e.target.value)}
          />
      <div className='contact-btn'><button type="submit">submit <i className="fa-solid fa-arrow-right"></i></button></div>

      </motion.div>
      </form>
    </div> 
   </div>
   <div className='Testimonial'>
   <div className='testimonial' id='testimonials'>
          <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span
                key={selected}
                initial={{opacity: 0, x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>{" "}
                    - {testimonialsData[selected].status}
                </span>
          </div>
          <div className="right-t">
            <motion.div
            initial={{opacity: 0, x:-100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1, x:0}}></motion.div>
             <motion.div
            initial={{opacity: 0, x: 100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1, x:0}}></motion.div>
                  <motion.img 
                  key={selected}
                  initial={{opacity:0,x:100}}
                  animate={{opacity:1,x:0}}
                  exit={{opacity:0,x:-100}}
                  transition={transition}
                  
                  src={testimonialsData[selected].image} alt="" />
                  <div className="arrows">
                    <img 
                    onClick={()=>{
                        selected === 0 ? setSelected(tLenght-1) : setSelected((prev)=>prev-1);
                    }}
                    src={leftArrow} alt="" />
                    <img 
                    onClick={()=>{
                        selected === (tLenght-1) ? setSelected(0) : setSelected((prev)=>prev+1);
                    }} src={rightArrow} alt="" />
                  </div>
          </div>
      </div>
  </div>
  
   <Footer/>
  </>
  )
}

export default Home
