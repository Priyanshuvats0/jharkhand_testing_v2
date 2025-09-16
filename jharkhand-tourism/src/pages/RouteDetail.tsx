import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Mountain, 
  Star, 
  Users, 
  Camera,
  Download,
  Share2,
  Heart,
  Navigation,
  AlertTriangle,
  Thermometer,
  Eye,
  Wind
} from 'lucide-react';

const RouteDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock route data - in real app, this would be fetched based on ID
  const route = {
    id: 1,
    name: 'Netarhat Sunrise Trek',
    location: 'Netarhat Hills, Jharkhand',
    difficulty: 'Moderate',
    duration: '6 hours',
    distance: '12 km',
    elevation: '1070m',
    rating: 4.8,
    reviews: 234,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience the breathtaking sunrise from the Queen of Chotanagpur plateau. This moderate trek takes you through dense forests, rolling hills, and offers panoramic views of the surrounding landscape.',
    highlights: ['Sunrise Point', 'Pine Forest', 'Valley Views', 'Wildlife Spotting'],
    bestTime: 'October to March',
    startPoint: 'Netarhat Main Market',
    endPoint: 'Magnolia Point',
    waypoints: [
      { name: 'Netarhat Main Market', distance: '0 km', elevation: '1000m' },
      { name: 'Forest Entry Gate', distance: '2 km', elevation: '1020m' },
      { name: 'Pine Forest Trail', distance: '5 km', elevation: '1050m' },
      { name: 'Sunrise Viewpoint', distance: '8 km', elevation: '1070m' },
      { name: 'Magnolia Point', distance: '12 km', elevation: '1065m' }
    ],
    safetyTips: [
      'Start early (4:00 AM) to catch the sunrise',
      'Carry warm clothing as it gets cold at dawn',
      'Bring sufficient water and snacks',
      'Use proper trekking shoes',
      'Inform someone about your trekking plan'
    ],
    weather: {
      temperature: '18°C',
      condition: 'Clear Sky',
      visibility: '10 km',
      windSpeed: '8 km/h'
    },
    guides: [
      {
        name: 'Ramesh Kumar',
        rating: 4.9,
        experience: '8 years',
        price: '₹1,500/day',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'route', name: '3D Route' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'guides', name: 'Guides' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src={route.images[0]}
              alt={route.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-heading font-bold mb-2">{route.name}</h1>
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {route.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  {route.rating} ({route.reviews} reviews)
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6 flex space-x-2">
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Mountain className="h-8 w-8 text-jharkhand-green mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">{route.difficulty}</div>
                  <div className="text-sm text-gray-600">Difficulty</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-8 w-8 text-jharkhand-green mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">{route.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Navigation className="h-8 w-8 text-jharkhand-green mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">{route.distance}</div>
                  <div className="text-sm text-gray-600">Distance</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Mountain className="h-8 w-8 text-jharkhand-green mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">{route.elevation}</div>
                  <div className="text-sm text-gray-600">Max Elevation</div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-sm p-1 mb-8 flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-jharkhand-green text-white'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Route</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{route.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Route Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {route.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-jharkhand-green/10 text-jharkhand-green rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Trail Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Point:</span>
                          <span className="font-medium">{route.startPoint}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">End Point:</span>
                          <span className="font-medium">{route.endPoint}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Best Time:</span>
                          <span className="font-medium">{route.bestTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Current Weather</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Thermometer className="h-4 w-4 text-orange-500 mr-2" />
                            <span className="text-gray-600">Temperature:</span>
                          </div>
                          <span className="font-medium">{route.weather.temperature}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 text-blue-500 mr-2" />
                            <span className="text-gray-600">Visibility:</span>
                          </div>
                          <span className="font-medium">{route.weather.visibility}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Wind className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-gray-600">Wind Speed:</span>
                          </div>
                          <span className="font-medium">{route.weather.windSpeed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Route Waypoints</h2>
                  <div className="space-y-4">
                    {route.waypoints.map((waypoint, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-jharkhand-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">{waypoint.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{waypoint.distance}</span>
                            <span>{waypoint.elevation}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                    Safety Guidelines
                  </h2>
                  <ul className="space-y-2">
                    {route.safetyTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'route' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3D Route Visualization</h2>
                <div className="h-96 bg-gradient-to-br from-jharkhand-green/20 to-jharkhand-forest/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Mountain className="h-16 w-16 text-jharkhand-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Interactive 3D Route Map
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Explore the route in immersive 3D with elevation profiles and waypoints
                    </p>
                    <div className="flex space-x-4 justify-center">
                      <button className="btn-primary">
                        Launch 3D View
                      </button>
                      <button className="btn-secondary">
                        AR Navigation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  Start Navigation
                </button>
                <button className="w-full btn-secondary">
                  Download Offline
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Book Guide
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Guide</h3>
              {route.guides.map((guide, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{guide.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      {guide.rating} • {guide.experience}
                    </div>
                    <div className="text-sm font-semibold text-jharkhand-green">
                      {guide.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Weather Forecast</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Today</span>
                  <span className="font-semibold">18°C - 25°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tomorrow</span>
                  <span className="font-semibold">16°C - 23°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Day After</span>
                  <span className="font-semibold">19°C - 26°C</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ Perfect weather conditions for trekking
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar Routes</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Hundru Falls"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-800">Hundru Falls Trek</div>
                    <div className="text-sm text-gray-600">Moderate • 8 km</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Parasnath"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-800">Parasnath Summit</div>
                    <div className="text-sm text-gray-600">Challenging • 16 km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetail;
