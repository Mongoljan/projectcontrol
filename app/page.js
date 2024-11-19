import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header Section */}
      <header className="flex items-center justify-between px-[15%] h-[80px] bg-blue-500">
        <div className="flex items-center space-x-4">
          <Image 
            src="https://lh6.googleusercontent.com/proxy/uCT5REi7Ogmqno9e08qzG8ALwU6ZciWybbtNV9pa0MTCbxRBowNQMHTBWQUs4CXMkSyu7CHB5CMfLaT1OaYj19bdrrGnJUTv8vace1UEWiE" 
            alt="Organization Logo" 
            width={350} 
            height={80} 
          />
          <Image 
            src="https://bida.ub.gov.mn/media/logo%20bosoo%20PNG.png" 
            alt="НБИХГ Logo" 
            width={100} 
            height={80} 
          />
        </div>
        <div className="text-white text-center">
          <h2 className="text-xl font-bold">Хакатон-2024</h2>
          <p className="text-sm italic">"Project Control"</p>
        </div>
      </header>

      {/* Title Section */}
      <div className="flex justify-center place-content-center">
      <div className="text-center py-20 mt-16 bg-white rounded-[30px] shadow-md w-[800px] h-[300px] ">
        <h1 className="text-[46px] font-bold">Хакатон - 2024</h1>
        <h2 className="text-2xl font-medium mt-4">Project Control</h2>
      </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-[500px]">
        <a href="/main" className="inline-block">
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-5 px-16 rounded-lg text-lg shadow-lg">
            Нэвтрэх
          </button>
        </a>
      </div>
    </div>
  );
}
