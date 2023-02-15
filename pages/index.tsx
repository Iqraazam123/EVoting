import React from 'react'

const index = () => {
  return (
    <div className='bg-[#0F172A] w-full mx-auto h-screen flex justify-center items-center'>
      <div className='w-[400px] bg-[#1E293B] h-[400px] border-2 border-[#16F6E9] rounded-br-3xl rounded-tl-3xl  '>
       <div className='flex justify-center h-14 p5-'>
       <div className='h-24 w-24 text-center  flex justify-center items-center rounded-full relative bottom-10 bg-slate-800  border border-[#16F6E9] '>

          <img src="Logo.png" alt="" className='w-20  relative bottom-15'  />
          
        </div>
       </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-980 underline text-white underline-offset-4' >Voter Login</h2>
      
    <form className='flex borde items-end justify-center '>
      
        <div className='self-center '>
        <input type="usename" required className='bg-[#0F172A] mt-10 w-80  rounded-br-2xl rounded-tl-2xl appearance-none  relative block  px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md mb-2 focus:outline-hone focus:ring-indigo-500 focus:border-indigo-500 focus:2-10 sm;text-sm" placeholder="username border border-[#16F6E9]   'placeholder='Voting ID'/>
        

    
    <input type="password" required className=' bg-[#0F172A] mt-5 w-80 rounded-br-2xl rounded-tl-2xl appearance-none    px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md mb-2 focus:outline-hone focus:ring-indigo-500 focus:border-indigo-500 focus:2-10 sm;text-sm" placeholder="username  border border-[#16F6E9]  'placeholder='Password'/>

    
               


      </div>
    </form>

    <div className='flex justify-center'>
      <button type='button' className='bg-[#0F172A] w-48 mt-6  text-white  pt-1 w- group relative w-full flex justify-center py-2 px-4 border border-[#16F6E9] focus:ring-offset-2  '  >
      <b>  Login </b>
      </button>
    </div>



    </div>

    </div>
  )
}

export default index