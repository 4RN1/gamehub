import Link from "next/link";

const Page = () => {
  return (
  <div className="relative min-h-screen flex items-center justify-center bg-[url('/assets/bbb.jpg')] bg-cover bg-center">

  {/* Overlay */}
   <div className="absolute inset-0 bg-gray-900/70"></div>

  {/* Card */}
  <div className="relative z-10 w-full max-w-4xl max-lg:max-w-md mx-4 bg-[rgb(40,34,59)] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT IMAGE */}
    <div className="hidden lg:block bg-[url('/assets/gg.jpg')] h-130 bg-cover bg-center relative">
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
    <div className="flex flex-col justify-center px-6 py-10 sm:px-10 ">

      <h1 className="text-white text-2xl mb-2">შესვლა</h1>

      <p className="text-gray-400 text-sm mb-6">
        არ გაქვთ ანგარიში?{" "}
        <Link href="/registration" className="text-purple-400 hover:text-purple-600">
          რეგისტრაცია
        </Link>
      </p>

      <input
        type="text"
        placeholder="Username"
        className="w-full h-10 mb-4 px-3 border border-white/30 rounded bg-transparent text-white focus:outline-none focus:border-purple-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full h-10 mb-4 px-3 border border-white/30 rounded bg-transparent text-white focus:outline-none focus:border-purple-500"
      />

<div className="flex justify-between">
      <label className="flex items-center gap-2 text-gray-400 text-sm mb-6">
        <input type="checkbox" className="w-4 h-4" />
        დამიმახსოვრე
      </label>

      <Link href="forgot-spwd" className="text-sm text-purple-400 hover:text-purple-600">დაგავიწყდა პაროლი?</Link>
</div>
      <button className="w-full h-10 cursor-pointer bg-purple-600 rounded text-white hover:bg-purple-700 transition">
        შესვლა
      </button>

    </div>
  </div>
</div>
  
  );
};

export default Page;
