import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  MapPin, 
  Users, 
  Award, 
  Camera, 
  Compass, 
  Star,
  ArrowRight,
  Play,
  Globe,
  Smartphone,
  Shield
} from 'lucide-react';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const features = [
    {
      icon: Globe,
      title: '3D Mountain Routes',
      description: 'Explore Jharkhand\'s peaks in immersive 3D with AR/VR support',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Local Guides',
      description: 'Connect with certified local guides for authentic experiences',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Gamified Rewards',
      description: 'Earn credits by discovering and sharing hidden gems',
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions based on your preferences',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Real-time weather, SOS features, and safety guidelines',
      color: 'bg-red-500'
    },
    {
      icon: Camera,
      title: 'Community Driven',
      description: 'Share experiences and discover through community content',
      color: 'bg-pink-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Hidden Spots' },
    { number: '200+', label: 'Local Guides' },
    { number: '50+', label: '3D Routes' },
    { number: '10K+', label: 'Happy Travelers' }
  ];

  const popularDestinations = [
    {
      name: 'Netarhat Hills',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      difficulty: 'Moderate',
      duration: '2-3 days',
      rating: 4.8
    },
    {
      name: 'Hundru Falls',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      difficulty: 'Easy',
      duration: '1 day',
      rating: 4.6
    },
    {
      name: 'Parasnath Hills',
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      difficulty: 'Challenging',
      duration: '3-4 days',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
          <div className="w-full h-full bg-gradient-to-br from-jharkhand-green via-jharkhand-lightgreen to-jharkhand-forest"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Discover
              <span className="block bg-gradient-to-r from-jharkhand-gold to-jharkhand-sunset bg-clip-text text-transparent">
                Hidden Jharkhand
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore untouched mountains, connect with local communities, and experience 
              Jharkhand's rich cultural heritage through immersive 3D adventures
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/explore"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <Globe className="h-5 w-5" />
              <span>Start Exploring</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="glass-effect text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-white/20 transition-all">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-jharkhand-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-jharkhand-gold/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-jharkhand-sunset/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
              Why Choose Jharkhand Tourism?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of technology and tradition with our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 group hover:scale-105"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Discover the most loved spots by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span className="flex items-center space-x-1">
                      <Mountain className="h-4 w-4" />
                      <span>{destination.difficulty}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Compass className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </span>
                  </div>
                  <Link
                    to={`/route/${index + 1}`}
                    className="btn-primary w-full text-center"
                  >
                    Explore Route
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of explorers discovering the hidden gems of Jharkhand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore" className="btn-secondary text-lg px-8 py-4">
                Explore 3D Routes
              </Link>
              <Link to="/guides" className="glass-effect px-8 py-4 rounded-lg hover:bg-white/20 transition-all">
                Find Local Guides
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
