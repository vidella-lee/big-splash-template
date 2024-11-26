"use client";

import { Button } from "@material-tailwind/react";
import { CTA } from "../types/types";

interface HeroProps {
  video?: string;
  title: string;
  heading?: string;
  subheading?: string;
  description?: string;
  cta?: CTA;
}

const Hero = ({
  video,
  title,
  // heading,
  // subheading,
  description,
  cta,
}: HeroProps) => {
  return (
    <>
      {/* <div className="fixed -z-4 bg-muddyGreen w-screen h-screen opacity-40"></div> */}
      <div
        className={`relative -z-10 flex flex-row lg:justify-end justify-center items-center w-screen max-w-full h-screen `}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full lg:w-1/2 p-10 lg:p-20 mt-64 lg:mt-20">
          <div className={`text-8xl  m-5 text-center`}>
            <h1 className="text-primary">{title}</h1>
          </div>
          <p
            className={`hero-description text-2xl p-5 text-center bg-white lg:bg-transparent rounded-3xl lg:rounded-none`}
          >
            {description}
          </p>
          <Button
            className="relative btn rounded-full bg-dark hover:bg-babyBlue m-5 py-5 px-10"
            size="lg"
            // variant="filled"
            // ripple={true}
            // fullWidth={true}
            // color="blue-gray"
          >
            {cta?.text}
          </Button>
        </div>
        <div className="absolute w-screen max-w-full h-screen overflow-hidden -z-5">
          {video ? (
            <video
              className="absolute"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Hero;
