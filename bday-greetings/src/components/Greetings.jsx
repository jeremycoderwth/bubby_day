import React, { useState, useEffect} from 'react'
import { Gift, Heart, X } from 'lucide-react';

const Greetings = () => {
  const [selectedGreeting, setSelectedGreeting] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/greetings.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
 
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Gift className="w-10 h-10 mx-auto mb-4 text-gray-700" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Birthday Wishes</h2>
        <p className="text-gray-600">Tap any card to read the full message</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {data.map((greeting) => (
          <div
            key={greeting.id}
            onClick={() => setSelectedGreeting(greeting)}
            className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              greeting.highlight 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white' 
                : 'bg-white text-gray-900'
            } rounded-2xl shadow-lg hover:shadow-2xl p-6 relative overflow-hidden`}
          >
            {greeting.highlight && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            )}
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Heart className={`w-6 h-6 ${greeting.highlight ? 'text-red-400' : 'text-red-500'}`} />
                <span className={`text-xs px-3 py-1 rounded-full ${
                  greeting.highlight 
                    ? 'bg-white bg-opacity-20 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {greeting.relationship}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${greeting.highlight ? 'text-white' : 'text-gray-900'}`}>
                {greeting.from}
              </h3>
              
              <p className={`line-clamp-3 ${greeting.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {greeting.message}
              </p>

              
              
              <div className="mt-4 text-sm font-medium opacity-75">
                Click to read more →
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGreeting && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedGreeting(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative transform transition-all overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGreeting(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors text-2xl"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{selectedGreeting.from}</h3>
                <p className="text-gray-500 text-sm">{selectedGreeting.relationship}</p>
              </div>
            </div>

            {selectedGreeting.image && (
              <img src={selectedGreeting.image} alt="image" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 py-2 mb-1.5" />
            )}
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {selectedGreeting.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <h3 className='text-xl text-center my-8 py-5'>And more greetings to come...</h3>
    </div>
  );
}

export default Greetings