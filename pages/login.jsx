import React from 'react'
import Head from 'next/head'
import styles from '../styles/login.module.scss'
const login = () => {
    const TitleProject = process.env.projectName
    return (
        <div className={styles['home-page']}>
            <Head>
                <title>{TitleProject}</title>
            </Head>
            <div className="flex  min-h-screen">
                <div className="lg:flex bg-red-700 lg:w-[70%] lg:h-screen lg:bg-[url('/img/login-img.jpg')] bg-cover" ></div>
                <div className=' h-screen w-screen flex flex-col lg:w-[30%] p-6 justify-between '>
                    <h1 className="text-3xl capitalize ">{TitleProject}</h1>

                    <div className="card shadow-lg border border-1 rounded-lg p-3">
                        <h1 className='text-xl'>Login</h1>
                        <form action="#">
                            <input type="email" placeholder='Email' />
                        </form>
                    </div>
                    <div className="h1">Belum Mempunyai akun ? silahkan Register</div>
                </div>
            </div>
        </div >
    )
}

export default login