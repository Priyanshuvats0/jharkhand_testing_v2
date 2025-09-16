import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Award, 
  MapPin, 
  Calendar, 
  Camera,
  Star,
  Trophy,
  Heart,
  Share2,
  Edit,
  Bell,
  Shield,
  CreditCard,
  Download
} from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    joinDate: '2023-06-15',
    level: 'Explorer',
    totalCredits: 1250,
    placesVisited: 12,
    postsShared: 23,
    followersCount: 145,
    followingCount: 89,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  };

  const achievements = [
    { name: 'First Steps', description: 'Completed first adventure', unlocked: true, date: '2023-07-01' },
    { name: 'Explorer', description: 'Visited 10 places', unlocked: true, date: '2023-11-15' },
    { name: 'Photographer', description: 'Shared 20 photos', unlocked: true, date: '2023-12-01' },
    { name: 'Cultural Enthusiast', description: 'Attended 3 festivals', unlocked: false, progress: 66 },
    { name: 'Mountain Climber', description: 'Climbed 5 peaks', unlocked: false, progress: 40 },
    { name: 'Community Leader', description: 'Get 100 followers', unlocked: false, progress: 145 }
  ];

  const recentActivities = [
    {
      type: 'visit',
      title: 'Visited Netarhat Hills',
      date: '2024-01-15',
      credits: 100,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      type: 'post',
      title: 'Shared photos from Hundru Falls',
      date: '2024-01-10',
      credits: 50,
      likes: 45
    },
    {
      type: 'review',
      title: 'Reviewed local guide Ramesh Kumar',
      date: '2024-01-08',
      credits: 25,
      rating: 5
    }
  ];

  const savedPlaces = [
    {
      name: 'Parasnath Hills',
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'Mountain',
      saved: true
    },
    {
      name: 'Betla National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'Wildlife',
      saved: true
    },
    {
      name: 'Dassam Falls',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'Waterfall',
      saved: true
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'achievements', name: 'Achievements', icon: Trophy },
    { id: 'activity', name: 'Activity', icon: Calendar },
    { id: 'saved', name: 'Saved Places', icon: Heart },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-jharkhand-green to-jharkhand-forest"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-16 mb-4">
              <div className="relative">
                <img
                  src={userStats.avatar}
                  alt={userStats.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-2 right-2 p-2 bg-jharkhand-green text-white rounded-full hover:bg-jharkhand-lightgreen">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{userStats.name}</h1>
                    <p className="text-gray-600">{userStats.email}</p>
                    <div className="flex items-center mt-2">
                      <span className="px-3 py-1 bg-jharkhand-green text-white rounded-full text-sm font-medium">
                        {userStats.level}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">
                        Member since {new Date(userStats.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 btn-primary flex items-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-jharkhand-green">{userStats.totalCredits}</div>
                <div className="text-sm text-gray-600">Total Credits</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-jharkhand-green">{userStats.placesVisited}</div>
                <div className="text-sm text-gray-600">Places Visited</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-jharkhand-green">{userStats.followersCount}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-jharkhand-green">{userStats.postsShared}</div>
                <div className="text-sm text-gray-600">Posts Shared</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-1 mb-8 flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-jharkhand-green text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                      >
                        {activity.image && (
                          <img
                            src={activity.image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">{activity.title}</h3>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-jharkhand-green font-semibold">+{activity.credits}</div>
                          <div className="text-xs text-gray-500">credits</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress to Next Level</h2>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Explorer</span>
                      <span>Pioneer (2,000 credits)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-jharkhand-green h-3 rounded-full transition-all duration-300"
                        style={{ width: `${(userStats.totalCredits / 2000) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {2000 - userStats.totalCredits} credits needed to reach Pioneer level
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-4 rounded-lg border-2 ${
                        achievement.unlocked 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.unlocked ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'
                        }`}>
                          <Trophy className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{achievement.name}</h3>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                      {achievement.unlocked ? (
                        <div className="text-xs text-green-600">
                          Unlocked on {achievement.date}
                        </div>
                      ) : (
                        <div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                            <div 
                              className="bg-jharkhand-green h-2 rounded-full transition-all duration-300"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {achievement.progress}% Complete
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Saved Places</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedPlaces.map((place, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card overflow-hidden"
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800">{place.name}</h3>
                        <p className="text-sm text-gray-600">{place.category}</p>
                        <div className="flex justify-between items-center mt-3">
                          <button className="text-sm text-jharkhand-green hover:underline">
                            View Details
                          </button>
                          <button className="text-red-500 hover:text-red-600">
                            <Heart className="h-4 w-4 fill-current" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium">Notifications</div>
                          <div className="text-sm text-gray-600">Manage your notification preferences</div>
                        </div>
                      </div>
                      <button className="text-jharkhand-green hover:underline">Configure</button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium">Privacy</div>
                          <div className="text-sm text-gray-600">Control your privacy settings</div>
                        </div>
                      </div>
                      <button className="text-jharkhand-green hover:underline">Manage</button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium">Payment Methods</div>
                          <div className="text-sm text-gray-600">Manage payment options</div>
                        </div>
                      </div>
                      <button className="text-jharkhand-green hover:underline">Update</button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <Download className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium">Data Export</div>
                          <div className="text-sm text-gray-600">Download your data</div>
                        </div>
                      </div>
                      <button className="text-jharkhand-green hover:underline">Export</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-sm">
                  Share Profile
                </button>
                <button className="w-full btn-secondary text-sm">
                  Invite Friends
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  Download App
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Credits Balance</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-jharkhand-green mb-2">
                  {userStats.totalCredits}
                </div>
                <div className="text-sm text-gray-600 mb-4">Available Credits</div>
                <button className="btn-primary w-full text-sm">
                  Redeem Credits
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Recommendations</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Complete your profile</div>
                  <div className="text-gray-600">Add bio and interests</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Share more content</div>
                  <div className="text-gray-600">Earn credits by posting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
