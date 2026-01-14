import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChevronDown, ChevronUp, Calculator, Globe, Activity, TrendingUp, Award, Book, Menu, X } from 'lucide-react';

// [ ... All your mock data like translations, globalEconomyData, economicTrends, quizData remain unchanged ... ]

const NuclearTechApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quizDifficulty, setQuizDifficulty] = useState('easy');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [calculatorInputs, setCalculatorInputs] = useState({
    productionCost: '',
    demand: '',
    transportCost: '',
    regulatoryCost: ''
  });
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const currentTranslations = translations[language];

  const handleQuizAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setTimeout(() => {
      const currentQuiz = quizData[quizDifficulty];
      if (answerIndex === currentQuiz[currentQuestion].correct) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < currentQuiz.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  const calculateEconomics = () => {
    const { productionCost, demand, transportCost, regulatoryCost } = calculatorInputs;
    if (productionCost && demand && transportCost && regulatoryCost) {
      const totalCost = parseFloat(productionCost) + parseFloat(transportCost) + parseFloat(regulatoryCost);
      const revenue = parseFloat(demand) * 1000;
      const profit = revenue - totalCost;
      const roi = ((profit / totalCost) * 100).toFixed(2);
      setCalculatorResult({
        totalCost: totalCost.toLocaleString(),
        revenue: revenue.toLocaleString(),
        profit: profit.toLocaleString(),
        roi: roi
      });
    }
  };

  const translateText = (text) => {
    const translations = {
      'Nuclear technology economics': {
        es: 'Economía de tecnología nuclear',
        fr: 'Économie des technologies nucléaires'
      },
      'Medical applications': {
        es: 'Aplicaciones médicas',
        fr: 'Applications médicales'
      }
    };
    return translations[text] && translations[text][language] || text;
  };

  const NavButton = ({ tab, icon: Icon, children }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === tab 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-blue-600 hover:bg-blue-50'
      }`}
    >
      <Icon size={20} />
      <span>{children}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      {/* ... your full header code remains unchanged ... */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ... other tab content unchanged ... */}

        {/* Economic Issues - FIXED CLASSNAME SYNTAX */}
        {activeTab === 'issues' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Economic Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {economicIssues.map((issue, index) => (
                <div key={index} className={`${issue.color} rounded-xl p-6 shadow-lg`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{issue.title}</h3>
                    <button 
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {expandedCard === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>
                  <p className="text-gray-700 mb-3">{issue.description}</p>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <span className="text-blue-800 font-semibold">Impact: {issue.impact}</span>
                  </div>
                  {expandedCard === index && (
                    <div className="mt-4 p-4 bg-white rounded-lg">
                      <p className="text-gray-600">{issue.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ... rest of tab content like 'graph', 'quiz', 'calculator' etc. remains unchanged ... */}

      </main>

      {/* Footer */}
      {/* ... your footer code remains unchanged ... */}
    </div>
  );
};

export default NuclearTechApp;
