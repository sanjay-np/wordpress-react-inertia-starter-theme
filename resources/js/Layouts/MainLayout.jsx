import React from 'react'
import { Link, usePage } from '@inertiajs/react'


export default function MainLayout({ children }) {
    const { site } = usePage().props
    return (
        <>
            <header className="w-full bg-white border-b">
                <div className="container flex justify-between items-center">
                    <div className="logo capitalize font-semibold text-4xl py-4">
                        <Link href='/'>
                            {site?.name}
                        </Link>
                    </div>
                    <nav>
                        <menu className='flex gap-2 font-medium text-sm uppercase'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/sample-page">Sample Page</Link></li>
                            <li><Link href="/the-page-not-found">404</Link></li>
                        </menu>
                    </nav>
                </div>

            </header>
            <main>
                {children}
            </main>
        </>

    )
}
