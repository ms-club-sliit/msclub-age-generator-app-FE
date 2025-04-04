import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CameraIcon } from 'lucide-react';
const CameraPage = () => {
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 group">
          <ArrowLeftIcon className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to landing page
        </Link>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <CameraIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Take Your Photo
            </h1>
            <p className="text-gray-600 mb-8">
              Position your face in the center and ensure good lighting for the
              best results.
            </p>
            <div className="bg-gray-50 rounded-2xl p-16 flex items-center justify-center mb-8 border-2 border-dashed border-gray-200">
              <p className="text-gray-400">Camera preview will appear here</p>
            </div>
            <button className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:ring-4 focus:ring-blue-100 transform hover:-translate-y-0.5">
              Take Photo
              <CameraIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default CameraPage;