import React from "react";
import { RxPaperPlane } from "react-icons/rx";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Card from "../UI/Card";
 

const Contact = () => {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="container w-[94%] max-w-screen-xl mx-auto">
        <Card classes="-mb-12 z-10 relative bg-white !shadow-2xl">
          <div className=" lg:flex justify-center px-6 md:px-8 py-20 gap-10 xl:gap-16">
            <div className="max-w-lg">
              <h2 className="text-5xl sm:max-md:text-3xl xl:text-5xl leading-tight mb-4 text-black">
                Let&apos;s Talk About{" "}
                <span className="text-primary">Your Project</span>
              </h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                dicta nesciunt tempore repellat obcaecati nobis aliquam
                recusandae cumque adipisci incidunt, veritatis, veniam ratione
                cum fugiat dignissimos minus neque asperiores at.
              </p>
            </div>
            <div className="basis-full max-w-lg max-lg:mt-12">
              <form action="https://formspree.io/f/xwkdkeqj" method="post" className="space-y-2">
                <div className="w-full"> 
               
                  <input
                    className=" bg-white outline-none w-full border-b py-4 font-medium focus:placeholder:text-primary focus:border-primary focus:text-primary placeholder:font-heading placeholder:font-semibold"
                    name="Name" id="name" type="text"
                    placeholder="Name*"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    className="  bg-white outline-none w-full border-b py-4 font-medium focus:placeholder:text-primary focus:border-primary focus:text-primary placeholder:font-heading placeholder:font-semibold"
                    name="Email" id="email" type="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                
                <div className="w-full flex gap-3">
                  
                  <div className="w-full">
                    <input
                      className="  bg-white outline-none w-full border-b py-4 font-medium focus:placeholder:text-primary focus:border-primary focus:text-primary placeholder:font-heading placeholder:font-semibold"
                      name="Subject" id="subject" type="text"
                      placeholder="Subject*"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    className="  bg-white outline-none w-full border-b py-4 font-medium focus:placeholder:text-primary focus:border-primary focus:text-primary placeholder:font-heading placeholder:font-semibold mb-5"
                    name="Massage" id="massage"    placeholder="Message*"
                  
                  ></textarea>
                </div>
                <PrimaryBtn>
                  <div className="skew-x-3 inline-flex items-center gap-2">
                    <span>Submit</span>
                    <span>
                      <RxPaperPlane />
                    </span>
                  </div>
                </PrimaryBtn>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;