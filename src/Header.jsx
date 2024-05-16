import React from 'react'
import { Row, Col } from 'react-bootstrap';
function Header() {
  return (
    <>
    <header>
        <section>
           <Row style={{marginTop:'10px'}} className='d-flex'>
            <Col className='headerimg lg-2'>
            <h3> <img src="https://media1.thehungryjpeg.com/thumbs2/ori_3684702_yrko3nnvh9gtza7o344vjwmh1jh2gvncz8r34egb_fn-monogram-logo-design.jpg" alt="" />
           <b>FATHIMA A N</b>   </h3>
            </Col>

            <Col style={{marginTop:'20px'}} className='header lg-10'>
           <b>
           <a href="">Home</a>
         
            <a href="">About</a> 
            <a href="">Service</a>
            <a href="">Skill</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
            </b>
            </Col>
           </Row>
        </section>
    </header>
    </>
  )
}

export default Header