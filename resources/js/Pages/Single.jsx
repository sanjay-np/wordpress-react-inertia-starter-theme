import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { usePage } from '@inertiajs/react'

export default function Single() {
    const { post } = usePage().props
    return (
        <MainLayout>
            <div className="container py-6">
                <h1 className='text-3xl font-semibold tracking-tighter text-blue-500 pb-3'>{post?.post_title}</h1>
                <p dangerouslySetInnerHTML={{ __html: post?.post_content }} />
            </div>
        </MainLayout>
    )
}
