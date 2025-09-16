import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Filter,
  Search,
  Bookmark,
  Share2,
  Music,
  Palette,
  Heart,
  Camera
} from 'lucide-react';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      name: 'Sarhul Festival',
      category: 'cultural',
      date: '2024-03-15',
      endDate: '2024-03-17',
      time: '6:00 AM',
      location: 'Various Tribal Villages',
      description: 'The most important festival of the tribal communities celebrating the spring season and worshipping nature.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 5000,
      rating: 4.9,
      highlights: ['Traditional Dance', 'Sal Tree Worship', 'Community Feast', 'Folk Music'],
      ticketPrice: 'Free',
      organizer: 'Jharkhand Tribal Council',
      featured: true
    },
    {
      id: 2,
      name: 'Karma Festival',
      category: 'cultural',
      date: '2024-08-20',
      endDate: '2024-08-22',
      time: '7:00 PM',
      location: 'Ranchi, Khunti, Gumla',
      description: 'Harvest festival dedicated to Karma tree, celebrated with traditional songs and dances.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 3500,
      rating: 4.7,
      highlights: ['Karma Dance', 'Traditional Songs', 'Village Fair', 'Local Crafts'],
      ticketPrice: 'Free',
      organizer: 'Cultural Heritage Society',
      featured: false
    },
    {
      id: 3,
      name: 'Jharkhand Adventure Festival',
      category: 'adventure',
      date: '2024-11-10',
      endDate: '2024-11-12',
      time: '8:00 AM',
      location: 'Netarhat Hills',
      description: 'Three-day adventure festival featuring trekking, rock climbing, and mountain biking competitions.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 1200,
      rating: 4.8,
      highlights: ['Trekking Competition', 'Rock Climbing', 'Mountain Biking', 'Adventure Sports'],
      ticketPrice: '₹500-2000',
      organizer: 'Adventure Sports Association',
      featured: true
    },
    {
      id: 4,
      name: 'Tusu Parab',
      category: 'cultural',
      date: '2024-01-14',
      endDate: '2024-01-15',
      time: '6:00 PM',
      location: 'Jamshedpur, Dhanbad',
      description: 'Traditional harvest festival celebrated with colorful processions and folk performances.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 2800,
      rating: 4.6,
      highlights: ['Colorful Processions', 'Folk Dance', 'Traditional Music', 'Local Delicacies'],
      ticketPrice: 'Free',
      organizer: 'District Cultural Committee',
      featured: false
    },
    {
      id: 5,
      name: 'Jharkhand Food Festival',
      category: 'food',
      date: '2024-12-05',
      endDate: '2024-12-07',
      time: '11:00 AM',
      location: 'Morabadi Ground, Ranchi',
      description: 'Celebrate the rich culinary heritage of Jharkhand with traditional dishes and cooking competitions.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 4200,
      rating: 4.5,
      highlights: ['Traditional Cuisine', 'Cooking Competitions', 'Food Stalls', 'Cultural Programs'],
      ticketPrice: '₹100-300',
      organizer: 'Jharkhand Tourism Board',
      featured: true
    },
    {
      id: 6,
      name: 'Tribal Art & Craft Fair',
      category: 'art',
      date: '2024-10-15',
      endDate: '2024-10-20',
      time: '10:00 AM',
      location: 'Tribal Research Institute, Ranchi',
      description: 'Showcase of traditional tribal art, crafts, and handloom products by local artisans.',
      image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 1800,
      rating: 4.4,
      highlights: ['Traditional Crafts', 'Handloom Products', 'Art Exhibitions', 'Artisan Workshops'],
      ticketPrice: '₹50',
      organizer: 'Tribal Research Institute',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: events.length },
    { id: 'cultural', name: 'Cultural', count: events.filter(e => e.category === 'cultural').length },
    { id: 'adventure', name: 'Adventure', count: events.filter(e => e.category === 'adventure').length },
    { id: 'food', name: 'Food', count: events.filter(e => e.category === 'food').length },
    { id: 'art', name: 'Art & Craft', count: events.filter(e => e.category === 'art').length }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeFilter === 'all' || event.category === activeFilter;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cultural': return Music;
      case 'adventure': return Camera;
      case 'food': return Heart;
      case 'art': return Palette;
      default: return Calendar;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold gradient-text mb-4">
            Cultural Events & Festivals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant culture and traditions of Jharkhand through festivals and events
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, festivals, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Advanced Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeFilter === category.id
                    ? 'bg-jharkhand-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {events.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group relative"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-jharkhand-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{formatDate(event.date)}</div>
                    <div className="text-xs opacity-90">{event.time}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
                    <button className="text-gray-400 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        {event.rating}
                      </div>
                    </div>
                    <span className="text-jharkhand-green font-semibold">
                      {event.ticketPrice}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">
            All Events
          </h2>
          <div className="space-y-6">
            {filteredEvents.map((event, index) => {
              const CategoryIcon = getCategoryIcon(event.category);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <CategoryIcon className="h-5 w-5 text-jharkhand-green" />
                            <span className="text-sm text-jharkhand-green font-medium capitalize">
                              {event.category}
                            </span>
                            {event.featured && (
                              <span className="bg-jharkhand-gold text-white px-2 py-1 rounded text-xs">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {event.name}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button className="p-2 text-gray-400 hover:text-red-500">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-500">
                            <Share2 className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-jharkhand-green">
                            <Bookmark className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <div>
                            <div>{formatDate(event.date)}</div>
                            {event.endDate && event.endDate !== event.date && (
                              <div className="text-xs">to {formatDate(event.endDate)}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees} attending
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-jharkhand-green/10 text-jharkhand-green rounded text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                            <span className="font-semibold">{event.rating}</span>
                          </div>
                          <span className="text-jharkhand-green font-semibold text-lg">
                            {event.ticketPrice}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Learn More
                          </button>
                          <button className="btn-primary">
                            {event.ticketPrice === 'Free' ? 'Register' : 'Book Tickets'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Event Calendar CTA */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-heading font-bold gradient-text mb-4">
            Never Miss an Event
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our event calendar and get notified about upcoming festivals and cultural events in Jharkhand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Subscribe to Calendar
            </button>
            <button className="btn-secondary">
              Download Event App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
