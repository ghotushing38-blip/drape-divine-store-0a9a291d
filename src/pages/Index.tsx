import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Crown, Shield, Truck, Gift, TrendingUp, Award, Heart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import heroImage1 from "@/assets/hero-saree-1.jpg";
import heroImage2 from "@/assets/hero-saree-2.jpg";
import sareesilk from "@/assets/saree-silk-1.jpg";
import sareecotton from "@/assets/saree-cotton-1.jpg";
import sareedesigner from "@/assets/saree-designer-1.jpg";
import sareebanarasi from "@/assets/saree-banarasi-1.jpg";

const Index = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { 
      title: "Silk Sarees", 
      image: sareesilk, 
      description: "Luxurious pure silk drapes",
      gradient: "from-primary/20 to-royal/20"
    },
    { 
      title: "Cotton Sarees", 
      image: sareecotton, 
      description: "Breathable elegant comfort",
      gradient: "from-accent/20 to-secondary/20"
    },
    { 
      title: "Designer Sarees", 
      image: sareedesigner, 
      description: "Contemporary artistic fusion",
      gradient: "from-royal/20 to-accent/20"
    },
    { 
      title: "Banarasi Sarees", 
      image: sareebanarasi, 
      description: "Heritage handloom masterpiece",
      gradient: "from-secondary/20 to-primary/20"
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The silk saree's quality exceeded all expectations. Every thread speaks of luxury and craftsmanship. I felt like royalty!",
      location: "Mumbai",
      avatar: "PS"
    },
    {
      name: "Anita Verma",
      rating: 5,
      text: "Absolutely stunning collection! The attention to detail and personalized service made my shopping experience unforgettable.",
      location: "Delhi",
      avatar: "AV"
    },
    {
      name: "Lakshmi Iyer",
      rating: 5,
      text: "My Banarasi saree became the star of the wedding. The intricate work and rich colors are beyond compare!",
      location: "Bangalore",
      avatar: "LI"
    },
  ];

  const features = [
    {
      icon: Crown,
      title: "Premium Quality",
      description: "Handpicked finest fabrics and master craftsmanship",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Certified genuine products with quality guarantee",
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Swift nationwide shipping with tracking",
      color: "text-accent"
    },
    {
      icon: Gift,
      title: "Luxury Packaging",
      description: "Elegant presentation for special occasions",
      color: "text-royal"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Heart },
    { number: "5,000+", label: "Unique Designs", icon: Sparkles },
    { number: "100+", label: "Master Weavers", icon: Award },
    { number: "4.9/5", label: "Customer Rating", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      {/* Luxurious Hero Section */}
      <section className="relative h-screen overflow-hidden mt-16">
        <div className="absolute inset-0">
          {heroImages.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                idx === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt="Luxury Saree Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
              <div className="absolute inset-0 pattern-mandala opacity-30" />
            </div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <div className="flex items-center space-x-3 mb-6 animate-pulse">
              <Crown className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-semibold text-lg tracking-wider uppercase">Exclusive Collection 2025</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Where Tradition
              <span className="block shimmer-text text-7xl md:text-9xl my-2">
                Meets Luxury
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-primary-foreground/90 font-light leading-relaxed">
              Experience the finest handcrafted sarees that celebrate Indian heritage with contemporary elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="btn-rosegold text-xl px-12 py-8 h-auto group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  className="btn-outline-premium text-xl px-12 py-8 h-auto bg-card/10 backdrop-blur-md text-primary-foreground border-primary-foreground/40 hover:border-primary-foreground"
                >
                  <span>Our Heritage</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Elegant Hero Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentHeroIndex 
                  ? "w-16 bg-gradient-to-r from-secondary to-secondary-glow shadow-rosegold" 
                  : "w-8 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 pattern-silk bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-scale-in hover-lift p-6"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 text-secondary">
              <div className="h-px w-12 bg-secondary"></div>
              <Sparkles className="h-6 w-6" />
              <div className="h-px w-12 bg-secondary"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            The <span className="shimmer-text">SareeVastra</span> Promise
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Every piece tells a story of excellence, tradition, and unmatched quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-card border border-border hover-lift glass-effect animate-fade-in overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color === 'text-secondary' ? 'from-secondary/20 to-secondary/5' : feature.color === 'text-primary' ? 'from-primary/20 to-primary/5' : feature.color === 'text-accent' ? 'from-accent/20 to-accent/5' : 'from-royal/20 to-royal/5'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-10 w-10 ${feature.color}`} />
              </div>
              <h3 className="relative text-2xl font-serif font-bold mb-3">{feature.title}</h3>
              <p className="relative text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Luxurious Categories Section */}
      <section className="py-24 pattern-paisley bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-primary">
                <div className="h-px w-12 bg-primary"></div>
                <Crown className="h-6 w-6" />
                <div className="h-px w-12 bg-primary"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Curated <span className="shimmer-text">Collections</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              From timeless classics to contemporary masterpieces, discover sarees for every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, idx) => (
              <Link key={idx} to="/shop" className="group">
                <div 
                  className="product-card animate-slide-up h-full" 
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-primary-foreground p-6">
                      <h3 className="text-3xl font-serif font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{category.title}</h3>
                      <p className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{category.description}</p>
                      <Button variant="secondary" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-card to-muted/20">
                    <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-secondary">
                <div className="h-px w-12 bg-secondary"></div>
                <Heart className="h-6 w-6" />
                <div className="h-px w-12 bg-secondary"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Stories of <span className="shimmer-text">Elegance</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Hear from our delighted customers who've experienced the magic of SareeVastra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="glass-effect p-8 rounded-3xl hover-lift animate-scale-in relative overflow-hidden group"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed italic text-lg">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 pattern-silk">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-primary">
                <div className="h-px w-12 bg-primary"></div>
                <Award className="h-6 w-6" />
                <div className="h-px w-12 bg-primary"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Why <span className="shimmer-text">Choose Us</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              More than just sarees, we offer an experience of luxury and tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass-effect p-10 rounded-3xl hover-lift animate-slide-up group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <TrendingUp className="h-14 w-14 text-secondary mb-6 relative" />
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary relative">Artisan Partnership</h3>
              <p className="text-muted-foreground leading-relaxed text-lg relative">We collaborate directly with master weavers and artisans across India, ensuring fair trade practices while preserving centuries-old textile traditions.</p>
            </div>

            <div className="glass-effect p-10 rounded-3xl hover-lift animate-slide-up group relative overflow-hidden" style={{ animationDelay: "100ms" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <Shield className="h-14 w-14 text-primary mb-6 relative" />
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary relative">Quality Certification</h3>
              <p className="text-muted-foreground leading-relaxed text-lg relative">Every saree undergoes rigorous quality checks and comes with an authenticity certificate, guaranteeing genuine craftsmanship and premium materials.</p>
            </div>

            <div className="glass-effect p-10 rounded-3xl hover-lift animate-slide-up group relative overflow-hidden" style={{ animationDelay: "200ms" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <Package className="h-14 w-14 text-accent mb-6 relative" />
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary relative">Effortless Returns</h3>
              <p className="text-muted-foreground leading-relaxed text-lg relative">Your satisfaction is paramount. Enjoy hassle-free returns and exchanges within 7 days, with full refund guarantee and free return shipping.</p>
            </div>

            <div className="glass-effect p-10 rounded-3xl hover-lift animate-slide-up group relative overflow-hidden" style={{ animationDelay: "300ms" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <Gift className="h-14 w-14 text-royal mb-6 relative" />
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary relative">Premium Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-lg relative">From luxury packaging to personalized styling advice, we ensure every aspect of your shopping journey reflects our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grand CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-royal to-primary-dark"></div>
        <div className="absolute inset-0 pattern-mandala opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Crown className="h-20 w-20 text-secondary mx-auto mb-8 floating" />
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-primary-foreground leading-tight">
              Begin Your Journey to
              <span className="block text-6xl md:text-8xl mt-4 shimmer-text">
                Timeless Elegance
              </span>
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              Discover exquisite sarees that transform moments into cherished memories
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/shop">
                <Button size="lg" className="btn-rosegold text-xl px-14 py-8 h-auto group shadow-glow">
                  <span>Explore Collection</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="btn-outline-premium text-xl px-14 py-8 h-auto bg-primary-foreground/10 backdrop-blur-md text-primary-foreground border-2 border-primary-foreground/50"
                >
                  <span>Contact Us</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
