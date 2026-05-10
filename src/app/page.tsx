'use client';

import { useState } from 'react';
import { Music, Play, Star, Calendar, MapPin, Package, Clock, Users, Download, Vote, ChevronRight, Sparkles, Heart, Mic2, Guitar, Coffee } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ceremony');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: '',
    venue: '',
    package: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your booking request! Dunku will get back to you within 24 hours.');
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ceremonySongs = [
    "Perfect - Ed Sheeran",
    "All of Me - John Legend", 
    "A Thousand Years - Christina Perri",
    "Marry You - Bruno Mars"
  ];

  const receptionSongs = [
    "Lover - Taylor Swift",
    "Die with a Smile - Lady Gaga",
    "Thinking Out Loud - Ed Sheeran",
    "Can't Help Myself - Four Tops"
  ];

  const partySongs = [
    "Don't Stop Me Now - Queen",
    "I Wanna Dance with Somebody - Whitney Houston",
    "Sweet Caroline - Neil Diamond",
    "Wonderwall - Oasis"
  ];

  const blogPosts = [
    {
      type: "update",
      title: "Busking Today on Briggate!",
      content: "Come find me on Briggate, Leeds from 2 PM! Got some new wedding songs to test out.",
      time: "2 hours ago"
    },
    {
      type: "review",
      title: "Perfect by Ed Sheeran - 5/5 Stars",
      content: "The ultimate wedding first dance song. Never fails to get those tears flowing!",
      rating: 5,
      time: "1 day ago"
    },
    {
      type: "review", 
      title: "Wonderwall - 3/5 Stars",
      content: "Great for the evening party but maybe save this one for the dance floor rather than the ceremony!",
      rating: 3,
      time: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
              DUNKU
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mic2 className="w-6 h-6 text-amber-400" />
              <Guitar className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8 max-w-3xl mx-auto">
            Live Acoustic Music from Leeds Streets to Your Wedding Aisle
          </h2>
          
          <div className="mb-12">
            <div className="bg-gray-900 rounded-2xl p-4 max-w-4xl mx-auto border border-amber-800/30">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <p className="text-gray-400">Dunku Live Promo Video</p>
                  <p className="text-sm text-gray-500 mt-2">YouTube Embed Container</p>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            Check Availability
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Repertoire & Jukebox Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Dunku's Jukebox
            </h2>
            <p className="text-gray-400 text-lg">Handpicked songs for every moment of your special day</p>
          </div>

          {/* Mock Player */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-12 border border-amber-800/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <Music className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Now Playing: Perfect - Ed Sheeran</h3>
                <p className="text-gray-400">Acoustic Wedding Version</p>
              </div>
              <Play className="w-8 h-8 text-amber-400" />
            </div>
            <div className="bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-full w-1/3 rounded-full"></div>
            </div>
          </div>

          {/* Song Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {[
              { id: 'ceremony', label: 'Ceremony (Emotional)', icon: Heart },
              { id: 'reception', label: 'Drinks Reception (Acoustic Lounge)', icon: Coffee },
              { id: 'party', label: 'Evening Party (High Energy)', icon: Sparkles }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeTab === id 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Song Lists */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-amber-800/30">
            <div className="grid gap-4">
              {(activeTab === 'ceremony' ? ceremonySongs : 
                activeTab === 'reception' ? receptionSongs : partySongs).map((song, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="text-amber-400 font-bold w-8">{index + 1}</span>
                  <Music className="w-5 h-5 text-gray-400" />
                  <span className="flex-1">{song}</span>
                  <Play className="w-5 h-5 text-amber-400 cursor-pointer hover:text-amber-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Updates Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Street Beats & Song Reviews by Dunku
            </h2>
            <p className="text-gray-400 text-lg">Latest updates and honest song reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-amber-800/30 hover:border-amber-700/50 transition-colors">
                {post.type === 'update' ? (
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 font-medium">Street Update</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 font-medium">Song Review</span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.content}</p>
                
                {post.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < post.rating ? 'text-amber-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Fan Zone */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Dunku's VIP Fan Passes
            </h2>
            <p className="text-gray-400 text-lg">Exclusive NFTs for true fans</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-amber-800/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Own a Piece of the Journey</h3>
                <p className="text-gray-300 mb-6">
                  Mint a Dunku VIP Fan Pass NFT and unlock exclusive benefits:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-amber-400" />
                    <span>Lifetime guestlist access to all performances</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-amber-400" />
                    <span>Exclusive acoustic downloads and unreleased tracks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Vote className="w-5 h-5 text-amber-400" />
                    <span>Voting rights on next busking setlist</span>
                  </li>
                </ul>
                <a 
                  href="https://opensea.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2"
                >
                  Mint on OpenSea
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-xl p-6 border border-amber-700/50">
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                    <p className="text-amber-400 font-bold">DUNKU VIP PASS #001</p>
                    <p className="text-gray-400 text-sm">Limited Edition</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-400 mb-2">0.5 ETH</p>
                  <p className="text-gray-400 text-sm">Only 100 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Wedding Packages
            </h2>
            <p className="text-gray-400 text-lg">Tailored packages for every celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "The Ceremony",
                price: "£350",
                features: [
                  "30-minute ceremony performance",
                  "Pre-ceremony consultation",
                  "Song learning and arrangement",
                  "PA system setup",
                  "Microphone and acoustic guitar"
                ]
              },
              {
                name: "The Afternoon Reception", 
                price: "£500",
                features: [
                  "2-hour drinks reception performance",
                  "Extended song repertoire",
                  "Song requests from guests",
                  "Flexible setup locations",
                  "Background music during breaks"
                ]
              },
              {
                name: "The Full Day",
                price: "£950", 
                features: [
                  "Complete day coverage",
                  "Ceremony + Reception performance",
                  "First dance special arrangement",
                  "Evening party acoustic set",
                  "Unlimited song learning",
                  "Dedicated sound engineer"
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-gray-900 rounded-2xl p-8 border ${index === 1 ? 'border-amber-500' : 'border-amber-800/30'} hover:border-amber-700/50 transition-all relative ${index === 1 ? 'transform scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Package className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-amber-400 mb-6">{pkg.price}</p>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Book Dunku for Your Wedding
            </h2>
            <p className="text-gray-400 text-lg">Let's create magic together</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 border border-amber-800/30">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Wedding Date *</label>
                <input
                  type="date"
                  required
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({...formData, weddingDate: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Venue Location *</label>
                <input
                  type="text"
                  required
                  value={formData.venue}
                  onChange={(e) => setFormData({...formData, venue: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Selected Package *</label>
              <select
                required
                value={formData.package}
                onChange={(e) => setFormData({...formData, package: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
              >
                <option value="">Select a package</option>
                <option value="ceremony">The Ceremony - £350</option>
                <option value="reception">The Afternoon Reception - £500</option>
                <option value="fullday">The Full Day - £950</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-gray-300 mb-2">Special Song Requests for Dunku</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                rows={4}
                placeholder="Let me know any special songs you'd like me to learn or perform..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
            DUNKU
          </h3>
          <p className="text-gray-400 mb-4">Live Acoustic Music for Your Perfect Day</p>
          <p className="text-gray-500 text-sm">Leeds-based Wedding Singer | Available UK Wide</p>
        </div>
      </footer>
    </div>
  );
}
