import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header>
            <a href="/" className='logo'>  أوائل <span>المستقبل</span> هنا </a>
            <nav>
              <a href="/loginadm" className='i'> اضافة اختبارات</a>
            </nav>
        </header>
    </div>
  )
}

export default Header