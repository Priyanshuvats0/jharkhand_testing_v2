import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jharkhand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-heading font-bold">Jharkhand Tourism</h3>
                <p className="text-sm text-jharkhand-sky">Discover Hidden Gems</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore the untouched beauty of Jharkhand through immersive 3D experiences, 
              connect with local communities, and discover hidden treasures with expert guides.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">3D Routes</Link></li>
              <li><Link to="/guides" className="text-gray-300 hover:text-white transition-colors">Local Guides</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/bucket-list" className="text-gray-300 hover:text-white transition-colors">Bucket List</Link></li>
              <li><Link to="/food" className="text-gray-300 hover:text-white transition-colors">Local Food</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/safety" className="text-gray-300 hover:text-white transition-colors">Safety Guidelines</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Cultural Events</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-jharkhand-sky" />
                <span className="text-gray-300 text-sm">Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-jharkhand-sky" />
                <span className="text-gray-300 text-sm">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-jharkhand-sky" />
                <span className="text-gray-300 text-sm">info@jharkhandtourism.com</span>
              </div>
            </div>
            <div className="bg-jharkhand-lightgreen/20 p-4 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Emergency SOS:</strong><br />
                Press and hold for 3 seconds in the app for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-jharkhand-lightgreen mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Jharkhand Tourism. All rights reserved. Built with ❤️ for exploring Jharkhand.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-300">Powered by:</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-jharkhand-lightgreen/20 rounded text-xs">3D Mapping</span>
                <span className="px-2 py-1 bg-jharkhand-lightgreen/20 rounded text-xs">AR/VR</span>
                <span className="px-2 py-1 bg-jharkhand-lightgreen/20 rounded text-xs">AI Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
