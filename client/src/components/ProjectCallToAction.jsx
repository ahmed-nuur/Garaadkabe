import { Button } from 'flowbite-react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
   <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
    <h2 className='text-2xl'>
                you can get our project ?
            </h2>
            <p className='text-gray-500 my-2'>
                hubi in aad halkan ka fiiriso sheekooyin badan 
            </p>
            <Button gradientDuoTone='purpleToPink' className='bg-[ffb2c] rounded-tl-xl rounded-bl-none'>
            <Link
            to={'/search'}
            className='text-lg text-white hover:underline text-center'
          >
            get our project
          </Link>
            </Button>
    </div>
    <div className="p-7 flex-1">
    <img src={logo} className='w-96 rounded-lg'/>
    </div>
   </div>
  )
}

export default CallToAction
