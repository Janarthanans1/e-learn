"use client";

import Link from "next/link";


export default function Home() {
  
  return (
    <div id="main_container" className="px-6 py-12 flex flex-col lg:flex-row items-center lg:justify-between  min-h-screen">
      <section id="details" className="lg:w-1/2 text-center lg:text-left">
        <h1 className="font-bold text-4xl lg:text-6xl tracking-wider text-white">Learn without<br />limits</h1>
        <p className="tracking-wider mt-6 text-white leading-relaxed text-justify">
          <span className="font-bold text-color3 text-2xl">LMS</span> where
          educators and students connect seamlessly online. Teachers craft
          personalized courses for various subjects and grades, while students
          explore courses tailored to their needs. Empowering both educators and
          learners, LMS revolutionizes online education.
        </p>

        <section id="btns" className="mt-10 flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-6">
          <Link href="/pages/signup" className="px-8 py-3 rounded text-white bg-color3 transition-all duration-200 shadow-md">
            Join Us
          </Link>
          <Link href="/pages/courses" className="px-8 py-3 rounded text-color3 border-2 border-color3 transition-all duration-200 shadow-md">
            Courses
          </Link>
        </section>
      </section>
      <div className="mt-10 lg:mt-0">
        <img src="home.png" alt="Learning Illustration" className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 rounded-lg "/>
      </div>
    </div>
  );
}
