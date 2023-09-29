import React from 'react';
import PhotoGrid from "@/components/photo-grid";

const Landscapes = () => {
  const photosData = [
    { imgSrc: "https://storage.googleapis.com/photo-portfolio/jared-verdi-PNKwdJ8WetM-unsplash.jpg", title: "Title 1", linkHref: "/link1" },
    { imgSrc: "https://storage.googleapis.com/photo-portfolio/mohammad-alizade-62t_kKa2YlA-unsplash.jpg", title: "Title 2", linkHref: "/link2" },
    { imgSrc: "https://storage.googleapis.com/photo-portfolio/neom-AGZgrNeq7Kg-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
    { imgSrc: "https://storage.googleapis.com/photo-portfolio/milo-weiler-4keNyNXEoqI-unsplash.jpg",  width: 720,
    height: 1080, title: "Title 3", linkHref: "/link3" },
    { imgSrc: "https://storage.googleapis.com/photo-portfolio/lustig-photography-1vPblXnxhds-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
    { imgSrc: "https://storage.googleapis.com/photo-portfolio/bailey-zindel-NRQV-hBF10M-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
  ];

  return (
    <PhotoGrid photos={photosData} />
  );
}

export default Landscapes;



