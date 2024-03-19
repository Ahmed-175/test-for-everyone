import React from 'react'
import './Count.css';

const Count = () => {
  return (
    <div>
    <section className="count">
        <div className="box-container">

          <div className="box">
            <i className="fa-solid fa-scroll"></i>
            <div className="content">
              <h3>150+</h3>
              <p>الاختبارات الموجودة</p>
            </div>
          </div>



          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div className="content">
              <h3>1300+</h3>
              <p>الطلاب</p>
            </div>
          </div>


          <div className="box">
            <i className="fas fa-smile"></i>
            <div className="content">
              <h3>100%</h3>
              <p>الحالات</p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  )
}

export default Count