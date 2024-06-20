import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-blue-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources My Best JavaScript & React Projects
            </p>
            <Button gradientDuoTone='purpleToPink'  className='rounded-tl-xl rounded-bl-none rounded-tr-none'>
                <a href="https://github.com/Abhijeetkokat007?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    My Best Projects
                </a>
            </Button>

            {/* <Button   className='rounded-tl-xl rounded-bl-none btn-grad'>
                <a href="https://github.com/Abhijeetkokat007?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    My Best Projects
                </a>
            </Button> */}

        </div>
        <div className="p-7 flex-1 ">
            <img className=' rounded-xl ' src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
    </div>
  )
}