import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Head, usePage } from '@inertiajs/react';

export default function Page() {
    const { page } = usePage().props
    return (
        <MainLayout>
            <Head title='Page'/>
            <div className="container py-6">
                <h1 className='text-3xl font-semibold tracking-tighter text-blue-500 pb-3'>{page?.post_title}</h1>
                <p dangerouslySetInnerHTML={{ __html: page?.post_content }} />
            </div>

        </MainLayout>
    )
}
