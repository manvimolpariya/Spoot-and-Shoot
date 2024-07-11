import React from 'react'
import ngo1 from '/ngo1.jpg'
import security from '/security.jpg'
import security1 from '/security1.jpg'
import service from '/contact-image-1.jpg'
import ngo3 from '/ngo3.jpg'
import service1 from '/service1.jpg'
import about from '/about.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Footer from '../footer/Footer'
import './about.css'
const About = () => {
  const transition = {type : 'spring', duration : 0.3}
  const mobile = window.innerWidth<=768 ? true : false;
  return ( 
    <>
    <div className='about-container1'>
      <h1>About Us</h1>
    </div>
    <div className='about-ngo-container'>
      <div className='about-ngo-box'>
        <div className='about-ngo-img'>
       <img src={ngo1} alt="" />
        </div>
        <div className='about-ngo-content'>
          <h1>Connected with NGO</h1>
          <p>By Providing informative and engaging content 
            that raises awareness about child trafficking
            and showcases the valuable work of NGOs, you can effectively Connected
            your website with organisations dedicated to combating this
            issue and mobilize support for the cause.
          </p>
        <Link to='/login'><button className='about-ngo-btn'>Get Started</button></Link>
        </div>
      </div>
     
      <div className='about-ngo-box'>
        <div className='about-ngo-img'>
       <img src={ngo3} alt="" />   
        </div>
       <div className='about-ngo-content'>
       <h1>Connected with Police</h1>
          <p>By working closely with law enforcement
            agencies, your website can play a crucial
            role in combating child trafficking, supporting victims,
            and holding perpetrators accountable for their
            crimes.this collaborative approach leverages the strengths
            .</p>

            <Link to='/login'> <button className='about-ngo-btn'>Get Started</button></Link>
       </div>
      </div>
    </div>
    <div className='about-app-method'>
      <h1 className='highlights'>Highlights</h1>
      <p className='highlights-p'>Creating a platform to combat child trafficking and aid in locating missing children is a commendable initiative.</p>
       <div className='about-app-method-container'>
        <div className='about-app-method-box'>
        <div>
        <img src={about} alt="" />
        </div>
        <div className='about-app-method-content'>
        <h1>User Signup/Login</h1>
          <p>Users should register on your
             website or log in if they are 
             already registered. This helps 
             in tracking the users and 
             their activities on the
              platform.</p>
              <Link to='/login' className='link-card'>Get Started</Link>
        </div>
        </div>
        <div className='about-app-method-box'>
        <div>
        <img src={about} alt="" />
        </div>
        <div className='about-app-method-content'>
          <h1>File Missing Report</h1>
          <p>Provide a form or interface
          where users can file a missing
          report for a child. This form
          should collect essential information
           about the missing child.</p>
           <Link to='/MissingReport' className='link-card'>Get Started</Link>
        </div>
        </div>
        <div className='about-app-method-box'>
        <div>
        <img src={about} alt="" />
        </div>
        <div className='about-app-method-content'>
          <h1>Image of Suspicious Encounters</h1>
          <p>Enable users to upload images of 
            suspicious encounters with children 
            they believe might be victims of trafficking.</p>
            <Link to='/SpotAndShoot' className='link-card'>Get Started</Link>
        </div>
        </div>
        <div className='about-app-method-box'>
        <div>
        <img src={about} alt="" />
        </div>
        <div className='about-app-method-content'>
          <h1>Manual Verification</h1>
          <p>Have a team of moderators or 
            administrators who manually verify 
            potential matches flagged by 
            the automated system. </p>
            <Link to='/login' className='link-card'>Get Started</Link>
        </div>
        </div>
        <div className='about-app-method-box'>
        <div>
        <img src={about} alt="" />
        </div>
        <div className='about-app-method-content'>
          <h1>Notification to Authorities and Families</h1>
          <p>If a match is confirmed, automatically notify the authorities and the families of the missing child about the potential sighting. Include details such as the location and time of the sighting for further investigation. </p>
          <Link to='/login' className='link-card'>Get Started</Link>
        </div>
        </div>
        <div className='about-app-method-box'>
        <div>
        <img src={about} alt="" />
        </div>
        <div className='about-app-method-content'
        >
          <h1>Feedback Mechanism</h1>
          <p>Allow users to provide feedback on the effectiveness of the platform and any suggestions for improvement. This helps in continuously refining the system to better serve its purpose. </p>
          <Link to='/login' className='link-card'>Get Started</Link>
        </div>
        </div>
       </div>
    </div>
    <div className='about_Details'>
      <div className='about_details_box'>
     
          <motion.div className='about_details_box_1'
           initial={{scale : 0, opacity : 0}}
          whileInView={{scale : 1, opacity : 1}}
          transition={{transition, type :'tween', delay : 0.1}}>
         
           <h2>Why choose us.</h2>
           <p>Our team is comprised of passionate individuals who are committed to leveraging technology and collaboration to make a positive impact. We come from diverse backgrounds, but we share a common goal: to protect children and prevent them from falling victim to trafficking.</p>
          </motion.div>
          <div className='about_details_box_2'>
            <motion.img 
             initial={{x: "100%", opacity : 0}}
             whileInView={{x: '0', opacity : 1}}
             transition={{transition, type :'tween', delay : 0.3}}
            src={security} alt="" />
          </div>
      </div>
      <div className='about_details_box_1'>
          <motion.div className='about_details_box_1_1'
           initial={{scale : 0, opacity : 0}}
           whileInView={{scale : 1, opacity : 1}}
           transition={{transition, type :'tween', delay : 0.1}}>
           <h2>Why choose us.</h2>
           <p>Through our platform, users can file missing reports for children who have disappeared, providing crucial information that can aid in their recovery. Additionally, individuals who encounter suspicious situations, such as spotting a child at a traffic signal who may be a victim of trafficking, can use our platform to report their concerns and potentially help rescue a child in danger.</p>
          </motion.div>
          <motion.div className='about_details_box_2_1'
           initial={{x: "-100%", opacity : 0}}
           whileInView={{x: '0', opacity : 1}}
           transition={{transition, type :'tween', delay : 0.3}}>
            <img src={security1} alt="" />
          </motion.div>
      </div>
      <div className='about_details_box_2'>
          <motion.div className='about_details_box_1_2'
           initial={{scale : 0, opacity : 0}}
           whileInView={{scale : 1, opacity : 1}}
           transition={{transition, type :'tween', delay : 0.1}}>
          
           <h2>Why choose us.</h2>
           <p>We understand the importance of privacy and security when dealing with sensitive information about missing children and trafficking incidents. That's why we have implemented stringent measures to safeguard the data entrusted to us by our users.</p>
          </motion.div>
          <div className='about_details_box_2_2'>
            <motion.img src={service} alt=""
             initial={{x: "100%", opacity : 0}}
             whileInView={{x: '0', opacity : 1}}
             transition={{transition, type :'tween', delay : 0.3}}
            />
          </div>
      </div>
      <div className='about_details_box_1'>
          <motion.div className='about_details_box_1_1'
          initial={{scale : 0, opacity : 0}}
          whileInView={{scale : 1, opacity : 1}}
          transition={{transition, type :'tween', delay : 0.3}}>
           <h2>Why choose us.</h2>
           <p>Education and awareness are also central to our mission. We provide resources and information to help people recognize the signs of child trafficking and understand how they can play a role in prevention and intervention efforts.</p>
          </motion.div>
          <div className='about_details_box_2_1'>
            <motion.img src={service1} alt="" 
            initial={{x: "-100%", opacity : 0}}
            whileInView={{x: '0', opacity : 1}}
            transition={{transition, type :'tween', delay : 0.3}}/>
          </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About
