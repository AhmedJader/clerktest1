import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-4 font-bold text-2xl">
        <h1>Sign In To Access The App</h1>
      </div>
      <SignIn forceRedirectUrl="/"/>
    </div>
  );
}