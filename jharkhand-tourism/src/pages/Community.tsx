import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Camera, 
  MapPin, 
  Calendar,
  Trophy,
  Star,
  Plus,
  Filter,
  Search,
  Bookmark,
  Eye
} from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      user: {
        name: 'Anita Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        level: 'Explorer',
        points: 1250
      },
      content: 'Just discovered this hidden waterfall near Netarhat! The trek was challenging but absolutely worth it. The local guide Ramesh was amazing! 🏔️✨',
      images: ['https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      location: 'Netarhat Hills',
      timestamp: '2 hours ago',
      likes: 45,
      comments: 12,
      shares: 8,
      tags: ['waterfall', 'hidden-gem', 'trekking'],
      credits: 50
    },
    {
      id: 2,
      user: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        level: 'Pioneer',
        points: 2890
      },
      content: 'Sunrise at Parasnath was magical! Here\'s a complete guide for fellow travelers. Best time: 5:30 AM, carry warm clothes and plenty of water.',
      images: [
        'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      location: 'Parasnath Hills',
      timestamp: '1 day ago',
      likes: 89,
      comments: 23,
      shares: 15,
      tags: ['sunrise', 'parasnath', 'guide'],
      credits: 75
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Devi', points: 3450, badge: 'Cultural Ambassador' },
    { rank: 2, name: 'Rajesh Kumar', points: 2890, badge: 'Trail Blazer' },
    { rank: 3, name: 'Suresh Oraon', points: 2650, badge: 'Heritage Guide' },
    { rank: 4, name: 'Anita Sharma', points: 1250, badge: 'Explorer' },
    { rank: 5, name: 'Vikash Singh', points: 980, badge: 'Adventurer' }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Hidden Waterfalls Challenge',
      description: 'Discover and document 5 hidden waterfalls in Jharkhand',
      reward: 500,
      participants: 234,
      deadline: '2024-01-15',
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'Tribal Heritage Explorer',
      description: 'Visit and share stories from 3 tribal villages',
      reward: 750,
      participants: 156,
      deadline: '2024-02-01',
      difficulty: 'Hard'
    }
  ];

  const getBadgeColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'Explorer': 'bg-green-100 text-green-800',
      'Pioneer': 'bg-blue-100 text-blue-800',
      'Cultural Ambassador': 'bg-purple-100 text-purple-800',
      'Trail Blazer': 'bg-orange-100 text-orange-800',
      'Heritage Guide': 'bg-indigo-100 text-indigo-800',
      'Adventurer': 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold gradient-text mb-4">
            Community Hub
          </h1>
          <p className="text-xl text-gray-600">
            Connect, share, and discover with fellow Jharkhand explorers
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-1 mb-8 flex space-x-1">
          {[
            { id: 'feed', label: 'Community Feed', icon: MessageSquare },
            { id: 'challenges', label: 'Challenges', icon: Trophy },
            { id: 'leaderboard', label: 'Leaderboard', icon: Star }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-jharkhand-green text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                {/* Create Post */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-jharkhand-green rounded-full flex items-center justify-center">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Share your Jharkhand adventure..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jharkhand-green focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-jharkhand-green">
                        <Camera className="h-5 w-5" />
                        <span>Photo</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-jharkhand-green">
                        <MapPin className="h-5 w-5" />
                        <span>Location</span>
                      </button>
                    </div>
                    <button className="btn-primary">
                      Share
                    </button>
                  </div>
                </div>

                {/* Posts */}
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    {/* Post Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.user.avatar}
                            alt={post.user.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(post.user.level)}`}>
                                {post.user.level}
                              </span>
                              <span className="text-xs text-gray-500">{post.timestamp}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-jharkhand-green font-semibold">+{post.credits} credits</div>
                          <div className="text-xs text-gray-500">{post.user.points} total</div>
                        </div>
                      </div>

                      <p className="text-gray-800 mb-4">{post.content}</p>

                      {post.location && (
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{post.location}</span>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-jharkhand-green/10 text-jharkhand-green rounded text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Post Images */}
                    {post.images.length > 0 && (
                      <div className={`grid ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                        {post.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt="Post content"
                            className="w-full h-64 object-cover"
                          />
                        ))}
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="p-6 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
                            <Heart className="h-5 w-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                            <MessageSquare className="h-5 w-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500">
                            <Share2 className="h-5 w-5" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        <button className="text-gray-600 hover:text-jharkhand-green">
                          <Bookmark className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {challenge.participants} participants
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Ends {challenge.deadline}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-jharkhand-green">
                          {challenge.reward}
                        </div>
                        <div className="text-sm text-gray-500">credits</div>
                      </div>
                    </div>
                    <button className="btn-primary w-full">
                      Join Challenge
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Top Contributors</h2>
                  <p className="text-gray-600">This month's most active community members</p>
                </div>
                <div className="divide-y divide-gray-200">
                  {leaderboard.map((user, index) => (
                    <motion.div
                      key={user.rank}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-6 flex items-center justify-between hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          user.rank === 1 ? 'bg-yellow-500' :
                          user.rank === 2 ? 'bg-gray-400' :
                          user.rank === 3 ? 'bg-orange-600' :
                          'bg-jharkhand-green'
                        }`}>
                          {user.rank}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{user.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(user.badge)}`}>
                            {user.badge}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-jharkhand-green">
                          {user.points}
                        </div>
                        <div className="text-sm text-gray-500">points</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Points</span>
                  <span className="font-semibold text-jharkhand-green">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts Shared</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Places Discovered</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Rank</span>
                  <span className="font-semibold">#4</span>
                </div>
              </div>
            </div>

            {/* Trending Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['#waterfall', '#trekking', '#sunrise', '#culture', '#food', '#wildlife'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-jharkhand-green/10 text-jharkhand-green rounded-full text-sm cursor-pointer hover:bg-jharkhand-green/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Suggested Users */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Suggested Connections</h3>
              <div className="space-y-3">
                {[
                  { name: 'Maya Patel', badge: 'Food Explorer', mutual: 3 },
                  { name: 'Arjun Singh', badge: 'Wildlife Expert', mutual: 7 }
                ].map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-800">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.mutual} mutual connections</div>
                    </div>
                    <button className="text-jharkhand-green hover:bg-jharkhand-green hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
