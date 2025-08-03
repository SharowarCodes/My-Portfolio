import React from "react";
import WaveBackground from "./lightswind/wave-background";
import Container from "./Container";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 ">
      {/* Background */}
      <WaveBackground className="fixed top-0 left-0 w-full h-screen z-0" />

      {/* Foreground content */}
      <div className="relative z-10 ">
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </div>
    </div>
  );
}
