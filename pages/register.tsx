import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/login.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Btn } from '../components'
import next from 'next'
import Link from 'next/link'

const RegisterPage = () => {
    const TitleProject = process.env.projectName



    const [mata, setMata] = useState(false)
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')



    const clickMata = () => {
        setMata(!mata)
    }



    return (
        <div className={styles['home-page']}>
            <Head>
                <title>{TitleProject} || Reigster</title>
            </Head>
            <div className="flex  min-h-screen">

                <div className=' h-screen w-screen flex flex-col lg:w-[30%] p-6 justify-between '>
                    <h1 className="text-4xl capitalize ">{TitleProject}</h1>

                    <div className="card shadow-lg border border-1 rounded-lg p-3 flex flex-col  justify-start">
                        <h1 className='text-sm text-gray-500 mb-3'>Silahkan Mengisi Data Untuk Melakukan Registrasi</h1>
                        <form action="#">
                            {/* EMAIL */}
                            <div className=' relative w-full items-center justify-center my-3'>

                                <input type="email" placeholder='Email ' className='w-full border border-1 px-2 pr-8 py-1  focus:outline-none focus:border-1 focus:border-blue-400' onChange={(e) => setEmail(e.target.value)} />
                                <FontAwesomeIcon icon={faEnvelope} className='absolute pt-2 right-3 text-gray-500' />
                            </div>
                            {/* USERNAMA */}
                            <div className=' relative w-full items-center justify-center my-3'>

                                <input type="text" placeholder='UserName' className='w-full border border-1 px-2 pr-8 py-1  focus:outline-none focus:border-1 focus:border-blue-400' onChange={(e) => setUserName(e.target.value)} />
                                <FontAwesomeIcon icon={faUser} className='absolute pt-2 right-3 text-gray-500' />
                            </div>
                            {/* PASSWORD */}
                            <div className=' relative w-full items-center justify-center my-3'>

                                <input type={mata ? 'text' : 'password'} placeholder='password' className='w-full border border-1 px-2 pr-8 py-1  focus:outline-none focus:border-1 focus:border-blue-400' onChange={(e) => setPassword(e.target.value)} />
                                <FontAwesomeIcon icon={mata ? faEyeSlash : faEye} className='absolute pt-2 right-3 text-gray-500 cursor-pointer' onClick={clickMata} />
                            </div>
                            {/* CONFIRM PASSWORD*/}
                            <div className=' relative w-full items-center justify-center my-3'>

                                <input type={mata ? 'text' : 'password'} placeholder='password' className='w-full border border-1 px-2 pr-8 py-1  focus:outline-none focus:border-1 focus:border-blue-400' onChange={(e) => setPassword(e.target.value)} />
                                <FontAwesomeIcon icon={mata ? faEyeSlash : faEye} className='absolute pt-2 right-3 text-gray-500 cursor-pointer' onClick={clickMata} />
                            </div>


                            <Btn title={'Login'} clickHandler={() => console.log('rviopelu')} />
                        </form>
                    </div>
                    <div className="h1">sudah Mempunyai akun ? <Link href={'/login'} ><p className='text-blue-600 hover:text-blue-800 cursor-pointer'>Silahkan Login</p></Link></div>
                </div>
                <div className="lg:flex bg-red-700 lg:w-[70%] lg:h-screen lg:bg-[url('/img/register-img.jpg')] bg-cover" ></div>
            </div>
        </div >
    )
}

export default RegisterPage