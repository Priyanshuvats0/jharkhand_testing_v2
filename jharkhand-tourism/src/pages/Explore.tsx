import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Map, 
  Mountain, 
  Filter, 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Users,
  Eye,
  Download,
  Share2,
  Navigation
} from 'lucide-react';

const Explore: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'2d' | '3d' | 'ar'>('3d');

  const routes = [
    {
      id: 1,
      name: 'Netarhat Sunrise Trek',
      location: 'Netarhat Hills',
      difficulty: 'Moderate',
      duration: '6 hours',
      distance: '12 km',
      elevation: '1070m',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coordinates: [23.4667, 84.2667],
      highlights: ['Sunrise Point', 'Pine Forest', 'Valley Views'],
      bestTime: 'Oct-Mar'
    },
    {
      id: 2,
      name: 'Hundru Falls Adventure',
      location: 'Ranchi',
      difficulty: 'Easy',
      duration: '4 hours',
      distance: '8 km',
      elevation: '650m',
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coordinates: [23.4315, 85.6020],
      highlights: ['Waterfall', 'Rock Climbing', 'Photography'],
      bestTime: 'Jul-Sep'
    },
    {
      id: 3,
      name: 'Parasnath Sacred Trail',
      location: 'Giridih',
      difficulty: 'Challenging',
      duration: '8 hours',
      distance: '16 km',
      elevation: '1365m',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coordinates: [24.1667, 86.1667],
      highlights: ['Jain Temples', 'Highest Peak', 'Spiritual Journey'],
      bestTime: 'Nov-Feb'
    }
  ];

  const filters = {
    difficulty: ['Easy', 'Moderate', 'Challenging'],
    duration: ['< 4 hours', '4-8 hours', '> 8 hours'],
    features: ['Waterfall', 'Temple', 'Wildlife', 'Photography', 'Camping']
  };

  useEffect(() => {
    // Initialize 3D map here (Three.js/Cesium implementation would go here)
    if (mapRef.current) {
      // Placeholder for 3D map initialization
      console.log('Initializing 3D map...');
    }
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-heading font-bold gradient-text">
                Explore 3D Routes
              </h1>
              <p className="text-gray-600 mt-1">
                Discover Jharkhand's mountains in immersive 3D
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                {(['2d', '3d', 'ar'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === mode
                        ? 'bg-jharkhand-green text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {mode.toUpperCase()}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search routes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
                />
              </div>
              
              {/* Filter Button */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Routes List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-4">
                Available Routes ({routes.length})
              </h3>
              
              <div className="space-y-3">
                {routes.map((route) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedRoute(route)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      selectedRoute?.id === route.id
                        ? 'border-jharkhand-green bg-jharkhand-green/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={route.image}
                        alt={route.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 truncate">
                          {route.name}
                        </h4>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {route.location}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(route.difficulty)}`}>
                            {route.difficulty}
                          </span>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                            {route.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-96 lg:h-[600px] relative">
                <div
                  ref={mapRef}
                  className="w-full h-full bg-gradient-to-br from-jharkhand-green/20 to-jharkhand-forest/20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Mountain className="h-16 w-16 text-jharkhand-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3D Map Loading...
                    </h3>
                    <p className="text-gray-600">
                      Interactive 3D terrain map will render here
                    </p>
                    <div className="mt-4 flex justify-center space-x-2">
                      <div className="w-3 h-3 bg-jharkhand-green rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-jharkhand-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-jharkhand-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Navigation className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Eye className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Route Details */}
        {selectedRoute && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white rounded-xl shadow-sm p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-gray-800">
                      {selectedRoute.name}
                    </h2>
                    <p className="text-gray-600 flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedRoute.location}
                    </p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Mountain className="h-6 w-6 text-jharkhand-green mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-800">{selectedRoute.difficulty}</div>
                    <div className="text-xs text-gray-600">Difficulty</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Clock className="h-6 w-6 text-jharkhand-green mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-800">{selectedRoute.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Map className="h-6 w-6 text-jharkhand-green mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-800">{selectedRoute.distance}</div>
                    <div className="text-xs text-gray-600">Distance</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-jharkhand-green mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-800">{selectedRoute.reviews}</div>
                    <div className="text-xs text-gray-600">Reviews</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Route Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoute.highlights.map((highlight: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-jharkhand-green/10 text-jharkhand-green rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="btn-primary flex-1">
                    Start 3D Navigation
                  </button>
                  <button className="btn-secondary">
                    Download Offline
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Book Guide
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={selectedRoute.image}
                  alt={selectedRoute.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Best Time to Visit</span>
                    <span className="text-sm font-medium">{selectedRoute.bestTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Elevation</span>
                    <span className="text-sm font-medium">{selectedRoute.elevation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium ml-1">{selectedRoute.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Explore;
