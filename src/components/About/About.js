import React from 'react'
import classes from './About.module.css'
import DownloadIcon from '@mui/icons-material/Download'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion'
// import { CircularProgress } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import School from '@mui/icons-material/School';
const About = () => {

  const data = [
    {
      id: '0',
      name: 'fname:',
      answer: 'Syed',
    }, {
      id: '01', name: 'lname:', answer: 'Muhammad Mehdi Jaffri'
    }, {
      id: '02', name: 'age:', answer: '20'
    }, {
      id: '03', name: 'Nationality:', answer: 'Pakistan'
    },
    { id: '04', name: 'address:', answer: 'Rawalpindi' },
    { id: '05', name: 'freelance:', answer: 'Available' },
    { id: '06', name: 'phone:', answer: '+923150053739' },
    { id: '07', name: 'email:', answer: 'engr.mehdi72@gmail.com' },
    { id: '08', name: 'linkedin:', answer: 'Muhammad Mehdi' },
    { id: '09', name: 'language:', answer: 'English (Fluent), Urdu (Native)' }

  ]



  return (<motion.div id='about'className={classes['about']} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.2 } }}>
    <div className={classes['Title-sec']}>
      <h1 className={classes['Title-sec-h1']}> About ME</h1>
      <span className={classes['Title-bg']}>Resume</span>
    </div>

    <section className={classes['main-section']}>

      <div className={classes['content']}>
        <div className={classes['row1']}>
          <div className={classes['col-div']}>
            <div className={classes['row']}>
              <div className={classes['col-12']}>
                <h3 className={classes['personal']}>personal-infos</h3>
              </div>
              <div className={classes['col-13']}>
                <div className={classes['img-fluid']} />
              </div>
              {/* {data.map(user=>{ */}
              <div className={classes['col-12']}>
                
                  <ul className={classes['about-list']}>
                  
                    <li className={classes['list']} > <span className={classes['title']}>First Name: </span>
                      <span className={classes['answer']}>Syed</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Last Name: </span>
                      <span className={classes['answer']}>Muhammad Mehdi Jaffri</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Age: </span>
                      <span className={classes['answer']}>20</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Nationality: </span>
                      <span className={classes['answer']}>Pakistan</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Address: </span>
                      <span className={classes['answer']}>Rawalpindi</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Fiverr: </span>
                      <span className={classes['answer']}><a href='https://www.fiverr.com/s/aBogv7'>muhammadmehdi72</a></span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Phone: </span>
                      <span className={classes['answer']}>+923150053739</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Email: </span>
                      <span className={classes['answer']}>engr.mehdi72@gmail.com</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>LinkedIn: </span>
                      <span className={classes['answer']}><a href='https://www.linkedin.com/in/muhammad-mehdi-770209247/'>Muhammad Mehdi</a></span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Language: </span>
                      <span className={classes['answer']}>Urdu, English</span> 
                     </li>
                  </ul>

              </div>
              {/* })} */}
              <div className={classes['down-div']}>
                <a className={classes['button']} href={'mehdi-cv.pdf'} download><span className={classes['button-text']}> Download</span>
                  <span className={classes['button-icon']}>
                    <DownloadIcon sx={{ fontSize: '3rem' }} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={classes['col-div2']}>
            <div className={classes['row']}>
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    2
                  </h3>
                  <p className={classes['define-para']}>
                    Years of
                    <span className={classes['d-block']}>Experience</span>
                  </p>
                </div>
              </div>
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    10
                  </h3>
                  <p className={classes['define-para']}>
                    Completed
                    <span className={classes['d-block']}>projects</span>
                  </p>
                </div>
              </div>
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    5
                  </h3>
                  <p className={classes['define-para']}>
                    Happy
                    <span className={classes['d-block']}>Customers</span>
                  </p>
                </div>
              </div>
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    15
                  </h3>
                  <p className={classes['define-para']}>
                    Awards
                    <span className={classes['d-block']}>Won</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={classes['seperator']}></hr>
        <div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>My skills</h3>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={85} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 85%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Python</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={60} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 60%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Machine Learning & Deep Learning</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={60} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 60%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Artificial Intelligence</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress className={classes['MuiCircularProgress-indeterminate']} variant='determinate' value={85} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 85%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Computer Vision</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={90} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 90%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Digital Image Processing</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={90} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 90%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Statistics and Probability </h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={60} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 60%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Data Visualization </h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={90} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 90%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Problem Solving</h6>
          </div>
          <div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={65} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span className={classes['percentage']}> 65%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>C++</h6>
</div> <div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={40} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span className={classes['percentage']}> 40%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>JAVA</h6>
</div> <div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={60} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span className={classes['percentage']}> 60%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>Oracle</h6>
</div> <div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={30} size={130} sx={{ color: '#17A589', backgroundColor: '#252525', borderRadius: '50%' }} />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span className={classes['percentage']}> 30%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>MongoDB</h6>
</div>


        </div>
        <hr className={classes['seperator']}></hr>
        <div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>Experience and Education</h3>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
              <ul className={classes['resume-ul']}>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2020-Present</span>
                  <h5 className={classes['degree-name']}>Python Developer
                    <span className={classes['place']}>Fiverr</span>
                  </h5>
                  <p className={classes['degree-para']}>  Providing Python development services on fiverr since last 2 years. I work closely with clients to understand their needs and preferences, and strive to deliver high-quality websites that meet their requirements.
    </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2020-Present</span>
                  <h5 className={classes['degree-name']}>Software Engineering
                    <span className={classes['place']}>UEt taxila</span>
                  </h5>
                  <p className={classes['degree-para']}> Student of Software Engineering in University of Engineering and Technology Taxila, Pakistan </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
              <ul className={classes['resume-ul']}>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2018-2020</span>
                  <h5 className={classes['degree-name']}>Pre-Engineering
                    <span className={classes['place']}>Pgc</span>
                  </h5>
                  <p className={classes['degree-para']}>  Achieved top marks in FSC Pre-Engineering, with a 85%. Demonstrated strong work ethic and dedication to academic success</p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2016-2018</span>
                  <h5 className={classes['degree-name']}>matriculation
                    <span className={classes['place']}>Fazaia Inter College</span>
                  </h5>
                  <p className={classes['degree-para']}>  I received an overall grade point average of 95%, which demonstrates my dedication to academic excellence and my ability to excel in a challenging curriculum. </p>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>

  </motion.div>)
}

export default About;