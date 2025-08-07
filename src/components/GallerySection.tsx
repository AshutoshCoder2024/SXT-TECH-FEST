import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600",
    alt: "TechFest 2024 - Opening Ceremony",
    year: "2024",
    event: "Opening Ceremony"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600",
    alt: "Hackathon Teams Coding",
    year: "2024", 
    event: "24hr Hackathon"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600",
    alt: "AI Workshop Session",
    year: "2024",
    event: "AI Workshop"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600",
    alt: "Drone Competition",
    year: "2023",
    event: "Drone Quest"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600",
    alt: "Award Ceremony",
    year: "2023",
    event: "Awards Night"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600",
    alt: "Tech Expo Booths",
    year: "2023",
    event: "Tech Expo"
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
            Stellar Memories
          </h2>
          <p className="text-xl text-muted-foreground">
            Relive the magic from our previous cosmic adventures
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