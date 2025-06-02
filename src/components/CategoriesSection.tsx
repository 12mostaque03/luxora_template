
const CategoriesSection = () => {
  const categories = [
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium apparel for every occasion",
      link: "#clothing"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Curated pieces to complete your look",
      link: "#accessories"
    },
    {
      name: "Skincare",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury skincare for radiant beauty",
      link: "#skincare"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Shop by Category
          </h2>
          <p className="font-inter text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed to elevate your lifestyle
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.link}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Category Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Category Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {category.name}
                </h3>
                <p className="font-inter text-sm text-white/90 transform transition-all duration-300 group-hover:translate-y-[-4px] group-hover:text-white">
                  {category.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="font-inter text-sm font-medium">Explore →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
