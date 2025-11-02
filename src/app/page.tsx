'use client'
import React, { useState, useEffect } from 'react';
import { Car, Shield, Clock, MapPin, Star, ChevronRight, Zap, Award, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const result = await window.storage.list('review:', true);
      if (result && result.keys) {
        const reviewPromises = result.keys.map(async (key) => {
          const data = await window.storage.get(key, true);
          return data ? JSON.parse(data.value) : null;
        });
        const loadedReviews = (await Promise.all(reviewPromises)).filter(r => r !== null);
        setReviews(loadedReviews.sort((a, b) => b.timestamp - a.timestamp).slice(0, 6));
      }
    } catch (error) {
      console.log('No reviews yet');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section - Ultra Modern */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-blue-300 text-sm font-semibold">Location Premium & Innovante</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              L'Excellence en
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Location de Voiture
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-10 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Vivez une expérience unique avec notre flotte de véhicules premium. 
              Technologie, confort et performance réunis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/voitures" 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all transform hover:scale-105 flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Explorer Notre Flotte</span>
                <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a 
                href="/contact" 
                className="group bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all flex items-center gap-2"
              >
                Contactez-Nous
              </a>
            </div>
          </div>
        </div>

        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(15 23 42)"/>
          </svg>
        </div>
      </section>

      {/* Features - Glassmorphism Style */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Car className="w-10 h-10" />,
                title: "Flotte Premium",
                description: "Véhicules haut de gamme entretenus avec excellence",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Protection Totale",
                description: "Assurance complète et assistance 24/7",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Réservation Instantanée",
                description: "Processus rapide et 100% digital",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Service 5 Étoiles",
                description: "Expérience client exceptionnelle garantie",
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                
                <h3 className="relative text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="relative text-slate-400 leading-relaxed">{feature.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Modern Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "5K+", label: "Clients Satisfaits", icon: <Star className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" },
              { number: "100+", label: "Véhicules Premium", icon: <Car className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
              { number: "15+", label: "Années d'Excellence", icon: <Award className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
              { number: "4.9★", label: "Note Moyenne", icon: <TrendingUp className="w-8 h-8" />, color: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center hover:border-white/20 transition-all">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Simple & Rapide
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Louez votre véhicule en 3 étapes simples
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Choisissez",
                  description: "Sélectionnez le véhicule parfait dans notre catalogue premium",
                  icon: <Car className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Réservez",
                  description: "Complétez votre réservation en quelques clics seulement",
                  icon: <Clock className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Profitez",
                  description: "Récupérez votre véhicule et vivez l'expérience premium",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-pink-500 to-orange-500"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="relative z-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                    
                    <div className="text-6xl font-black text-white/10 absolute top-4 right-6">
                      {step.step}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">{step.title}</h3>
                    <p className="text-slate-400 text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Avis de Nos Clients
              </h2>
              <p className="text-xl text-slate-400">
                Découvrez ce que nos clients disent de nous
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{review.comment}"</p>
                  <div>
                    <p className="font-bold text-white text-lg">{review.name}</p>
                    <p className="text-slate-500 text-sm">{new Date(review.timestamp).toLocaleDateString('fr-FR')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Gradient */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Prêt pour l'Aventure ?
          </h2>
          <p className="text-2xl text-white/90 mb-10 leading-relaxed">
            Réservez maintenant et profitez de nos offres exceptionnelles
          </p>
          <a 
            href="/voitures" 
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Découvrir la Flotte
            <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}