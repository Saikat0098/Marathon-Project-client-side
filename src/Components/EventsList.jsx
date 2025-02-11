import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
 
const marathonData = [
  {
    title: "Elite Marathon Challenge",
    date: "March 15, 2024",
    category: "Professional",
    time: "05:30 AM - 12:30 PM",
    location: "Central Sports Stadium",
    price: 75,
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
  },
  {
    title: "Urban Night Run",
    date: "April 8, 2024",
    category: "Open Category",
    time: "07:00 PM - 10:00 PM",
    location: "Downtown Circuit",
    price: 45,
    image: "https://images.pexels.com/photos/3621183/pexels-photo-3621183.jpeg"
  },
  {
    title: "Marathon Festival 2024",
    date: "May 20, 2024",
    category: "Mixed Category",
    time: "06:00 AM - 02:00 PM",
    location: "Riverside Park",
    price: 55,
    image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg"
  },
  {
    title: "Spring Wellness Run",
    date: "June 10, 2024",
    category: "Health & Fitness",
    time: "08:00 AM - 11:00 AM",
    location: "City Green Park",
    price: 40,
    image: "https://images.pexels.com/photos/2184562/pexels-photo-2184562.jpeg"
  },
  {
    title: "Summer Sprint Challenge",
    date: "July 25, 2024",
    category: "Amateur",
    time: "05:00 PM - 08:00 PM",
    location: "Lakeside Arena",
    price: 35,
    image: "https://images.pexels.com/photos/1376953/pexels-photo-1376953.jpeg"
  },
  {
    title: "Autumn Trail Marathon",
    date: "September 15, 2024",
    category: "Trail Run",
    time: "07:00 AM - 02:00 PM",
    location: "Hillside Trails",
    price: 60,
    image: "https://images.pexels.com/photos/322576/pexels-photo-322576.jpeg"
  }
];

const EventCard = ({ event }) => (
  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
    <img 
      src={event.image} 
      alt={event.title} 
      className="h-40 md:h-48 w-full object-cover"
      onError={(e) => {
        e.target.src = "/api/placeholder/300/200";
      }}
    />
    <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-r from-white to-pink-50">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-[#FD267D]" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-[#FD267D]" />
            <span>{event.category}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-[#FD267D]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-[#FD267D]" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <div className="text-right mt-4">
        <p className="text-[#FF5E6C] font-semibold">Ticket Price</p>
        <p className="text-3xl font-bold text-[#FD267D]">${event.price}</p>
        <p className="text-sm text-gray-500">/person</p>
      </div>
    </div>
  </div>
);

const EventsList = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <p className="text-[#FD267D] mb-2 font-medium">Upcoming Events</p>
        <h2 className="text-4xl font-bold text-gray-800">Marathon Events</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {marathonData.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <button className="text-[#FD267D] font-medium hover:underline inline-flex items-center gap-2">
          View All Events 
          <ChevronRight className="w-4 h-4" />
        </button>
      </div> 
    </div>
  );
};

export default EventsList;
