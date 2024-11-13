import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
  
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {/* Additional content here */}
      </div>
    </>
  );
}
