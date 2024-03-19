import React from 'react';
import img1 from './Exams-bro.png';
import './Home.css';

const Home = () => {
  return (
    <section id='home' className='home'> 
        <div className="text-laft-home">
            <div>
            <h1><span>اختبارات</span> علي الانترنت</h1>
            <a href="#quizzes" className='btton btn'>أبدا الان</a>
            </div>
         </div>
         <div className="img-right-home">
            <img src={img1}  className='img-home'/>
        </div>
    </section>

  )
}

export default Home