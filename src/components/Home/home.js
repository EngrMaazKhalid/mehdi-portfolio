import React from 'react'
import classes from './home.module.css'
import {motion} from 'framer-motion'
const Home = ()=>{

    return(
    <motion.div id='home' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{ duration: 0.2}}}>
       
        <div className={classes['tab-content']}>
        <div className={classes['tab-pane']}>
        <div className={classes['container']}> 
        <div className={classes['blue-shape']} />
        <div className={classes['home-main']}> 
     
        <div className={classes['dp-img']} /> 
        <div className={classes['descp-div']}> 
        <div className={classes['descp-part']}>
            <div className={classes['small-dp']} />
            <h1 className={classes['main-heading']}>
            &#8722;
              I’m Muhammad Mehdi
		 <br /><span>Data Scientist</span>
            </h1>
        <p className={classes['para']}> As a software engineering student with a passion for data science, I have expertise in ML, AI, and CV, allowing me to develop cutting-edge solutions using data. Proficient in Python, I thrive in complex programming challenges to create innovative solutions. My motivation and dedication make me a driven professional in the field of data science.</p>
        {/* I am a software engineering student with a focus on front-end web development. I have a strong understanding of HTML, CSS, JavaScript, MaterialUI and React.js and have been working on several projects that showcase my skills. I am always eager to take on new projects and challenges, and I am confident that my skills and experience make me an excellent fit for any front-end web development project. I hope you find my portfolio website informative and engaging, and I look forward to hearing from you about any potential projects you may have. */}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </motion.div>)
}

export default Home