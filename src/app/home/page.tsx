import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';

export default function HomePage() {
    return (
        <>
            <div className='absolute top-4 right-4'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>


            <div className="w-full h-screen flex flex-col justify-center items-center">
                <h2 className="text-center text-2xl font-extrabold">Welcome to the Home Page!</h2>
                <p>You are successfully signed in.</p>
            </div>
        </>
    );
}
