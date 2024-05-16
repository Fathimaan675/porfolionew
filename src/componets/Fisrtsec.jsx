import React from 'react'
import './first.css'
import { Row, Col } from 'react-bootstrap';
import png from '../assets/ezgif-6-34cdab34ec.gif'
import laptop from '../assets/laptop.gif'
import webpage from '../assets/webpages.gif'
import porta from '../assets/s1.png'
import portb from '../assets/s2.png'
import portc from '../assets/s3.png'
function Fisrtsec() {
  return (
    <>
    <section>
        <Row>
            <Col className='first1 lg-10'>
                <h4 style={{marginLeft:'100px',margin:'100px'}}> <b>HI I'AM</b>
                <br /><p style={{color:""}}>Fathima A N</p> <br /><br /><p>Proficient in HTML, CSS, and JavaScript, I specialize in leveraging modern front-end frameworks like React.js  to build dynamic and interactive interfaces</p><br /><h6><a style={{textDecoration:"none",}} href=""><i class="fa-brands fa-linkedin"></i></a> <a href=""><i class="fa-brands fa-github"></i></a></h6> </h4>
            </Col>
            <Col className='first2 lg-2'>
                <img src="https://i.pinimg.com/originals/04/bb/6f/04bb6fbfbf2917363954f2be29480419.gif" alt="" />
            </Col>
        </Row>
        <Row style={{border:"10px white",background:"grey",height:"50px",fontSize:'30px'}}>
        <marquee behavior="scroll" direction="left" style={{whitespace: "nowrap",color:'black',border:"10px white",backgroundcolor:"red"}}>
    React, Material-UI, Bootstrap, GitHub, Angular, HTML, CSS, JavaScript, Redux
</marquee>
        </Row>
        <Row classname="third1">
          
          <Col className='third2 col-lg-6' >
    <img  src= {png} alt="" />
          </Col>
          <Col className='col-lg-6'><h1>ABOUT ME</h1>
          
          <p><b>MY NAME IS FATHIMA AN <span className='blink'>I AM A FULL STACK DEVELOPER</span> </b></p>
          <br /><br /><br />
          <p>I possess advanced proficiency in HTML, CSS, and JavaScript, coupled with hands-on experience in popular front-end frameworks and libraries such as React, Angular, and Vue.js, enabling me to craft engaging and dynamic user interfaces.</p>
          <br />
          <p>I am dedicated to continuous improvement and professional development, evidenced by my completion of various online courses, certifications, and self-directed learning projects aimed at expanding my skill set and staying abreast of the latest advancements in front-end development.</p>
          <br />
          <p>I have curated a diverse portfolio showcasing a range of projects, including websites, web applications, and interactive elements such as animations and games. Each project is accompanied by detailed descriptions, screenshots, and live demos, providing a comprehensive overview of my skills and the technologies utilized.</p>
          <Col>
          </Col>
          </Col>
        </Row>
        <Row className='marquee1'>
  <div className="marquee-container">
    <div className="marquee">
      <img style={{height:'100px'}} src="https://tse2.mm.bing.net/th?id=OIP.R8sZxvipeswfHbUZVES_wQHaHa&pid=Api&P=0&h=180" alt="Image 1" />
      <img style={{height:'100px'}} src="https://tse1.mm.bing.net/th?id=OIP.bbMAm44sU8qOI48PRRdGFgHaHa&pid=Api&P=0&h=180" alt="Image 2" />
      <img style={{height:'100px'}} src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Image 3" />
      <img style={{height:'100px'}} src="https://clipground.com/images/html-logo-png-3.png" alt="Image 4" />
      <img style={{height:'100px'}} src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="Image 5" />
 
    <img style={{height:'100px'}} src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" alt="Image 6" />
    <img style={{height:'100px'}} src="https://tse2.mm.bing.net/th?id=OIP.R8sZxvipeswfHbUZVES_wQHaHa&pid=Api&P=0&h=180" alt="Image 1" />
      <img style={{height:'100px'}} src="https://tse1.mm.bing.net/th?id=OIP.bbMAm44sU8qOI48PRRdGFgHaHa&pid=Api&P=0&h=180" alt="Image 2" />
      <img style={{height:'100px'}} src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Image 3" />
      <img style={{height:'100px'}} src="https://clipground.com/images/html-logo-png-3.png" alt="Image 4" />
      <img style={{height:'100px'}} src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="Image 5" />
 
    <img style={{height:'100px'}} src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" alt="Image 6" />
    </div>
    </div>
    
</Row>
<br /><br />
<Row>
 
<h3 className="portfolio-animation" style={{textAlign:'center'}} >SERVICES</h3>
 <Col>

 <div className='box'>
  <div className='box1'>

   <img  style={{height:'200px',marginLeft:'30px'}} src={laptop} alt="" />
   <h5 style={{marginLeft:'10px'}}>SINGLE PAGE APPLICATION</h5>
  </div>
 </div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box1'>
    <img  style={{height:'200px',marginLeft:'80px',marginTop:'10px'}}  src={webpage} alt="" />
    <h5 style={{marginLeft:'10px',textAlign:'center'}}>WEBPAGES</h5>

  </div>
</div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box1'>
    <img  style={{height:'200px',marginLeft:'50px',marginTop:'10px'}} src="https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif" alt="" />
    <h5 style={{marginLeft:'10px',textAlign:'center'}}>WEB SITES</h5>

  </div>
 </div>
 </Col>
</Row>
<br /><br />
<Row>
<h3 className="portfolio-animation" style={{textAlign:'center'}}>SKILLS</h3>

  <Col>
  
  </Col>
  <Col>
 <div className='box'>
  <div className='box2'>
    <img  style={{height:'70px',marginLeft:'20px',marginTop:'10px'}} src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" alt="" />
  </div>
 </div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box2'>
    <img  style={{height:'70px',marginLeft:'20px',marginTop:'10px'}} src="https://tse2.mm.bing.net/th?id=OIP.R8sZxvipeswfHbUZVES_wQHaHa&pid=Api&P=0&h=180" alt="" />
  </div>
 </div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box2'>
    <img  style={{height:'70px',marginLeft:'10px',marginTop:'10px'}} src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="" />
  </div>
 </div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box2'>
    <img  style={{height:'70px',marginLeft:'10px',marginTop:'10px'}} src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="" />
  </div>
 </div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box2'>
    <img  style={{height:'70px',marginLeft:'10px',marginTop:'10px'}} src="https://static.vecteezy.com/system/resources/previews/012/697/295/large_2x/3d-python-programming-language-logo-free-png.png" alt="" />
  </div>
 </div>
 </Col>
 <Col>
 <div className='box'>
  <div className='box2'>
    <img  style={{height:'70px',marginLeft:'10px',marginTop:'10px'}} src="https://tse1.mm.bing.net/th?id=OIP.bbMAm44sU8qOI48PRRdGFgHaHa&pid=Api&P=0&h=180" alt="" />
  </div>
 </div>
 </Col>
</Row>
<br /><br /><br /><br />
<Row>
      <h5 className="portfolio-animation" style={{ textAlign: 'center', marginTop: "10px" }}>MY PORTFOLIO</h5>
      <Col>
        <div className='box'>
          <div className='box3'>
            <img src={porta} alt="" />
            <div className='overlay'>
              <h5 style={{color:"yellow"}}>Website Design</h5>
              <h5>Hand craft website</h5>
             </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className='box'>
          <div className='box3'>
            <img src={portb} alt="" />
            <div className='overlay'>
              <h5 style={{color:"yellow"}}>Website Design</h5>
              <h5>React Parallax Effect Page</h5>
             </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className='box'>
          <div className='box3'>
            <img src={portc} alt="" />
            <div className='overlay'>
              <h5 style={{color:"yellow"}}>Website Design</h5>
              <h5>Travel booking </h5>
             </div>
          </div>
        </div>
      </Col>
    </Row>
    </section>
    </>
  )
}

export default Fisrtsec