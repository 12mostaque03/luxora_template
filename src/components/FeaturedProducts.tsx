
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cashmere Blend Sweater",
      price: 299,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Clothing"
    },
    {
      id: 2,
      name: "Minimalist Watch",
      price: 425,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      price: 189,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Silk Scarf Collection",
      price: 125,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Accessories"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Featured Collection
          </h2>
          <p className="font-inter text-lg text-neutral-600 max-w-2xl mx-auto">
            Handpicked pieces that embody timeless elegance and contemporary sophistication
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-sm mb-4 bg-neutral-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Quick Add Button */}
                <Button
                  size="sm"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-neutral-900 hover:bg-neutral-100 font-inter font-medium"
                >
                  Quick Add
                </Button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="font-inter text-xs uppercase tracking-wider text-neutral-500">
                  {product.category}
                </p>
                <h3 className="font-inter text-base font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="font-inter text-lg font-semibold text-neutral-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="font-inter font-medium border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 px-8 py-6 h-auto"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
