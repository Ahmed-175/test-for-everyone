import React from 'react'
import imgabout from './start.png';
import './About.css';

const AboutMe = () => {
  return (
    <div>
    <section className="about">
     <div className="about-img-right-home">
     <img src={imgabout} className="img-home" alt="صورة توضيحية" />
     </div>
     <div className="about-text-laft-home">
       <div>
         <h1>لماذا أخترتنا</h1>
         <p>
           نهتم بكل الأسئلة وكل التفاصيل لجميع المراحل التعليمية. كل سؤال صعب
           أو سهل ، أو حتى متوسط. إنه موجود على موقعنا
         </p>
         <a href="https://www.facebook.com/profile.php?id=100072925321728" target="_black" className="btton btn">
           تواصل معي
         </a>
       </div>
     </div>
     
   </section>
 </div>
  )
}

export default AboutMe