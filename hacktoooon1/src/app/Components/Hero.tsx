import Image from "next/image";
import React from "react";
 
import {
  FaBusinessTime,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Button from "../UI/Buttons/Button";
 


const SOCIAL_PROFILES = [
  { url: "#", logo: FaFacebookF, name: "Facebook" },
  { url: "#", logo: FaGithub, name: "Github" },
  { url: "#", logo: FaLinkedinIn, name: "LinkedIn" },
  { url: "#", logo: FaTwitter, name: "Twitter" },
];

const Hero = () => {
  return (
    <section className="py-16 xl:py-20">
      <div className="container w-[90%] max-w-screen-xl mx-auto">
        <div className="md:flex gap-10">
          {/* Content */}
          <div className="self-center max-w-2xl">
            <p className="font-heading font-bold text-headingText">Hello</p>
            <h1 className="text-5xl sm:max-md:text-6xl xl:text-7xl leading-tight mb-4">
              I&apos;m <span className="text-primary">Abdul Basit</span> FullStack
              Next Developer
            </h1>
            <p className="text-lg md:max-w-md">
              I love to create such things that people love. If you are looking
              for an experienced devloper, don&apos;t hesitate to contact me.
            </p>
            <div className="mt-7 flex gap-7">
              
            <PrimaryBtn>
                <div className="skew-x-6 inline-flex items-center gap-2">
                  <span>
                    <FaBusinessTime />
                  </span>
                  <span>Hire Me</span>
                </div>
              </PrimaryBtn>              <Button classes="self-center underline text-secondaryText hover:no-underline !p-0"><a href="/assests/cv/ab.pdf">
                See Resume</a>
              </Button>

            </div>
            <div className="flex items-center gap-x-7 mt-10">
              <h4>Follow Me:</h4>
              <ul className="flex item-center gap-x-4 ">
                {SOCIAL_PROFILES.map((item) => (
                  <li key={item.name}>
                    <a
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-secondaryText hover:bg-accent hover:text-white"
                      aria-label={item.name}
                      href={item.url}
                    >
                      {<item.logo />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image */}
          <div className="hidden md:block">
            <Image src="/b.jpg" alt="" width={694} height={470}  className="rounded-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;