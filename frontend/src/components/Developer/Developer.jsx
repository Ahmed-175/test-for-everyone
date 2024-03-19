import React from 'react'
import './Developer.css'
import imgdevel from './ahmd.jpg'

const Developer = () => {
  return (
    <div>
        <section className='developer'>

            <div className='img-name'>
              <div className="img-s">
              <img src={imgdevel}  />
                <div className='name-de'>
                    <h2>أحمد متولي فرج</h2>
                    <h3>full stack developer</h3>
                </div>
              </div>
                <a href="https://pwa-3h6d.onrender.com" target='_black' className='btton btn'>موقع الشخصي</a>
            </div>


            <div className='info'>
            <h1><span>مبرمج</span> الموقع</h1>
            <p>أنا شخص في سن 17 من عمري تعلمت البرمجة في سن 16 وانا حاليا في الصف الثاني الثانوي و انا اسكن في محافظة البحيرة و في مدينة رشيد في قرية الجدية هواياتي هي تعلم اي شيء جديد والبحث عن الاخطأ و حلها و اتعلم البرمجة عن طريق اقامة مشاريع لكي اقابل المشاكل الواقعية و أتدرب علي طريق التفكير و البحث عن الحل و هذا ما طور مهاراتي بشكل صحيح</p>

            </div>


            <div className="img-icon">
            <a href="https://www.facebook.com/profile.php?id=100072925321728" target='_black'  ><i className="fa-brands fa-facebook"style={{ color: "#0072b1" }} ></i></a>
            <a href="https://www.instagram.com/abmedfarag175/?hl=en" target='_balck'><i className="fa-brands fa-instagram"  style={{ color: "#e1306c" }}></i></a>
            <a href="https://github.com/Ahmed-175?tab=repositories" target='_balck' ><i className="fa-brands fa-github" style={{ color: "#fff" }}></i></a>
            <a href="https://www.linkedin.com/in/ahmed-farag-3b455626b/" target='_balck' ><i className="fa-brands fa-linkedin" style={{ color: "#4267b2" }}></i></a>

          
            </div>


            
        </section>
    </div>
  )
}

export default Developer