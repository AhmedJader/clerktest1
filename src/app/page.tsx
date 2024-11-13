// app/page.js (or wherever your home route is defined)
"use client";
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();

  const handleSignInRedirect = () => {
    router.push('/sign-in');
  };

  return (
    <>
      {/* Show user button if signed in */}
      <SignedIn>
        <div className='absolute top-4 right-4'>
        <UserButton />
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
          <h1 className="text-2xl font-bold">You can see this because you authenticated</h1>
        </div>
      </SignedIn>

      <SignedOut>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
        <p className="mb-4">Please sign in to access your dashboard.</p>
        
        <button
          onClick={handleSignInRedirect}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Sign In
        </button>
      </div>
      </SignedOut>
    </>
  );
}
