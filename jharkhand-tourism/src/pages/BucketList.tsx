import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Circle, 
  Star, 
  MapPin, 
  Calendar, 
  Plus,
  Filter,
  Search,
  Trophy,
  Camera,
  Mountain,
  Utensils,
  Users,
  Clock
} from 'lucide-react';

const BucketList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const bucketListItems = [
    {
      id: 1,
      title: 'Watch Sunrise at Netarhat',
      category: 'nature',
      location: 'Netarhat Hills',
      difficulty: 'Easy',
      estimatedTime: '4 hours',
      completed: true,
      completedDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Experience the breathtaking sunrise from the Queen of Chotanagpur',
      credits: 100,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Trek to Hundru Falls',
      category: 'adventure',
      location: 'Ranchi',
      difficulty: 'Moderate',
      estimatedTime: '6 hours',
      completed: false,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Hike to one of Jharkhand\'s most spectacular waterfalls',
      credits: 150,
      rating: 4.6
    },
    {
      id: 3,
      title: 'Taste Authentic Dhuska',
      category: 'food',
      location: 'Ranchi',
      difficulty: 'Easy',
      estimatedTime: '2 hours',
      completed: true,
      completedDate: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Try the traditional deep-fried lentil pancake with spicy chutney',
      credits: 50,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Visit Parasnath Temple',
      category: 'culture',
      location: 'Giridih',
      difficulty: 'Challenging',
      estimatedTime: '8 hours',
      completed: false,
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Climb to the highest peak in Jharkhand and visit ancient Jain temples',
      credits: 200,
      rating: 4.9
    },
    {
      id: 5,
      title: 'Attend Sarhul Festival',
      category: 'culture',
      location: 'Various Villages',
      difficulty: 'Easy',
      estimatedTime: '1 day',
      completed: false,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Experience the vibrant tribal spring festival celebrating nature',
      credits: 300,
      rating: 5.0
    },
    {
      id: 6,
      title: 'Explore Betla National Park',
      category: 'wildlife',
      location: 'Palamu',
      difficulty: 'Moderate',
      estimatedTime: '2 days',
      completed: false,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Safari through dense forests to spot tigers, elephants, and leopards',
      credits: 250,
      rating: 4.7
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Star, count: bucketListItems.length },
    { id: 'nature', name: 'Nature', icon: Mountain, count: bucketListItems.filter(item => item.category === 'nature').length },
    { id: 'adventure', name: 'Adventure', icon: Trophy, count: bucketListItems.filter(item => item.category === 'adventure').length },
    { id: 'food', name: 'Food', icon: Utensils, count: bucketListItems.filter(item => item.category === 'food').length },
    { id: 'culture', name: 'Culture', icon: Users, count: bucketListItems.filter(item => item.category === 'culture').length },
    { id: 'wildlife', name: 'Wildlife', icon: Camera, count: bucketListItems.filter(item => item.category === 'wildlife').length }
  ];

  const filteredItems = bucketListItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completedCount = bucketListItems.filter(item => item.completed).length;
  const totalCredits = bucketListItems.filter(item => item.completed).reduce((sum, item) => sum + item.credits, 0);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      nature: Mountain,
      adventure: Trophy,
      food: Utensils,
      culture: Users,
      wildlife: Camera
    };
    return iconMap[category] || Star;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold gradient-text mb-4">
            My Bucket List
          </h1>
          <p className="text-xl text-gray-600">
            Track your Jharkhand adventures and earn rewards
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-jharkhand-green mb-2">
              {completedCount}/{bucketListItems.length}
            </div>
            <div className="text-gray-600">Completed Adventures</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div 
                className="bg-jharkhand-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedCount / bucketListItems.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-jharkhand-gold mb-2">
              {totalCredits}
            </div>
            <div className="text-gray-600">Credits Earned</div>
            <div className="text-sm text-gray-500 mt-1">
              Next reward at 1,000 credits
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-jharkhand-tribal mb-2">
              Explorer
            </div>
            <div className="text-gray-600">Current Level</div>
            <div className="text-sm text-gray-500 mt-1">
              2 more adventures to Pioneer
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search adventures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
              />
            </div>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Add Adventure</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeCategory === category.id
                      ? 'bg-jharkhand-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bucket List Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const CategoryIcon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card overflow-hidden ${item.completed ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <CategoryIcon className="h-4 w-4 text-jharkhand-green" />
                    </div>
                    {item.completed && (
                      <div className="bg-green-500 text-white rounded-full p-2">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-jharkhand-green text-white rounded-full px-3 py-1 text-sm font-semibold">
                    +{item.credits} credits
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-lg font-semibold ${item.completed ? 'text-green-600' : 'text-gray-800'}`}>
                      {item.title}
                    </h3>
                    <button className="text-gray-400 hover:text-jharkhand-green">
                      {item.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : (
                        <Circle className="h-6 w-6" />
                      )}
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {item.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {item.estimatedTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    {item.completed && item.completedDate && (
                      <div className="flex items-center text-xs text-green-600">
                        <Calendar className="h-3 w-3 mr-1" />
                        Completed {item.completedDate}
                      </div>
                    )}
                  </div>

                  {!item.completed ? (
                    <div className="flex space-x-2">
                      <button className="btn-primary flex-1 text-sm">
                        Start Adventure
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <MapPin className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-100 text-green-800 py-2 px-4 rounded-lg font-medium">
                        ✓ Completed
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Mountain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No adventures found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or category filters
            </p>
            <button className="btn-primary">
              Explore All Adventures
            </button>
          </div>
        )}

        {/* Achievement Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-heading font-bold gradient-text mb-6 text-center">
            Unlock Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'First Steps', description: 'Complete your first adventure', progress: 100, unlocked: true },
              { name: 'Explorer', description: 'Complete 5 adventures', progress: 60, unlocked: false },
              { name: 'Cultural Enthusiast', description: 'Visit 3 cultural sites', progress: 33, unlocked: false }
            ].map((achievement, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                achievement.unlocked ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.unlocked ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      achievement.unlocked ? 'bg-green-500' : 'bg-jharkhand-green'
                    }`}
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {achievement.progress}% Complete
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketList;
