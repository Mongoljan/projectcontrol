'use client'
import Image from "next/image";
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function Home() {
  const [insurance, setInsurance] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [video, setVideo] = useState(null);
  const [images, setImages] = useState([]);


  const handleVideoUpload = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("insurance", insurance);
    formData.append("policeStation", policeStation);
    formData.append("video", video);
  
    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });
  
    // Submit formData to the server using fetch or axios
    console.log([...formData.entries()]);
  };
  

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between px-[5px] lg:px-[15%] h-[80px] bg-blue-500">
        <div className="flex items-center ">
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
        </div>
        <div className="text-white text-center">
          <h2 className="text-xl font-bold">Хакатон-2024</h2>
          <p className="text-sm italic">"Project Control"</p>
        </div>
      </header>

      {/* Main Content */}
      <a href={"./"}>
      <div className="text-black flex underline " >
      <IoArrowBackCircleSharp className="mt-1 text-[20px]" />    Нүүр хуудас
      </div>
      </a>
      <main className="py-16 lg:px-[15%] px-[10px] min-h-[75vh]">
        <h1 className="text-black text-4xl font-bold text-center">Ослын талаарх хүсэлт</h1>
        <p className="text-gray-700 text-center mt-4">
        Осол, аваартай холбоотой бичлэгийг оруулна уу?
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-12 bg-white p-8 rounded-[20px] shadow-md">
          {/* Video Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="video">
              Ослын талаарх бичлэг 
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleVideoUpload}
              className="block w-full border rounded p-2"
            />
          </div>
          {video && (
  <video controls className="mt-4">
    <source src={URL.createObjectURL(video)} type={video.type} />
  </video>
)}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Ослын талаарх зургууд
            </label>
            <input
  type="file"
  id="image"
  accept="image/*"
  multiple
  onChange={(e) => setImages(Array.from(e.target.files))}
  className="block w-full border rounded p-2 "
/>

{images.length > 0 &&
  images.map((img, idx) => (
    <img
      key={idx}
      src={URL.createObjectURL(img)}
      alt={`Uploaded ${idx}`}
      className="mt-4 w-32 h-32 object-cover"
    />
  ))}


          </div>

          {/* Insurance Dropdown */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="insurance">
              Даатгалын компани сонгох
            </label>
            <select
              id="insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="block w-full border rounded p-2 text-black"
            >
              <option value="">-- Даатгалын компани сонгох --</option>
              <option value="Монгол даатгал">Монгол даатгал</option>
              <option value="Миг даатгал">Миг даатгал</option>
              <option value="УБ даатгал">УБ даатгал</option>
              <option value="Мандал даатгал">Мандал даатгал</option>
              <option value="Ард даатгал">Ард даатгал</option>
              <option value="Тэнгэр даатгал">Тэнгэр даатгал</option>
              <option value="Богд даатгал">Богд даатгал</option>
            </select>
          </div>

          {/* Police Station Dropdown */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2 " htmlFor="policeStation">
              Замын цагдаагийн хэлтэс
            </label>
            <select
              id="policeStation"
              value={policeStation}
              onChange={(e) => setPoliceStation(e.target.value)}
              className="block w-full border rounded p-2 text-black"
            >
              <option value="">-- Цагдаагийн газар сонгох --</option>
              <option value="БЗД ЗЦГ">БЗД ЗЦГ</option>
              <option value="БГД ЗЦГ">БГД ЗЦГ</option>
              <option value="СБД ЗЦГ">СБД ЗЦГ</option>
              <option value="СХД ЗЦГ">СХД ЗЦГ</option>
              <option value="ЧД ЗЦГ">ЧД ЗЦГ</option>
              <option value="Налайх ЗЦГ">Налайх ЗЦГ</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="Unelgee">
              Үнэлгээний газар 
            </label>
            <select
              id="Unelgee"
              value={policeStation}
              onChange={(e) => setPoliceStation(e.target.value)}
              className="block text-black w-full border rounded p-2"
            >
              <option value="">-- Үнэлгээний газар сонгох --</option>
              <option className="text-black" value="Khasunelgee ">Хас үнэлгээ</option>
              <option className="text-black" value="Ashidunelgee">Ашид үнэлгээ</option>
              <option className="text-black" value="Sundunelgee">Сүнд үнэлгээ</option>
              <option className="text-black" value="Tentsverunelgee">Тэнцвэр үнэлгээ</option>
              <option className="text-black" value="Ontsgoiungelgee">Онцгой үнэлгээ</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Илгээх
            </button>
          </div>
        </form>
      </main>

      {/* Footer Section */}
      <footer className="mt-[150px] bg-blue-500 py-4 text-center text-white">
        <p className="text-sm">&copy; 2024 Замын Хөдөлгөөний Нэгдсэн Мэдээллийн Сан. Бүх эрх хуулиар хамгаалагдсан.</p>
      </footer>
    </div>
  );
}
