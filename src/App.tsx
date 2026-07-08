import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  duration: string;
  groupSize: string;
  price: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Kyoto Temples',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    duration: '7 Days',
    groupSize: 'Max 12',
    price: '$1,299',
    description: 'Experience the serene beauty of ancient temples, traditional tea ceremonies, and stunning bamboo forests in the cultural heart of Japan.'
  },
  {
    id: 2,
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop',
    rating: 4.8,
    duration: '5 Days',
    groupSize: 'Max 8',
    price: '$1,850',
    description: 'Breathtaking mountain views, pristine lakes, and exhilarating hiking trails await in this unforgettable alpine adventure.'
  },
  {
    id: 3,
    name: 'Santorini Sunset',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    duration: '10 Days',
    groupSize: 'Max 15',
    price: '$2,100',
    description: 'Sail the azure waters of the Aegean sea, explore iconic white-washed villages, and witness the world\'s most famous sunsets.'
  },
  {
    id: 4,
    name: 'Serengeti Safari',
    country: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop',
    rating: 5.0,
    duration: '8 Days',
    groupSize: 'Max 6',
    price: '$3,400',
    description: 'Get up close with the Big Five in their natural habitat during the Great Migration on this premium guided safari experience.'
  }
];

const FlipCard = ({ destination }: { destination: Destination }) => {
  return (
    <div className="group relative w-full h-[420px] rounded-2xl [perspective:1000px] cursor-pointer">
      {/* 
        The card container that will be flipped.
        We apply the duration and transform-style here.
      */}
      <div 
        className="relative w-full h-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl"
      >
        
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-white">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <div className="flex items-center space-x-2 text-white/90 mb-2">
              <MapPin size={16} />
              <span className="text-sm font-medium tracking-wider uppercase">{destination.country}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-1">{destination.name}</h2>
            <div className="flex items-center space-x-1 text-yellow-400 mt-2">
              <Star size={16} fill="currentColor" />
              <span className="text-white text-sm font-semibold ml-1">{destination.rating}</span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-slate-900 border border-slate-700 p-6 flex flex-col text-slate-300"
        >
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-4">
              Tour Details
            </h3>
            
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              {destination.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg">
                <Calendar className="text-indigo-400" size={20} />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Duration</span>
                  <span className="text-sm font-medium text-white">{destination.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg">
                <Users className="text-indigo-400" size={20} />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Group Size</span>
                  <span className="text-sm font-medium text-white">{destination.groupSize}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-end justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Starting from</span>
                  <span className="text-3xl font-bold text-white">{destination.price}</span>
                </div>
              </div>
              <button className="w-full group/btn bg-indigo-500 hover:bg-indigo-400 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                <span>Book Experience</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 sm:px-12 lg:px-24 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hover over the cards to reveal exclusive details about our premium curated travel experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <FlipCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
