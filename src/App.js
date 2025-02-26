import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Available Colours:
// blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

// Adjusted color theme based on badge assignments
const sectionColors = {
  AI: "blue",
  MachineLearning: "green",
  NLP: "purple",
  TextSummarization: "orange",
  Chatbot: "teal",
  DeepLearning: "red",
  Python: "yellow",
  OpenAI: "cyan",
  LLM: "gray",
  FastAPI: "green",
  TensorFlow: "orange",
  PyTorch: "pink"
};

function App() {
  return (
    <>
      <Nav color={sectionColors.AI} />
      <Header color={sectionColors.Chatbot} />
      <About color={sectionColors.NLP} />
      <Experience color={sectionColors.DeepLearning} />
      <Projects color={sectionColors.TensorFlow} />
      <Contact color={sectionColors.OpenAI} />
      <Footer />
    </>
  );
}

export default App;
