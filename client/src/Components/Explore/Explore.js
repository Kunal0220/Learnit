import React from 'react'
import './Explore.css'
import { BsSearch } from "react-icons/bs";
function Explore() {
  return (
    <div>
        <div className="d-flex justify-content-around" >

        <input type="text" id="exploreSearch" placeholder='Search for courses like Machine Learning , Python , Web Development......' /> <h2 className='mt-1'> <BsSearch/></h2>
        </div>
        <h2 className="m-2">Trending Courses:</h2>

        <div className="d-flex justify-content-around p-3">

            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/crypt.jpg')} alt="" />
                <p className='newCourseP'>Blockchain and Cryptography</p>
                </a>
            </div>
            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/theforevergoldphp.jpg')} alt="" />
                <p className='newCourseP'>PHP: The immortal Language</p>
                </a>
            </div>
            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/backendHero.jpg')} alt="" />
                <p className='newCourseP'>Node: The Tom Cruise of Backend</p>
                </a>
            </div>

        </div>

        <h2 className="m-2">Web Development Courses:</h2>

        <div className="d-flex justify-content-around p-3">

            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/web.jpg')} alt="" />
                <p className='newCourseP'>Full Stack Web Development 2023 </p>
                </a>
            </div>
            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/stats.jpg')} alt="" />
                <p className='newCourseP'>DataScience : A step further</p>
                </a>
            </div>

        </div>


        <h2 className="m-2">More to Offer:</h2>

        <div className="d-flex justify-content-around p-3">

            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/andriod.jpg')} alt="" />
                <p className='newCourseP'>Flutter the complete bootcamp 2023 </p>
                </a>
            </div>
            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/python.jpg')} alt="" />
                <p className='newCourseP'>Python:The Best Choice for ML</p>
                </a>
            </div>
            <div className='newCourseMain'>
                <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
                <img className='exploreCourse' src={require('../images/java.jpg')} alt="" />
                <p className='newCourseP'>Data Structures with Java</p>
                </a>
            </div>

        </div>


    </div>
  )
}

export default Explore