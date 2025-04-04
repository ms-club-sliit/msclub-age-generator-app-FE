import React from 'react';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import { ArrowRightIcon, ClockIcon, CameraIcon, MailIcon, SparklesIcon, ShieldCheck, Brain } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${className}`}>
    <div className="flex justify-center mb-6">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in">
              <SparklesIcon className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Age Transformation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              See Your Future Self Today
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Our AI-powered Age Generator transforms your photo, showing how
              you'll look years from now.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <FeatureCard
                icon={MailIcon}
                title="Enter Email"
                description="Start by providing your email where we'll send your aged photo"
                className="animate-fade-in-up delay-200"
              />
              <FeatureCard
                icon={CameraIcon}
                title="Take a Photo"
                description="Use your camera to snap a clear selfie for the best results"
                className="animate-fade-in-up delay-300"
              />
              <FeatureCard
                icon={ClockIcon}
                title="Get Results"
                description="Receive your aged photo directly to your email inbox"
                className="animate-fade-in-up delay-400"
              />
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 mb-16 transform hover:scale-[1.01] transition-all duration-300 animate-fade-in-up delay-500">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Ready to see your future self?
              </h2>
              <EmailForm />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-600">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                    How it works
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our advanced AI analyzes your facial features and applies
                  aging algorithms to create a realistic preview of how you
                  might look in the future.
                </p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-700">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                    Privacy First
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your photos and email are kept secure and private. We never
                  share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;