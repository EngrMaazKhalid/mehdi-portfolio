
import React, { useState } from 'react'
import classes from './portfolio.module.css'
import {motion} from 'framer-motion'
import ModalArea from './ModalArea';
const Portfolio = ()=>{
    const data =[
        { id: '01',
        name:"Email Spam/Non-Spam filter",
        img:require('./spam.png'),
        src:`'Python(sklearn, statistics)
        This project uses sklearn and machine learning techniques to train a spam/ham classification model using a
        dataset of emails. The model achieved an impressive accuracy score of 97%, distinguishing between spam
        and non-spam emails effectively.'`,
        link:'#'},
        { id: '02',
        name:"Attendance System using FaceRecogniton",
        img:require('./face-recognition.png'),
        src:`'Python(cv2, face_recognition)
        This project is an automated attendance marking system that utilizes computer vision and machine
        learning. It detects faces using Python, cv2, and face_recognition libraries, and automatically updates an
        Excel file with attendance information when a face is detected in front of a camera.'`,
        link:'#'},
        { id: '03',
        name:"Cricket DRS System",
        img:require('./drs.jpg'),
        src:`'Python (tkinter, cv2, PIL, cvzone, scipy)
        The project enables the 3rd umpire to carefully assess specific aspects like boundaries, catches, and LBW
        calls. By analyzing the ball's trajectory frame by frame, the system helps the 3rd umpire make accurate
        decisions, ensuring fairness in the game. Through detailed review and analysis, the 3rd umpire gains a
        comprehensive understanding, leading to well-informed judgments.'`,
        link:'https://github.com/m-mehdi72/CricketDRS'
    },
        { id: '04',
        name:"Speech Enhancement",
        img:require('./Voice.jpg'),
        src:`'Python (tensorflow, scipy, sklearn, matplotlib, pystoi)
        The Speech Enhancement project utilizes TensorFlow (tf) and scikit-learn (sklearn) to train a CNN sequential
        model. It loads a WAV file, converts it to a spectrogram, removes noisy spectra, and reconstructs a clean
        audio signal. The project aims to enhance speech quality by effectively reducing noise and improving the
        clarity of the output.'`,
        link:'https://github.com/m-mehdi72/SpeechEnhancement'},
        { id: '05',
        name:"Automated Attendance System WebApp",
        img:require('./face.avif'),
        src:`'Django, HTML, CSS, Bootstrap, Python(OpenCV, face_recognition), sqlite
        The Face Recognition Attendance System, built with Django and SQLite, employs face recognition technology
        to mark attendance. It allows the admin to add, remove, and monitor students, while also providing realtime camera footage. This project streamlines attendance management and offers enhanced control
        through accurate face recognition and convenient database operations'`,
        link:'https://github.com/m-mehdi72/FaceRecognitionAttendanceSystem'},
         ]
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

      const [tempdata, setTempData] = useState([]);


      const getData =(id, name, src, img, link)=>{
        let temp= [id, name, src, img, link];
        console.log(temp)
        setTempData(user =>[1, ...temp]);

        return handleOpen();
      }
   

    

    return(<motion.div id='portfolio' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{ duration: 0.2}}}>
          <div className={classes['Title-sec']}>
            <h1 className={classes['Title-sec-h1']}> My Portfolio</h1>
            <span className={classes['Title-bg']}>Projects</span>
            </div>
            <section className={classes['main-section']}>
            <div className={classes['content']}>
                <div>
                    <ul className={classes['port-ul']}>
                    {data.map(user =>(
                        <li className={classes['port-li']}  key={user.id} onClick={()=>getData(user.id, user.name, user.img, user.src, user.link)} >
                            <figure className={classes['port-figure']} >
                           
                                <img className={classes['port-img']} src={user.img} />
                                <figcaption  className={classes['caption']}>
                                    <h4>{user.name}</h4>
                                
                                </figcaption>
                            </figure>
                        </li>
                        
                    ))}
                    </ul>
                </div>
            </div>
            </section>
            <ModalArea open={open} name={tempdata[2]} src={tempdata[4]} img={tempdata[3]} link={tempdata[5]} onClose={handleClose}  />
        </motion.div>
   )
}

export default Portfolio;
