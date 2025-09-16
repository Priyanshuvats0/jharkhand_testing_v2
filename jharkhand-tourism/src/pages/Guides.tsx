import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Languages, 
  Award, 
  MessageCircle, 
  Phone, 
  Calendar,
  Filter,
  Search,
  Heart,
  Shield,
  Camera
} from 'lucide-react';

const Guides: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('rating');

  const guides = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      location: 'Netarhat, Jharkhand',
      rating: 4.9,
      reviews: 156,
      experience: '8 years',
      languages: ['Hindi', 'English', 'Santhali'],
      specialties: ['Mountain Trekking', 'Cultural Tours', 'Photography'],
      price: '₹1,500/day',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      verified: true,
      description: 'Expert mountain guide with deep knowledge of Jharkhand\'s tribal culture and hidden trails.',
      availability: 'Available',
      responseTime: '< 1 hour',
      completedTrips: 234,
      badges: ['Eco-Friendly', 'Cultural Expert', 'Safety Certified']
    },
    {
      id: 2,
      name: 'Priya Devi',
      location: 'Ranchi, Jharkhand',
      rating: 4.8,
      reviews: 89,
      experience: '5 years',
      languages: ['Hindi', 'English', 'Bengali'],
      specialties: ['Waterfall Tours', 'Wildlife Safari', 'Local Cuisine'],
      price: '₹1,200/day',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      verified: true,
      description: 'Passionate about showcasing Jharkhand\'s natural beauty and authentic local experiences.',
      availability: 'Available',
      responseTime: '< 2 hours',
      completedTrips: 145,
      badges: ['Wildlife Expert', 'Food Guide', 'Female Friendly']
    },
    {
      id: 3,
      name: 'Suresh Oraon',
      location: 'Giridih, Jharkhand',
      rating: 4.7,
      reviews: 203,
      experience: '12 years',
      languages: ['Hindi', 'English', 'Oraon', 'Kurukh'],
      specialties: ['Spiritual Tours', 'Tribal Heritage', 'Rock Climbing'],
      price: '₹1,800/day',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      verified: true,
      description: 'Traditional guide specializing in spiritual journeys and authentic tribal experiences.',
      availability: 'Busy until Dec 25',
      responseTime: '< 3 hours',
      completedTrips: 312,
      badges: ['Cultural Heritage', 'Adventure Sports', 'Spiritual Guide']
    }
  ];

  const filterOptions = {
    specialties: ['Mountain Trekking', 'Cultural Tours', 'Photography', 'Waterfall Tours', 'Wildlife Safari', 'Spiritual Tours'],
    languages: ['Hindi', 'English', 'Bengali', 'Santhali', 'Oraon', 'Kurukh'],
    experience: ['< 3 years', '3-7 years', '> 7 years'],
    price: ['< ₹1,000', '₹1,000-1,500', '> ₹1,500']
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const getBadgeColor = (badge: string) => {
    const colors: { [key: string]: string } = {
      'Eco-Friendly': 'bg-green-100 text-green-800',
      'Cultural Expert': 'bg-purple-100 text-purple-800',
      'Safety Certified': 'bg-blue-100 text-blue-800',
      'Wildlife Expert': 'bg-orange-100 text-orange-800',
      'Food Guide': 'bg-red-100 text-red-800',
      'Female Friendly': 'bg-pink-100 text-pink-800',
      'Cultural Heritage': 'bg-indigo-100 text-indigo-800',
      'Adventure Sports': 'bg-yellow-100 text-yellow-800',
      'Spiritual Guide': 'bg-teal-100 text-teal-800'
    };
    return colors[badge] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold gradient-text mb-4">
            Local Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified local guides for authentic Jharkhand experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search guides by name, location, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="experience">Sort by Experience</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>

          {/* Filter Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(filterOptions).map(([category, options]) =>
              options.map(option => (
                <button
                  key={option}
                  onClick={() => toggleFilter(option)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedFilters.includes(option)
                      ? 'bg-jharkhand-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              {/* Guide Image */}
              <div className="relative">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {guide.verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </div>
                  )}
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    guide.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {guide.availability}
                  </div>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Guide Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{guide.name}</h3>
                    <p className="text-gray-600 flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {guide.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-semibold">{guide.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">({guide.reviews} reviews)</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {guide.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-jharkhand-green mr-2" />
                    <span>{guide.experience} exp.</span>
                  </div>
                  <div className="flex items-center">
                    <Languages className="h-4 w-4 text-jharkhand-green mr-2" />
                    <span>{guide.languages.length} languages</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 text-jharkhand-green mr-2" />
                    <span>{guide.completedTrips} trips</span>
                  </div>
                  <div className="text-jharkhand-green font-semibold">
                    {guide.price}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.badges.slice(0, 2).map((badge, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(badge)}`}
                    >
                      {badge}
                    </span>
                  ))}
                  {guide.badges.length > 2 && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{guide.badges.length - 2} more
                    </span>
                  )}
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {guide.specialties.slice(0, 2).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-jharkhand-green/10 text-jharkhand-green rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="btn-primary flex-1 text-sm py-2">
                    Book Now
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    Responds in {guide.responseTime}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-heading font-bold gradient-text mb-4">
              Want to become a guide?
            </h2>
            <p className="text-gray-600 mb-6">
              Share your local knowledge and earn by helping travelers discover Jharkhand
            </p>
            <button className="btn-primary">
              Apply as Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
