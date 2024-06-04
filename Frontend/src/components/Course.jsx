import React from 'react';
import list from "../../public/list.json"
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here!</span></h1>
        <p className="mt-12">
        Welcome to bookStore, your premier online destination for books of all genres! Whether you're a passionate reader, a student, or someone who enjoys a good book occasionally, our online bookstore is designed to cater to your literary needs.Our mission is to make reading accessible and enjoyable for everyone, from avid bibliophiles to casual readers.
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))

        }
      </div>
    </div>
    </>
  )
}

export default Course
