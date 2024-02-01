import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20 p-3'>
      <div className='flex p-3 max-w-3xl mx-auto gap-5 flex-col md:flex-row md:items-center'>
        {/* left side */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Blogs
            </span>
          </Link>
          <p className='text-sm mt-5 font-semibold'>
            This is a demo project. You can sign up with your email or Google
            account
          </p>
        </div>
      
      {/* right side */}

      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='text' placeholder='Email address' id='email' />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='text' placeholder='Password' id='password' />
          </div>
          <Button gradientDuoTone='purpleToPink' type="submit">Sign up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500 hover:underline'>Sign In</Link>
        </div>
      </div>
      </div>
    </div>
  );
}


