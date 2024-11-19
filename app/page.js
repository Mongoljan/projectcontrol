import Image from "next/image";

export default function Home() {
  return (
    <div>

      <div className="flex px-[30%] justify-between">
        
  
      <Image 
        src="https://lh6.googleusercontent.com/proxy/OEXz491uVSzXWUlCtRhG0XYsFoD10MGbeSoa9hocLmPkXuFELtFHgAud_7bM6pQrvZ-h0bVUw3Qfn5TnOgL_grfFEpl4NGqNNQXy9tAOkOvQ-L4xh6cllztDEcZYfbN-7gv-Jl8" 
        alt="Image description" 
        width={100} 
        height={100} 
      />
      <Image 
      src="https://bida.ub.gov.mn/media/logo%20bosoo%20PNG.png"
      alt="НБИХГ"
      width={140}
      height={100}
  />
          </div>
          <div className="text-black flex justify-center mt-[50px] text-[42px]">
           <div> Хакатон -2024
           </div>
      
          </div>
          <div className="flex text-black text-[42px] justify-center mt-[40px]">
            Project Control
           </div>

<div className="flex justify-end mx-[15%]">
       <a href={"/main"}> <div className="button bg-blue-400 mt-[500px]  h-[50px] w-[200px] hover:bg-blue-600 text-[20px] rounded-lg text-center place-content-center ">
            
  Нэвтрэх
           </div>
           </a>   
           </div>
    </div>
  );
}
