
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-neutral-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="LUXORA Collection"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Elevate Your
            <span className="block">Style</span>
          </h1>
          <p className="font-inter text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our curated collection of premium fashion, accessories, and lifestyle products crafted for the modern connoisseur.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-neutral-900 hover:bg-neutral-100 font-inter font-semibold text-base px-8 py-6 h-auto animate-fade-in-up transition-all duration-300 hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            Shop Collection
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
