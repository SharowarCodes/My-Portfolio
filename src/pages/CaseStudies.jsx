import React from "react";
import Container from "../components/Container";
import SecHead from "../components/SecHead";
import Navbar from "../components/Navbar";
import WaveBackground from "../components/lightswind/wave-background";
import { SlidingLogoMarquee } from "../components/lightswind/sliding-logo-marquee";

// Image imports
import img1 from "../assets/3DImage/02.08.2025_22.40.11_REC.png";
import img2 from "../assets/3DImage/02.08.2025_22.40.43_REC.png";
import img3 from "../assets/3DImage/02.08.2025_22.41.30_REC.png";
import img4 from "../assets/3DImage/02.08.2025_22.42.22_REC.png";
import img5 from "../assets/3DImage/photo_2025-08-02_23-29-16.jpg";
import img6 from "../assets/3DImage/photo_2025-08-02_23-29-14.jpg";
import img7 from "../assets/3DImage/photo_2025-08-02_22-39-40.jpg";
import img8 from "../assets/3DImage/photo_2025-08-02_22-39-32.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function SecHeading() {
  // Map images to the format expected by SlidingLogoMarquee
  const imageItems = images.map((src, index) => ({
    id: `img-${index}`,
    content: (
      <div className="hover:scale-125 transition-transform duration-300">
        <img
          src={src}
          alt={`img-${index}`}
          className="h-full object-contain"
          draggable={false}
        />
      </div>
    ),
  }));

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background wave */}
      <WaveBackground className="absolute top-0 left-0 w-full h-full z-0" />
           <Container>
      {/* Navbar floating above all */}
      
        <Navbar />
      

      {/* Foreground section content */}
      <div className="relative z-10 pt-16 pb-20">
        <></>
          <SecHead
          
            title="Case Studies"
            description={
              <>
                Responsive UI, React components, Tailwind CSS, clean layouts.
                <br />
                Framer Motion animations, 3D effects, SVG waves, curved motion,
                shiny text.
                <br />
                Reusable structure, scroll interactions, split layout forms,
                GitHub integration.
                <br />
                React Router, modular design, visual depth, minimal design,
                deploy-ready code.
              </>
            }
          />
          <div className="mt-10">
            <SlidingLogoMarquee
              items={imageItems}
              speed={30}
              height="200px"
              enableBlur={true}
              blurIntensity={2}
              pauseOnHover={true}
              showGridBackground={false}
            />
          </div>
        
      </div>
      </Container>
    </section>
  );
}

