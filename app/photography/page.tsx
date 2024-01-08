import React from 'react';
import Banner from "@/components/banner";

const Photography: React.FC = () => {
  return (
    <div>
      <main className="max-w-full px-2 md:px-4 lg:px-6">
        <section>
          <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/20221105-R0012519.jpg" title="Landscapes" linkHref="/photography/landscapes" alt="peak of Mount Ioudake" />
        </section>
        <section className="mt-2">
          <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/molly-porter-K7oqWgDJQ6E-unsplash.jpg" title="Street Photography" linkHref="/street-photography" alt="street" />
        </section>
      </main>
    </div>
  );
}

export default Photography;
