import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, CheckCircle, AlertCircle } from 'lucide-react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      setIsSubmitting(true);
      localStorage.setItem('userEmail', email);
      navigate('/camera');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-6">
        <label 
          htmlFor="email" 
          className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 transition-colors"
        >
          Enter your email to get started
        </label>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <input 
            type="email" 
            id="email" 
            className={`relative w-full px-4 py-3.5 bg-white dark:bg-gray-800 border rounded-xl focus:outline-none transition-all duration-300 ${
              isTouched && !isValid 
                ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30' 
                : isValid
                  ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 dark:focus:ring-green-900/30'
                  : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30'
            } dark:text-white`} 
            placeholder="your.email@example.com" 
            value={email} 
            onChange={handleEmailChange} 
            onBlur={() => setIsTouched(true)} 
            required 
          />
          {isValid && (
            <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
          )}
          {isTouched && !isValid && email !== '' && (
            <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
          )}
        </div>
        {isTouched && !isValid && email !== '' && (
          <p className="mt-2 text-sm text-red-500 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            Please enter a valid email address
          </p>
        )}
      </div>
      <button 
        type="submit" 
        disabled={!isValid || isSubmitting}
        className={`w-full flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl transition-all duration-300 ${
          isValid && !isSubmitting
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl' 
            : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Processing...
          </div>
        ) : (
          <>
            Start Now
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
};

export default EmailForm;