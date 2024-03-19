import React from 'react'
import Home from './Home/Home';
import Count from './Count/Count';
import Quizzes from './Quizzes/Quizzes';
import Developer from './Developer/Developer';
import AboutMe from './about/AboutMe';

const All = () => {
  return (
    <div>
     <Home />
     <Count/>
     <AboutMe />
     <Quizzes />
     <Developer/>

    </div>
  )
}

export default All