import React from "react";
import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import {
  ArrowRightIcon,
  ClockIcon,
  CameraIcon,
  MailIcon,
  SparklesIcon,
  ShieldCheck,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <motion.div
    variants={itemVariants}
    className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex justify-center mb-6">
      <motion.div
        className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      </motion.div>
    </div>
    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <Header />
      <main className="container mx-auto px-6 py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 space-y-6"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <SparklesIcon className="w-4 h-4 mr-2 animate-pulse" />
              Transform Your Photos with AI
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              Bring Your Vision to Life with AI
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              Our AI powered system takes your image and transforms it into
              something extraordinary—artistic, surreal, or anything you
              imagine.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-16"
              variants={containerVariants}
            >
              <FeatureCard
                icon={MailIcon}
                title="Enter Email"
                description="Start by providing your email where we'll send your generated image"
              />
              <FeatureCard
                icon={CameraIcon}
                title="Take a Photo"
                description="Use your camera to snap a clear selfie for the best results"
              />
              <FeatureCard
                icon={ClockIcon}
                title="Get Results"
                description="Receive your transformed image directly to your email inbox"
              />
            </motion.div>

            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 mb-16"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Excited to see what AI creates for you?
              </motion.h2>
              <EmailForm />
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                    How it works
                  </h3>
                </motion.div>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Our advanced AI analyzes your image and applies custom
                  transformations to generate a brand-new version with stunning
                  detail.
                </motion.p>
              </motion.div>

              <motion.div
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                    Privacy First
                  </h3>
                </motion.div>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Your privacy is our priority. All uploaded and generated
                  images are stored securely and automatically deleted after 24
                  hours. We never share your data, and your results are only
                  sent to the email you provide. You stay in full control of
                  your content.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
