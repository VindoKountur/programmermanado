import React from 'react'
import Head from 'next/head'
import styles from '../styles/login.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye, faUser } from '@fortawesome/free-solid-svg-icons'
import { Btn } from '../components'

const login = () => {
    const TitleProject = process.env.projectName



    const onchangeEmail = () => {

    }

    return (
        <div className={styles['home-page']}>
            <Head>
                <title>{TitleProject}</title>
            </Head>
            <div className="flex  min-h-screen">
                <div className="lg:flex bg-red-700 lg:w-[70%] lg:h-screen lg:bg-[url('/img/login-img.jpg')] bg-cover" ></div>
                <div className=' h-screen w-screen flex flex-col lg:w-[30%] p-6 justify-between '>
                    <h1 className="text-3xl capitalize ">{TitleProject}</h1>

                    <div className="card shadow-lg border border-1 rounded-lg p-3 flex flex-col  justify-start">
                        <h1 className='text-sm text-gray-500 mb-3'>Silahkan Login Untuk Masuk Ke Akun Anda</h1>
                        <form action="#">
                            <div className=' relative w-full items-center justify-center my-3'>

                                <input type="email" placeholder='Email ' className='w-full border border-1 px-2 pr-8 py-1  focus:outline-none focus:border-1 focus:border-blue-400' onChange={onchangeEmail} />
                                <FontAwesomeIcon icon={faUser} className='absolute pt-2 right-3 text-gray-500' />
                            </div>
                            <div className=' relative w-full items-center justify-center my-3'>

                                <input type="password" placeholder='password' className='w-full border border-1 px-2 pr-8 py-1  focus:outline-none focus:border-1 focus:border-blue-400' onChange={onchangeEmail} />
                                <FontAwesomeIcon icon={faEye} className='absolute pt-2 right-3 text-gray-500 cursor-pointer' />
                            </div>

                            <button className='bg-blue-300 hover:bg-blue-500 ease-in-out duration-300 px-3 py-1 '>
                                Login
                            </button>

                            <Btn />
                        </form>
                    </div>
                    <div className="h1">Belum Mempunyai akun ? silahkan Register</div>
                </div>
            </div>
        </div >
    )
}

export default login