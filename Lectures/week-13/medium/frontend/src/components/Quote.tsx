import React from 'react'

const Quote = () => {
  return (
    <div className='h-screen bg-slate-100 flex justify-center flex-col'>
        <div className='flex justify-center'>
            <div className='max-w-lg'>
                <div className='text-2xl font-bold'>
                    "The customer support I received was excepional. The support team went above and beyond to address my concerns"
                </div>

                <div className='max-w-lg font-semibold text-xl mt-4'>
                    Jules Winnfield
                </div>

                <div className='max-w-lg text-sm  text-grey-400'>
                    CEO | Acme Corp
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Quote
