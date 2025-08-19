"use client"
import { useState } from "react"

export default function EcommHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Slide 1 */}
          <div
            className={
              currentSlide === 0
                ? "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0"
                : currentSlide > 0
                  ? "absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full"
                  : "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full"
            }
          >
            <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
              <img
                src="https://images.pexels.com/photos/998713/pexels-photo-998713.jpeg"
                alt="Premium Audio Collection"
                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-80"
              />

              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Up to 40% Off
                      </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Premium Audio Collection
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mb-6 font-medium">
                      Experience Sound Like Never Before
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      Discover our latest wireless headphones with cutting-edge technology
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                        Shop Audio
                      </button>
                      <button className="border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={
              currentSlide === 1
                ? "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0"
                : currentSlide > 1
                  ? "absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full"
                  : "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full"
            }
          >
            <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
              <img
                src="https://images.pexels.com/photos/2519825/pexels-photo-2519825.jpeg"
                alt="Smart Tech Essentials"
                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-80"
              />

              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        New Arrivals
                      </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Smart Tech Essentials
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mb-6 font-medium">
                      Innovation at Your Fingertips
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      Explore our collection of smart devices and accessories
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                        Explore Tech
                      </button>
                      <button className="border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={
              currentSlide === 2
                ? "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0"
                : currentSlide > 2
                  ? "absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full"
                  : "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full"
            }
          >
            <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
              <img
                src="https://images.pexels.com/photos/2522672/pexels-photo-2522672.jpeg"
                alt="Gaming Gear Pro"
                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-80"
              />

              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Limited Time
                      </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Gaming Gear Pro
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mb-6 font-medium">
                      Level Up Your Game
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      Professional gaming equipment for serious gamers
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                        Shop Gaming
                      </button>
                      <button className="border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500/80 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500/80 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          <button
            onClick={() => setCurrentSlide(0)}
            className={
              currentSlide === 0
                ? "w-8 h-3 rounded-full transition-all duration-300 bg-orange-500"
                : "w-3 h-3 rounded-full transition-all duration-300 bg-gray-500 hover:bg-gray-400"
            }
          />
          <button
            onClick={() => setCurrentSlide(1)}
            className={
              currentSlide === 1
                ? "w-8 h-3 rounded-full transition-all duration-300 bg-orange-500"
                : "w-3 h-3 rounded-full transition-all duration-300 bg-gray-500 hover:bg-gray-400"
            }
          />
          <button
            onClick={() => setCurrentSlide(2)}
            className={
              currentSlide === 2
                ? "w-8 h-3 rounded-full transition-all duration-300 bg-orange-500"
                : "w-3 h-3 rounded-full transition-all duration-300 bg-gray-500 hover:bg-gray-400"
            }
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-gray-400 text-lg">Discover our wide range of premium products</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎧</div>
              <h3 className="text-white font-semibold mb-2">Audio</h3>
              <p className="text-gray-400 text-sm">120+ Products</p>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-white font-semibold mb-2">Smart Devices</h3>
              <p className="text-gray-400 text-sm">85+ Products</p>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎮</div>
              <h3 className="text-white font-semibold mb-2">Gaming</h3>
              <p className="text-gray-400 text-sm">200+ Products</p>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-white font-semibold mb-2">Accessories</h3>
              <p className="text-gray-400 text-sm">150+ Products</p>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📷</div>
              <h3 className="text-white font-semibold mb-2">Cameras</h3>
              <p className="text-gray-400 text-sm">60+ Products</p>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⌚</div>
              <h3 className="text-white font-semibold mb-2">Wearables</h3>
              <p className="text-gray-400 text-sm">45+ Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 text-lg">Handpicked products just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2522675/pexels-photo-2522675.jpeg"
                  alt="Wireless Pro Headphones"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Best Seller
                  </span>
                </div>

                <button className="absolute top-4 right-4 bg-black/50 hover:bg-orange-500 text-white p-2 rounded-full transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Wireless Pro Headphones
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">(1247)</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Noise Cancelling</span>
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">30h Battery</span>
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Premium Sound</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">$299</span>
                    <span className="text-lg text-gray-500 line-through">$399</span>
                  </div>
                  <div className="text-emerald-400 text-sm font-semibold">Save $100</div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                    Shop Now
                  </button>
                  <button className="w-full border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:bg-orange-500/10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg"
                  alt="Smart Fitness Watch"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                </div>

                <button className="absolute top-4 right-4 bg-black/50 hover:bg-orange-500 text-white p-2 rounded-full transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Smart Fitness Watch
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">(892)</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Health Tracking</span>
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">GPS</span>
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Water Resistant</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">$199</span>
                    <span className="text-lg text-gray-500 line-through">$249</span>
                  </div>
                  <div className="text-emerald-400 text-sm font-semibold">Save $50</div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                    Shop Now
                  </button>
                  <button className="w-full border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:bg-orange-500/10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg"
                  alt="Gaming Mechanical Keyboard"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Top Rated
                  </span>
                </div>

                <button className="absolute top-4 right-4 bg-black/50 hover:bg-orange-500 text-white p-2 rounded-full transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Gaming Mechanical Keyboard
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">(2156)</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">RGB Lighting</span>
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Mechanical Keys</span>
                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Programmable</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">$149</span>
                    <span className="text-lg text-gray-500 line-through">$199</span>
                  </div>
                  <div className="text-emerald-400 text-sm font-semibold">Save $50</div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                    Shop Now
                  </button>
                  <button className="w-full border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:bg-orange-500/10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter and be the first to know about new products and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

