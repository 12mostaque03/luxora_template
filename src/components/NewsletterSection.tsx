
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-6">
          Stay in the Loop
        </h2>
        <p className="font-inter text-lg text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Be the first to discover new collections, exclusive offers, and style inspiration. 
          Join our community of fashion enthusiasts.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-white focus:ring-white font-inter"
              required
            />
            <Button
              type="submit"
              className="bg-white text-neutral-900 hover:bg-neutral-100 font-inter font-semibold px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
              disabled={isSubscribed}
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </div>
        </form>

        {/* Success Message */}
        {isSubscribed && (
          <p className="font-inter text-green-400 mt-4 animate-fade-in-up">
            Thank you for subscribing! Welcome to the LUXORA community.
          </p>
        )}

        {/* Privacy Note */}
        <p className="font-inter text-xs text-neutral-400 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
