import React from 'react';
import { createClient } from 'next-sanity';
import Image from 'next/image'
 
import ServiceItem from './ServiceItem';
import tech from '../../../../sanity/tech';
const client = createClient({
  projectId: "72nw50uc",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export default async function Services() {
   const tech = await client.fetch(`*[_type == 'tech'] {
     title,
      desc,
   
   }`);
//   const response=await fetch(' ')
//   const services=(await response.json()).result
   console.log(tech);
 
  return (
  
      
        
        <section className="py-20 lg:py-24" id="services">
        <div className="container w-[91%] max-w-screen-xl mx-auto text-5xl ">
          <h2>
            I&apos;m <span className="text-primary ">Specialized</span> in:
          </h2>
          <div className="grid gap-7 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-12">
             {tech.map((item:any, i:any) => (
          
              <ServiceItem key={i} item={item}  />
            ))}
          </div>
        </div>
      </section>
     
  );
}
