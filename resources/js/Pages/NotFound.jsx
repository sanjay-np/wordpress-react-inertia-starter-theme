import React from 'react'
import MainLayout from '../Layouts/MainLayout'

export default function NotFound() {
    return (
        <MainLayout>
            <div className="container py-6 h-screen flex items-center justify-center">
                <div>
                    <div className='text-6xl text-center font-semibold'>404</div>
                    <div className='text-xl text-center'>Page Not Found</div>
                </div>
            </div>
        </MainLayout>
    )
}
