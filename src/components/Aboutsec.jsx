import React from 'react'
import aboutpic from '../assets/aboutpic.png';

const Aboutsec = () => {
  return (
    <section className='text-white mt-16 relative overflow-hidden'
    id='about'>
        <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12
        items-center py-16 xl:px-16 relative z-10'>
            <div data-aos='fade-right'>
                <h2 className='text-4xl md:text-5xl font-extrabold
                text-white mb-6'>
                    More<span className='text-primary'> About</span> Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                   I am a passionate and dedicated Computer Science student at KIIT with a strong interest in software development, artificial intelligence, and problem-solving. I enjoy learning new technologies, building practical applications, and continuously improving my technical skills through hands-on experience and real-world projects.
                   <br/><br/>
                   I have worked on projects such as a Face Recognition Attendance System using OpenCV and MySQL, an Expense Tracker web application, and an SSC Website Clone built with HTML and CSS. I also completed a research internship at NIT Jamshedpur focused on machine learning and am currently pursuing an internship at IIT Kharagpur, where I am gaining more technical and research experience. These experiences have helped me strengthen my knowledge and grow as a developer.
                   <br/><br/>
                   Apart from academics and technology, I am also a Bronze Medalist in the Odisha State Kickboxing Championship. Kickboxing has taught me discipline, consistency, focus, and the importance of hard work, which I apply in both my personal and professional growth.
                </p>
                <div className='grid grid-cols-3 gap-6 max-w-xl'>
                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300
                    hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>+350</h3>
                        <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>DSA PROBLEMS</p>
                    </div>

                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300
                    hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>+3</h3>
                        <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>PROJECTS</p>
                    </div>

                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300
                    hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>2</h3>
                        <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>INTERNSHIPS</p>
                    </div>
                </div>
            </div>
            <div className='mt-16 md:mt-0 flex justify-center
            lg:justify-end relative' data-aos='fade-left'>
                <div className='relative w-64 h-64 md:w-96 md:h-120'>
                    <div className='absolute inset-0 z-0 rounded-full
                    shadow-lg border border-primary translate-x-4
                    translate-y-4'>
                    </div>
                    <div className='relative z-10 w-full h-full
                    bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                        <img src={aboutpic} alt="About"
                        className='w-full h-full object-cover transition-transform
                        duration-500 hover:scale-110' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutsec
