import React from "react";
import Container from "../components/Container";
import { ShinyText } from "./lightswind/shiny-text";

export default function SecHeading({ title, description }) {
  return (
    <section className=" relative">
      <Container>
        <div className="text-left   max-w-3xl">
          {/* Title */}
          <ShinyText className="text-[80px]  font-bold mb-4">
          
            {title}
          
          </ShinyText>

          {/* Description */}
          <p className="text-[18px]  text-white leading-relaxed">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
