
import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import MainLayout from '../Layouts/MainLayout'

export default function Index() {
    const { posts } = usePage().props
    return (
        <MainLayout>
            <div className="container py-6">
                <h1 className='text-3xl font-semibold tracking-tighter text-blue-500 pb-3'>List of Posts:</h1>
                <ul>
                    {posts?.map((post) => (
                        <li key={post?.ID}>
                            <Link href={`${post?.post_name}`}>
                                <h1 className='text-xl text-gray-600 underline'>{post?.post_title}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </MainLayout>

    )
}
