import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'

const Certificates = () => {
    const certifications=[
        {
            id:1,
            title:'SAP Business Data Cloud',
            issuer:'SAP',
            date:'April 2026',
            link:'https://drive.google.com/file/d/1ww9SShODbU-MLrNClEwoudePLgh6M0uc/view?usp=drivesdk',
            desc:'Demonstrated understanding of enterprise data ecosystems, cloud-based analytics, and business data integration workflows within SAP environments.Gained exposure to enterprise transformation processes, collaborative implementation models, and data-driven business operations'
        },
        {
            id:2,
            title:'ML Research Intern',
            issuer:'NIT Jamshedpur',
            date:'10/05/2025-09/07/2025',
            link:'https://drive.google.com/file/d/1c9hIueSuDeFOoyZU0mN1xnlV4XMxO20I/view?usp=drivesdk',
            desc:'Completed a training internship focused on Machine Learning concepts and workflows.Gained hands-on experience with data preprocessing, model building, and evaluation using scikit-learn.Applied the acquired knowledge to build a Face Recognition Attendance System using OpenCV.'
        },
        {
            id:3,
            title:'Frontend Developer Intern',
            issuer:'IIT Kharagpur',
            date:'May 2026-July2026',
            link:'#',
            desc:'Currently Working'
        },
        {
            id:4,
            title:'Kickboxing',
            issuer:'IAKO',
            date:'October 2025',
            link:'#',
            desc:'Bronze Medalist Odisha State Kickboxing Championship'
        }
    ]
  return (
    <section className='text-white py-20' id='certificates'>
        <div className='max-w-7xl mx-auto lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 
                font-semibold'>Achievements</p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                    Certifications
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-6'>
                {certifications.map((cert)=>(
                    <div key={cert.id} data-aos='zoom in'
                    className='group relative bg-[#111a3e]
                    border border-[#1f1641] p-6 rounded-2xl
                    transition-all duration-300 hover:border-primary/50
                    hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'>
                        <div className='absolute -top-4 -right-4 bg-primary
                        p-3 rounded-xl shadow-lg transform group-hover:rotate-12
                        transition-transform'>
                            <Award className='text-white' size={24}/>
                        </div>
                        <div className='flex items-center gap-4
                        mb-4 text-xs text-gray-400'>
                            <span className='flex items-center gap-1'>
                                <ShieldCheck size={14}
                                className='text-primary'/>
                                {cert.issuer}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Calendar size={14}/>
                                {cert.date}
                            </span>
                        </div>
                        <h3 className='text-xl font-bold-mb-3
                        group-hover:text-primary transition-colors'>
                            {cert.title}
                        </h3>
                        <p className='text-gray-400 text-sm mb-6
                        line-clamp-2'>
                            {cert.desc}
                        </p>
                        <a href={cert.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2
                        text-sm font-medium text-primary hover:text-white
                        transition-colors border-b border-transparent
                        hover:border-white pb-1'>
                            View Certificate <ExternalLink size={14}/>
                        </a>
                    </div>
                ))}

            </div>
        </div>


    </section>
  )
}

export default Certificates
