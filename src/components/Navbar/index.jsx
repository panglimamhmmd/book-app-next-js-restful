'use client';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
const Navbar = () => {
    const { user, isLoaded } = useUser();
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href={`/`} className="btn btn-ghost text-xl">
                    Book App
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        {!isLoaded ||
                            (!user && <Link href={`/dashboard`}>Login</Link>)}
                    </li>
                    <li>{isLoaded && user && <a>Dashboard</a>}</li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default Navbar;
