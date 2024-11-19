import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header Section */}
      <header className="flex items-center justify-between px-6 md:px-[10%] h-[80px] bg-blue-500 shadow-md">

          <Image 
            src="https://lh3.googleusercontent.com/proxy/hj9d6nm3IGCIEcosEHIv9OZn7X2g00h3BHZES2TYLnA86vkeVul3kQFXFtD_eZO7Mc1sQT67sjLUnxL2pq9RaAdh5Ra07iFaZcFma_mPLw" 
            alt="Organization Logo" 
            width={60} 
            height={80} 
          />
          <Image 
            src="https://bida.ub.gov.mn/media/logo%20bosoo%20PNG.png" 
            alt="НБИХГ Logo" 
            width={100} 
            height={80} 
          />
 
        <div className="text-white hidden md:block text-center">

        </div>
      </header>

      {/* Title Section */}
      <main className="flex flex-col items-center justify-center px-4 py-16 h-[80vh] mt-[80px]">
        <div className="text-center py-10 bg-white rounded-[10px] shadow-lg max-w-2xl w-full">
          <h1 className="text-[36px] md:text-[46px] font-bold">Хакатон - 2024</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-4">Project Control</h2>
          <div className="flex justify-center mt-12">
            <a href="/main" className="inline-block">
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-4 px-10 md:py-5 md:px-16 rounded-lg text-lg shadow-lg">
                Хүсэлт илгээх
              </button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-auto py-6 bg-blue-500 text-white text-center">
        <p className="text-sm">&copy; 2024 Бүх эрх хуулиар хамгаалагдсан.</p>
      </footer>
    </div>
  );
}
