import React from 'react';
import Banner from "@/components/banner";
import { cn } from "@/lib/utils";

interface BannerProps {
  imgSrc: string;
  title: string;
  linkHref: string;
  alt?: string;
}

const Photography: React.FC<BannerProps> = ({ imgSrc, title, linkHref, alt }) => {
  return (
    <div>
    <main className="max-w-full px-2 md:px-4 lg:px-6">
    <section>
      <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/20221105-R0012519.jpg" title="Landscapes" linkHref="/landscapes" alt="peak of Mount Ioudake"/>
    </section>
    <section className="mt-2">
    <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/molly-porter-K7oqWgDJQ6E-unsplash.jpg" title="Street Photography" linkHref="/street-photography" alt="street"/>
      </section>
    </main>
  </div>

  );
}

export default Photography;



