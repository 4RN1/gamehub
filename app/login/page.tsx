import Link from "next/link";

const Page = () => {
  return (
   <div className="flex justify-center items-center  min-h-screen bg-[url('/assets/bbb.jpg')] bg-cover">
      <div className="absolute inset-0 bg-gray-900/70"></div>
      <div className="bg-[rgb(40,34,59)] w-215.5 h-150  rounded-[15px] flex z-10">
        {/* LEFT SIDE */}
        <div className="ml-3.75 mt-3.75 rounded-[15px] pl-5 pt-5 h-142.5 w-105 bg-[url('/assets/gg.jpg')] brightness-95 bg-cover bg-center bg-no-repeat">
          <Link href="/" className="py-2 px-3 bg-purple-600 text-white border-none rounded-[10px] cursor-pointer active:bg-white active:text-black transition">
            დაბრუნება მთავარზე
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[rgb(40,34,59)] h-142.5 mt-3.75 w-105 pl-15 pt-12.5">
          <h1 className="text-white font-sans text-xl">შესვლა</h1>

          <p className="text-gray-400 text-[12px] mt-3.75 font-sans flex gap-3">
            არ გაქვთ ანგარიში?{" "}
            <Link
              href="/registration"
              className="block text-[12px] text-purple-500 font-sans"
            >
              რეგისტრაცია
            </Link>
          </p>

          <input
            type="text"
            placeholder="Nickname"
            className="mt-7.5 h-10 max-w-78 w-full pl-2.5 border border-white rounded-[3px] bg-transparent text-white "
          />

          
            <input
              type="password"
              placeholder="Password"
              className="h-10 max-w-78 w-full rounded-xs border border-white my-5  pl-2.5 bg-transparent text-white"
            />

             <div className="mb-5 flex text-[12px] gap-2">
              <label className="flex items-center gap-1 text-gray-400  font-sans cursor-pointer">
                <input type="checkbox" className="w-3 h-3" />
                დამიმახსოვრე{" "}
              </label>
             
            </div>
            
            <button className="h-10 w-78 border border-white rounded-xs text-white bg-transparent">
              შესვლა
            </button>
          </div>
        </div>
      </div>
  
  );
};

export default Page;
