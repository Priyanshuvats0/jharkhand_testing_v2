import React from 'react';
import { BrowserRouter as Router, Route,Switch ,Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import Home from './pages/Home.tsx';
import Explore from './pages/Explore.tsx';
import Guides from './pages/Guides.tsx';
import Community from './pages/Community.tsx';
import BucketList from './pages/BucketList.tsx';
import Profile from './pages/Profile.tsx';
import RouteDetail from './pages/RouteDetail.tsx';
import GuideDetail from './pages/GuideDetail.tsx';
import FoodExplorer from './pages/FoodExplorer.tsx';
import Events from './pages/Events.tsx';
import Safety from './pages/Safety.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/guides/:id" element={<GuideDetail />} />
              <Route path="/community" element={<Community />} />
              <Route path="/bucket-list" element={<BucketList />} />
              <Route path="/food" element={<FoodExplorer />} />
              <Route path="/events" element={<Events />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/route/:id" element={<RouteDetail />} />
            </Routes>
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#2D5016',
                color: '#fff',
              },
            }}
          />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
