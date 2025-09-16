import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  MapPin, 
  Star, 
  Clock, 
  DollarSign,
  Search,
  Filter,
  Heart,
  Share2,
  Phone,
  Navigation,
  Award,
  Leaf
} from 'lucide-react';

const FoodExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const foodItems = [
    {
      id: 1,
      name: 'Dhuska',
      category: 'traditional',
      description: 'Deep-fried lentil pancakes served with spicy aloo sabzi and chutney',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: '₹30-50',
      preparationTime: '30 mins',
      difficulty: 'Medium',
      ingredients: ['Black gram dal', 'Rice', 'Ginger', 'Green chili', 'Oil'],
      restaurants: [
        { name: 'Maa Durga Dhaba', location: 'Main Road, Ranchi', rating: 4.5, distance: '2.3 km' },
        { name: 'Traditional Taste', location: 'Circular Road, Ranchi', rating: 4.7, distance: '3.1 km' }
      ],
      culturalSignificance: 'Traditional breakfast dish popular during festivals'
    },
    {
      id: 2,
      name: 'Chilka Roti',
      category: 'traditional',
      description: 'Thin rice flour flatbread, crispy and light, perfect with dal or vegetables',
      image: 'https://images.unsplash.com/photo-1574653853027-5d3ba0c95d7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: '₹20-40',
      preparationTime: '20 mins',
      difficulty: 'Easy',
      ingredients: ['Rice flour', 'Water', 'Salt', 'Oil'],
      restaurants: [
        { name: 'Village Kitchen', location: 'Hatia, Ranchi', rating: 4.4, distance: '5.2 km' },
        { name: 'Tribal Taste', location: 'Doranda, Ranchi', rating: 4.6, distance: '4.8 km' }
      ],
      culturalSignificance: 'Staple food of tribal communities, especially during rice harvest'
    },
    {
      id: 3,
      name: 'Handia',
      category: 'beverages',
      description: 'Traditional fermented rice beer, mildly alcoholic and refreshing',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '₹50-80',
      preparationTime: '3-5 days',
      difficulty: 'Hard',
      ingredients: ['Rice', 'Ranu tablets', 'Water', 'Jaggery'],
      restaurants: [
        { name: 'Tribal Heritage Resort', location: 'Netarhat', rating: 4.2, distance: '65 km' },
        { name: 'Cultural Center', location: 'Khunti', rating: 4.0, distance: '45 km' }
      ],
      culturalSignificance: 'Sacred drink used in tribal ceremonies and festivals'
    },
    {
      id: 4,
      name: 'Rugra',
      category: 'vegetables',
      description: 'Wild mushrooms cooked with onions, garlic, and local spices',
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: '₹80-120',
      preparationTime: '25 mins',
      difficulty: 'Medium',
      ingredients: ['Wild mushrooms', 'Onions', 'Garlic', 'Turmeric', 'Red chili'],
      restaurants: [
        { name: 'Forest Flavors', location: 'Gumla', rating: 4.8, distance: '85 km' },
        { name: 'Wild Kitchen', location: 'Simdega', rating: 4.5, distance: '95 km' }
      ],
      culturalSignificance: 'Seasonal delicacy foraged from forests during monsoon'
    },
    {
      id: 5,
      name: 'Pittha',
      category: 'sweets',
      description: 'Steamed rice dumplings filled with jaggery and coconut',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '₹40-60',
      preparationTime: '45 mins',
      difficulty: 'Medium',
      ingredients: ['Rice flour', 'Jaggery', 'Coconut', 'Cardamom'],
      restaurants: [
        { name: 'Sweet Memories', location: 'Albert Ekka Chowk, Ranchi', rating: 4.3, distance: '1.8 km' },
        { name: 'Traditional Sweets', location: 'Firayalal, Ranchi', rating: 4.6, distance: '3.5 km' }
      ],
      culturalSignificance: 'Festival sweet prepared during Chhath and other celebrations'
    },
    {
      id: 6,
      name: 'Bamboo Shoot Curry',
      category: 'vegetables',
      description: 'Tender bamboo shoots cooked in aromatic tribal spices',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '₹70-100',
      preparationTime: '40 mins',
      difficulty: 'Hard',
      ingredients: ['Fresh bamboo shoots', 'Mustard oil', 'Panch phoron', 'Turmeric'],
      restaurants: [
        { name: 'Bamboo Grove Restaurant', location: 'Chaibasa', rating: 4.2, distance: '120 km' },
        { name: 'Tribal Delights', location: 'Saraikela', rating: 4.5, distance: '135 km' }
      ],
      culturalSignificance: 'Traditional Ho and Munda tribal dish with medicinal properties'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: foodItems.length },
    { id: 'traditional', name: 'Traditional', count: foodItems.filter(item => item.category === 'traditional').length },
    { id: 'vegetables', name: 'Vegetables', count: foodItems.filter(item => item.category === 'vegetables').length },
    { id: 'sweets', name: 'Sweets', count: foodItems.filter(item => item.category === 'sweets').length },
    { id: 'beverages', name: 'Beverages', count: foodItems.filter(item => item.category === 'beverages').length }
  ];

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold gradient-text mb-4">
            Local Food Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Jharkhand cuisine and traditional tribal delicacies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes, ingredients, or restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-jharkhand-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {food.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          {food.rating}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {food.price}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {food.preparationTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-red-500">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {food.description}
                  </p>

                  {/* Difficulty Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(food.difficulty)}`}>
                      {food.difficulty} to make
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Leaf className="h-4 w-4 mr-1 text-green-500" />
                      Traditional Recipe
                    </div>
                  </div>

                  {/* Cultural Significance */}
                  <div className="bg-jharkhand-green/5 rounded-lg p-3 mb-4">
                    <div className="flex items-center mb-1">
                      <Award className="h-4 w-4 text-jharkhand-green mr-2" />
                      <span className="text-sm font-medium text-jharkhand-green">Cultural Significance</span>
                    </div>
                    <p className="text-xs text-gray-600">{food.culturalSignificance}</p>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-1">
                      {food.ingredients.slice(0, 4).map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {food.ingredients.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{food.ingredients.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Restaurants */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Where to try:</h4>
                    <div className="space-y-2">
                      {food.restaurants.slice(0, 2).map((restaurant, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <div>
                            <div className="font-medium text-gray-800">{restaurant.name}</div>
                            <div className="text-gray-600 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {restaurant.location}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                              {restaurant.rating}
                            </div>
                            <div className="text-xs text-gray-500">{restaurant.distance}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="btn-primary flex-1 text-sm">
                      View Recipe
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Navigation className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Phone className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Food Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-heading font-bold gradient-text mb-2">
              Food Map of Jharkhand
            </h2>
            <p className="text-gray-600">
              Discover local restaurants and food stalls near you
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-jharkhand-green/20 to-jharkhand-forest/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-jharkhand-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Interactive Food Map
              </h3>
              <p className="text-gray-600 mb-4">
                Find restaurants, street food, and local eateries
              </p>
              <button className="btn-primary">
                Explore Food Map
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Sharing Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold gradient-text mb-4">
              Share Your Family Recipes
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Help preserve Jharkhand's culinary heritage by sharing traditional recipes passed down through generations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Submit Recipe
              </button>
              <button className="btn-secondary">
                Join Food Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodExplorer;
