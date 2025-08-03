import React, { useState } from "react";
import Container from "../components/Container";
import SecHead from "../components/SecHead";
import Navbar from "../components/Navbar";
import WaveBackground from "../components/lightswind/wave-background";

import { Galleria } from 'primereact/galleria';

// Imported images
import img1 from "../assets/3DImage/02.08.2025_22.40.11_REC.png";
import img2 from "../assets/3DImage/02.08.2025_22.40.43_REC.png";
import img3 from "../assets/3DImage/02.08.2025_22.41.30_REC.png";
import img4 from "../assets/3DImage/02.08.2025_22.42.22_REC.png";
import img5 from "../assets/3DImage/photo_2025-08-02_23-29-16.jpg";
import img6 from "../assets/3DImage/photo_2025-08-02_23-29-14.jpg";
import img7 from "../assets/3DImage/photo_2025-08-02_22-39-40.jpg";
import img8 from "../assets/3DImage/03.08.2025_15.32.35_REC.png";
import img9 from "../assets/3DImage/03.08.2025_15.31.43_REC.png";
import img10 from "../assets/3DImage/03.08.2025_15.32.11_REC.png";
import img11 from "../assets/3DImage/03.08.2025_15.32.55_REC.png";

export default function RecentWork() {
  // Define image array with item and thumbnail
  const images = [
    { itemImageSrc: img1, thumbnailImageSrc: img1, alt: "Image 1" },
    { itemImageSrc: img2, thumbnailImageSrc: img2, alt: "Image 2" },
    { itemImageSrc: img3, thumbnailImageSrc: img3, alt: "Image 3" },
    { itemImageSrc: img4, thumbnailImageSrc: img4, alt: "Image 4" },
    { itemImageSrc: img5, thumbnailImageSrc: img5, alt: "Image 5" },
    { itemImageSrc: img6, thumbnailImageSrc: img6, alt: "Image 6" },
    { itemImageSrc: img7, thumbnailImageSrc: img7, alt: "Image 7" },
    { itemImageSrc: img8, thumbnailImageSrc: img8, alt: "Image 8" },
    { itemImageSrc: img9, thumbnailImageSrc: img9, alt: "Image 9" },
    { itemImageSrc: img10, thumbnailImageSrc: img10, alt: "Image 10" },
    { itemImageSrc: img11, thumbnailImageSrc: img11, alt: "Image 11" }
  ];

  const responsiveOptions = [
    { breakpoint: '991px', numVisible: 4 },
    { breakpoint: '767px', numVisible: 3 },
    { breakpoint: '575px', numVisible: 1 }
  ];

  const itemTemplate = (item) => (
  <div className="w-full h-[250px] flex items-center justify-center bg-black">
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      className="h-full object-cover"
      style={{ maxWidth: '100%' }}
    />
  </div>
);


  const thumbnailTemplate = (item) => (
    <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%' }} />
  );

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <WaveBackground className="absolute top-0 left-0 w-full h-full z-0" />

      <Container>
        <Navbar />

        <div className="relative z-10 pb-20">
          <div className="pt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <SecHead
              title={
                <span className="text-[50px] ">
                  Recent Works
                </span>
              }
              description={
                <span className="text-[18px] text-white leading-relaxed">
                  PASSIONATE WEB DEVELOPER SKILLED IN HTML, CSS, BOOTSTRAP, JAVASCRIPT, AND REACT.I focus on crafting clean, responsive, and <br /> user-friendly interfaces with modular, maintainable code.
                  <br />
                  I value both design and structure, creating modern layouts that are accessible, mobile-first, and visually appealing.
                </span>
              }
            />

            {/* Galleria Section */}
            {/* Galleria Section */}
<div className="w-full md:w-[700px]">
  <div className="card  rounded-xl overflow-hidden shadow-lg ">
    <Galleria
      value={images}
      responsiveOptions={responsiveOptions}
      numVisible={3}
      style={{ width: '100%', height: '100%' }}
      item={itemTemplate}
      thumbnail={thumbnailTemplate}
      showThumbnails={true}
    />
  </div>
</div>

          </div>
        </div>
      </Container>
    </section>
  );
}
