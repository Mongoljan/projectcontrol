import Image from "next/image";

export default function Home() {
  return (
    <div>
              <div className="flex px-[15%] justify-between h-[80px] bg-blue-500">

<div className="flex">
               <Image 
        src="https://lh6.googleusercontent.com/proxy/uCT5REi7Ogmqno9e08qzG8ALwU6ZciWybbtNV9pa0MTCbxRBowNQMHTBWQUs4CXMkSyu7CHB5CMfLaT1OaYj19bdrrGnJUTv8vace1UEWiE" 
        alt="Image description" 
        width={350} 
        height={80} 
      />
      <Image 
      src="https://bida.ub.gov.mn/media/logo%20bosoo%20PNG.png"
      alt="НБИХГ"
      width={100}
      height={80}
  /> 
  </div>
<div className="flex justify-around">
<div className="place-content-center">
  <div>
    Хакатон-2024


  </div>
  <div>
    "Project Control"
  </div>
            
  </div>
 <div className="text-start w-[400px] text-[26px]">
    Замын хөдөлгөөний нэгдсэн мэдээллийн сан

 </div>

</div>
</div>
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


    </div>
  );
}
