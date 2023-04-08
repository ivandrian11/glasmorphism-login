function App () {
  return (
    <div className='bg-fall-patern min-h-screen bg-cover flex justify-center items-center'>
      <div className='glassmorphism p-16 rounded-[30px] border border-white text-primary'>
        <h1 className='font-semibold text-3xl text-center'>Sign Up</h1>
        <form className='mt-8 flex flex-col gap-y-4 w-72'>
          <input
            name='username'
            placeholder='Username'
            className='input-field'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='input-field'
          />
          <button
            type='submit'
            className='bg-primary font-medium mt-2 p-4 text-white rounded-[10px]'
          >
            Login
          </button>
          <div className='flex justify-between items-center font-medium mt-4'>
            <span className='cursor-pointer'>Forget Password</span>
            <span className='underline cursor-pointer'>Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
