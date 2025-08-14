import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


import pe1 from '../assets/past-event/TEchkriti.jpg';
import pe2 from '../assets/past-event/techkriti2.jpg';
import pe3 from '../assets/past-event/game.jpg';
import pe4 from '../assets/past-event/build-with-ai.jpg';
import pe5 from '../assets/past-event/AI-workshop.jpg';
import pe6 from '../assets/past-event/sciencefair.jpg';



const galleryImages = [
  {
    id: 1,
    src: pe1,
    alt: "TechKriti-2024",
    year: "2024",
    event: "TechKriti-2024"
  },
  {
    id: 2,
    src: pe2,
    alt: "TechKriti",
    year: "2024", 
    event: "TechKriti"
  },
  {
    id: 3,
    src: pe3,
    alt: "Game-Development Workshop",
    year: "2024",
    event: "Game-Development Workshop"
  },
  {
    id: 4,
    src: pe4,
    alt: "Build With AI-Workshop",
    year: "2025",
    event: "Build With AI-Workshop"
  },
  {
    id: 5,
    src: pe5,
    alt: "Build With AI-Workshop",
    year: "2025",
    event: "Build With AI-Workshop"
  },
  {
    id: 6,
    src: pe6,
    alt: "Science Fair ",
    year: "2025",
    event: "Science Fair"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].id);
  };

  return (
    <section id="stellar-memories" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
             Memories
          </h2>
          <p className="text-xl text-muted-foreground">
             A look back at the best moments from past events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl cosmic-glass cursor-pointer cosmic-glow"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-video relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-accent font-semibold">{image.year}</div>
                    <div className="text-lg font-bold text-foreground">{image.event}</div>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 cosmic-glass px-3 py-1 rounded-full text-sm font-semibold text-primary">
                  {image.year}
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="cosmic-glass p-3 rounded-full">
                    <div className="text-2xl">🔍</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-foreground hover:text-primary transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 cosmic-glass p-3 rounded-full hover:scale-110 transition-transform z-10"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cosmic-glass p-3 rounded-full hover:scale-110 transition-transform z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="cosmic-glass rounded-xl overflow-hidden">
                <img 
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-accent font-semibold">{galleryImages[currentIndex].year}</div>
                      <div className="text-xl font-bold text-foreground">{galleryImages[currentIndex].event}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentIndex + 1} / {galleryImages.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;