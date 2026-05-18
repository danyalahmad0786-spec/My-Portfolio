import { Contact } from 'lucide-react'
import React from 'react'
import {FaLinkedin, FaEnvelope, FaPhone, FaMapMarkedAlt} from 'react-icons/fa'

const ContactSection = () => {
    const ContactInfo=[
        {
            id:1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'danyal10b14@gmail.com',
            link: 'mailto:danyal10b14@gmail.com'
        },
        {
            id:2,
            icon: FaPhone,
            title: 'Phone',
            value: '+91 9835738729',
            link: 'null'
        },
        {
            id:3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'linkedin.com',
            link: 'https://www.linkedin.com/in/danyal-ahmad-8523942ab'
        },
        {
            id:4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Bhubaneswar , Odisha',
            link: null
        }

    ]
    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const message = e.target.message.value;

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=danyal10b14@gmail.com&su=Portfolio Contact from ${email}&body=${encodeURIComponent(message)}`,
            '_blank'
        );
    };
  return (
    <section className='py-20 bg-gray-900' id='contact'>
        <div className='container mx-auto px-4 max-w-6xl'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-5xl font-extrabold
                text-white mb-2'>
                    Let's Connect.
                </h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2
                rounded-2xl'>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <p className='text-gray-400 mb-8 leading-relaxed'>
                        bc c j cj jcbah ca jajh j ja hj
                        a aj ja jahbahc hjabchavchbashcbahcvha
                        cvacbhachaca  ajkc
                    </p>
                    <div className='space-y-6'>
                        {ContactInfo.map((info)=>{
                            const Icon=info.icon;
                            return(
                                <div key={info.id}
                                className='flex items-center gap-4 group'>
                                    <div className='w-10 h-10 rounded-full
                                    bg-primary/10 flex items-center justify-center
                                    group-hover:bg-primary/20 transition-colors'>
                                    <Icon size={18} className='text-primary'/>
                                    </div>
                                    <div>
                                        <h4 className='text-white font-medium text-sm'>
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a href={info.link} className='text-gray-400 text-sm hover:text-primary
                                            transition-colors'
                                            target={info.title === 'Location' ? '_self' :'_blank'}
                                            rel={info.title==='Location'? '' : 'noopener noreferrer'}>
                                                    {info.value}
                                            </a>
                                        ):(
                                        <p className=' text-gray-400 text-sm'> 
                                        {info.value}
                                        </p>)}
                                    </div>
                                </div>
                                
                            );
                        })}

                    </div>
                </div>
                <div className=' bg-gray-800 rounded-lg p-6'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor="email"
                            className='text-white block mb-2 text-sm
                            font-medium'>
                                Email
                            </label>
                            <input type="email" name='email' className='w-full px-4 py-2 bg-gray-700
                            border border-gray-600 rounded-lg text-white text-sm
                            focus:outline-none focus:border-primary transition-colors'
                            placeholder='your@email.com' required/>
            
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="message"
                                className='text-white block mb-2 text-sm font-medium'>
                                    Message
                                </label>
                            <textarea id='message' name='message' className='w-full px-4 py-2 bg-gray-700
                            border border-gray-600 rounded-lg text-white text-sm focus:outline-none
                            focus:border-primary transition-colors'
                            placeholder='Your Message....'
                            rows="4"
                            required />
                
                        </div>
                        <button type='submit' className='w-full px-6 py-2.5 bg-primary
                        text-white rounded-lg font-medium hover:bg-primary/80'>
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>

    </section>

  )
}

export default ContactSection
