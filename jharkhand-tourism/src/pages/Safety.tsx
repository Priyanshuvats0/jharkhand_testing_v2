import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Cloud, 
  Thermometer,
  Wind,
  Eye,
  Clock,
  Users,
  Heart,
  Zap,
  Navigation,
  Wifi,
  Battery
} from 'lucide-react';

const Safety: React.FC = () => {
  const [sosPressed, setSosPressed] = useState(false);
  const [sosTimer, setSosTimer] = useState(0);
  const [weatherData, setWeatherData] = useState({
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 8
  });

  const emergencyContacts = [
    { name: 'Police Control Room', number: '100', type: 'police' },
    { name: 'Fire Brigade', number: '101', type: 'fire' },
    { name: 'Ambulance', number: '108', type: 'medical' },
    { name: 'Tourist Helpline', number: '1363', type: 'tourist' },
    { name: 'Disaster Management', number: '1077', type: 'disaster' }
  ];

  const safetyTips = [
    {
      category: 'Trekking Safety',
      icon: Shield,
      tips: [
        'Always inform someone about your trekking plans',
        'Carry sufficient water and emergency food',
        'Use proper trekking gear and footwear',
        'Check weather conditions before starting',
        'Trek in groups, never alone'
      ]
    },
    {
      category: 'Weather Awareness',
      icon: Cloud,
      tips: [
        'Monitor weather forecasts regularly',
        'Avoid trekking during monsoon season',
        'Carry rain gear and warm clothing',
        'Be aware of flash flood risks near rivers',
        'Seek shelter during thunderstorms'
      ]
    },
    {
      category: 'Wildlife Encounters',
      icon: Eye,
      tips: [
        'Maintain safe distance from wild animals',
        'Do not feed or provoke wildlife',
        'Make noise while walking in forests',
        'Carry a whistle or noise maker',
        'Know basic first aid for animal bites'
      ]
    },
    {
      category: 'Health Precautions',
      icon: Heart,
      tips: [
        'Carry a well-stocked first aid kit',
        'Stay hydrated and eat regularly',
        'Know your physical limitations',
        'Carry prescribed medications',
        'Be aware of altitude sickness symptoms'
      ]
    }
  ];

  const nearbyFacilities = [
    {
      name: 'Ranchi Medical College',
      type: 'Hospital',
      distance: '15 km',
      contact: '+91-651-2450145',
      available: '24/7'
    },
    {
      name: 'Netarhat Police Station',
      type: 'Police',
      distance: '8 km',
      contact: '+91-6562-255020',
      available: '24/7'
    },
    {
      name: 'Forest Department Office',
      type: 'Forest Office',
      distance: '5 km',
      contact: '+91-6562-255030',
      available: '9 AM - 6 PM'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sosPressed && sosTimer < 3) {
      interval = setInterval(() => {
        setSosTimer(prev => prev + 0.1);
      }, 100);
    } else if (sosTimer >= 3) {
      // Trigger SOS
      handleSOSActivation();
      setSosPressed(false);
      setSosTimer(0);
    }
    return () => clearInterval(interval);
  }, [sosPressed, sosTimer]);

  const handleSOSPress = () => {
    setSosPressed(true);
    setSosTimer(0);
  };

  const handleSOSRelease = () => {
    setSosPressed(false);
    setSosTimer(0);
  };

  const handleSOSActivation = () => {
    // In a real app, this would send location and emergency alert
    alert('SOS Activated! Emergency services have been notified with your location.');
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'police': return Shield;
      case 'fire': return Zap;
      case 'medical': return Heart;
      case 'tourist': return MapPin;
      case 'disaster': return AlertTriangle;
      default: return Phone;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold gradient-text mb-4">
            Safety Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our priority. Stay informed and prepared for your Jharkhand adventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emergency SOS */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Emergency SOS
              </h2>
              
              <div className="text-center">
                <div className="relative mb-4">
                  <button
                    onMouseDown={handleSOSPress}
                    onMouseUp={handleSOSRelease}
                    onTouchStart={handleSOSPress}
                    onTouchEnd={handleSOSRelease}
                    className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-100 ${
                      sosPressed ? 'bg-red-600 scale-95' : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    SOS
                  </button>
                  {sosPressed && (
                    <div className="absolute inset-0 rounded-full border-4 border-red-300">
                      <div 
                        className="absolute inset-0 rounded-full bg-red-200 opacity-50"
                        style={{ 
                          transform: `scale(${sosTimer / 3})`,
                          transition: 'transform 0.1s ease-out'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Hold for 3 seconds to activate emergency alert
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${(sosTimer / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Current Weather */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Cloud className="h-5 w-5 text-blue-500 mr-2" />
                Current Weather
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-orange-500 mr-2" />
                    <span>Temperature</span>
                  </div>
                  <span className="font-semibold">{weatherData.temperature}°C</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Condition</span>
                  </div>
                  <span className="font-semibold">{weatherData.condition}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Wind Speed</span>
                  </div>
                  <span className="font-semibold">{weatherData.windSpeed} km/h</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 text-green-500 mr-2" />
                    <span>Visibility</span>
                  </div>
                  <span className="font-semibold">{weatherData.visibility} km</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ Weather conditions are favorable for outdoor activities
                </p>
              </div>
            </div>

            {/* Device Status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Device Status
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Battery className="h-5 w-5 text-green-500 mr-2" />
                    <span>Battery</span>
                  </div>
                  <span className="font-semibold text-green-600">85%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wifi className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Network</span>
                  </div>
                  <span className="font-semibold text-blue-600">Strong</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Navigation className="h-5 w-5 text-purple-500 mr-2" />
                    <span>GPS</span>
                  </div>
                  <span className="font-semibold text-purple-600">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Emergency Contacts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Emergency Contacts
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => {
                  const Icon = getContactIcon(contact.type);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <Icon className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.number}</p>
                        </div>
                      </div>
                      <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        <Phone className="h-4 w-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Safety Guidelines
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyTips.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center mb-3">
                        <Icon className="h-5 w-5 text-jharkhand-green mr-2" />
                        <h3 className="font-semibold text-gray-800">{section.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-jharkhand-green rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Nearby Facilities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Nearby Emergency Facilities
              </h2>
              
              <div className="space-y-4">
                {nearbyFacilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{facility.name}</h3>
                        <p className="text-sm text-gray-600">{facility.type} • {facility.distance}</p>
                        <p className="text-xs text-green-600">{facility.available}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        <Navigation className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Safety Checklist */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Pre-Trip Safety Checklist
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Inform family/friends about your plans',
                  'Check weather forecast',
                  'Pack first aid kit',
                  'Carry sufficient water',
                  'Download offline maps',
                  'Charge all devices',
                  'Pack emergency food',
                  'Wear appropriate clothing',
                  'Carry emergency whistle',
                  'Know emergency contacts'
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-jharkhand-green focus:ring-jharkhand-green" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
