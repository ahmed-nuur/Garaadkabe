// eslint-disable-next-line no-unused-vars
import { Button } from 'flowbite-react';
 
 
import goal from '../assets/goal.jpg'
import sotry from '../assets/sotry.jpg'
import gym from '../assets/gym.jpeg'
import moti from '../assets/moti.jpg'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
   <div className='flex flex-col sm:flex-row p-3   justify-center items-center rounded-br-3xl text-center'>
    <div className="flex-4 justify-center flex ">
 
            {/* <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <Link
            to='/search/guulaha'
            className='text-lg text-white hover:underline text-center'
          >
            successful story
          </Link>
            </Button> */}
  
            <div className="p-7 flex-1">
    <img src={goal} className='w-96 ml-18 rounded-lg'/>
    </div>
 
            <div className="p-7 flex-1">
    <img src={sotry} className='w-96 ml-18 rounded-lg'/>
    </div>
 
            <div className="p-7 flex-1">
    <img src={gym} className='w-96 ml-18 rounded-lg'/>
    </div>
 
            <div className="p-7 flex-1">
    <img src={moti} className='w-96 ml-18 rounded-lg'/>
    </div>
 

    </div>
   </div>
  )
}

export default CallToAction
