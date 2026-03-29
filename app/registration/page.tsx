import GoogleSignUpBtn from '@/components/GoogleSignUpBtn'
import Link from 'next/link'


const page = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center bg-[url('/assets/bbb.jpg')] bg-cover bg-center">

  {/* Overlay */}
   <div className="absolute inset-0 bg-gray-900/70"></div>

  {/* Card */}
  <div className="relative z-10 w-full max-w-4xl  max-lg:max-w-md mx-4 bg-[rgb(40,34,59)] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT IMAGE */}
    <div className="hidden lg:block bg-[url('/assets/login-image.jpg')] h-130 bg-cover bg-center relative">
      <div className="absolute top-7 left-8">
        <Link
          href="/"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg text-md hover:bg-purple-700"
        >
          დაბრუნება მთავარზე
        </Link>
      </div>
    </div>

    {/* RIGHT FORM */}
    <form className="flex flex-col justify-center px-6 py-5 sm:px-10">

      <h1 className="text-white text-2xl mb-2">რეგისტრაცია</h1>

      <p className="text-gray-400 text-sm mb-4">
         გაქვთ ანგარიში?{" "}
        <Link href="/login" className="text-purple-400 hover:text-purple-600 ">
          შესვლა
        </Link>
      </p>

      <input
        type="text"
        placeholder="Username"
        className="w-full h-10 mb-4 px-3 border border-white/30 rounded bg-transparent text-white focus:outline-none focus:border-purple-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full h-10 mb-4 px-3 border border-white/30 rounded bg-transparent text-white focus:outline-none focus:border-purple-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full h-10 mb-4 px-3 border border-white/30 rounded bg-transparent text-white focus:outline-none focus:border-purple-500"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full h-10 mb-4 px-3 border border-white/30 rounded bg-transparent text-white focus:outline-none focus:border-purple-500"
      />

      <div className="mb-5 flex text-[12px] gap-2">
              <label className="flex items-center gap-1 text-gray-400  font-sans cursor-pointer">
                <input type="checkbox" className="w-3 h-3" />
                ვეთანხმები{" "}
              </label>
              <a href="#" className="text-purple-400 hover:text-purple-600">
                  წესები და პირობები
                </a>
            </div>

      <button className="w-full h-10 cursor-pointer bg-purple-600 rounded text-white hover:bg-purple-700 transition ">
        შესვლა
      </button>

<div className="flex items-center text-gray-400 text-sm my-4
  before:content-[''] before:flex-1 before:border-b before:border-gray-600 before:mr-3
  after:content-[''] after:flex-1 after:border-b after:border-gray-600 after:ml-3">
 Or Sign in With
</div>
     

    <GoogleSignUpBtn/>

    </form>
  </div>
</div>
  
  )
}

export default page
