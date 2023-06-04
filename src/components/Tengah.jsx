import React from "react";

export default function Tengah() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col-reverse bg-gray-800 lg:flex-row items-center">
        <div className="lg:w-1/2 w-full bg-gray-800 text-white p-10">
          <h2 className="text-2xl">Abadikan Momen Anda</h2>
          <p className="mt-4">Kami menawarkan kemungkinan untuk mengabadikan momen Anda dan mengunggahnya ke galeri kami. Dengan layanan ini, Anda dapat dengan mudah mengakses galeri tersebut kapan saja yang Anda inginkan.</p>
        </div>
        <img className="lg:w-1/2 w-full" src='https://vin.my.id/tes1/assets/img/sowkes1.jpg' alt='Sowkes1' />
      </div>
      <div className="flex flex-col lg:flex-row bg-gray-800 items-center">
        <img className="lg:w-1/2 w-full" src='https://vin.my.id/tes1/assets/img/sowkes2.jpg' alt='Sowkes2' />
        <div className="lg:w-1/2 w-full bg-gray-800 text-white p-10">
          <h2 className="text-2xl">Akses Kapan Saja</h2>
          <p className="mt-4">Nikmati kemudahan akses setiap saat dengan layanan kami. Kami memahami betapa pentingnya fleksibilitas dan kenyamanan dalam mengakses informasi atau layanan yang Anda butuhkan.</p>
        </div>
      </div>
      <div className="flex flex-col-reverse bg-gray-800 lg:flex-row items-center">
        <div className="lg:w-1/2 w-full bg-gray-800 text-white p-10">
          <h2 className="text-2xl">Nikmati Kemudahannya</h2>
          <p className="mt-4">Kami memahami betapa berharganya momen-momen yang diabadikan dalam gambar, dan kami ingin memastikan bahwa Anda dapat menyimpannya dengan mudah dan aman.</p>
        </div>
        <img className="lg:w-1/2 w-full" src='https://vin.my.id/tes1/assets/img/sowkes3.jpg' alt='Sowkes3' />
      </div>
    </section>
  );
}
