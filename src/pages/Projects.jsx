import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've embarked on numerous projects through out the years, but these are the ones i hold closest to my heart. Many of them are open-source, so if you come across something that piques your inteerest, feel free to explore the codebase and contirbute your ideas for further enhancements.
          Your colaboration is highly valued!.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='font-semibold text-2xl font-poppins'>
                {project.name}
              </h4>
              <p className=' text-slate-500 mt-2'>
                {project.description}
              </p>
              <div className='mt-5 flex gap-2 font-poppins items-center'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'>
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}

        <hr className='border-slate-200' />
        <CTA />
      </div>
    </section>
  )
}

export default Projects
