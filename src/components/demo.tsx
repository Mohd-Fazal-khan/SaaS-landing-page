// "use client"

// import { useState } from "react"
// import { Play, Pause, Volume2, Maximize, RotateCcw } from "lucide-react"

// export default function Demo() {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration] = useState(120) // 2 minutes demo

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying)
//     if (!isPlaying) {
//       // Simulate video progress
//       const interval = setInterval(() => {
//         setCurrentTime((prev) => {
//           if (prev >= duration) {
//             setIsPlaying(false)
//             clearInterval(interval)
//             return 0
//           }
//           return prev + 1
//         })
//       }, 1000)
//     }
//   }

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   return (
//     <section className="py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16" data-animation="fade-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             See
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}
//               ADmyBRAND
//             </span>{" "}
//             in Action
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Watch how our AI-powered suite transforms marketing campaigns in real-time. From content creation to
//             optimization, see the magic happen.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto" data-animation="fade-up" data-delay="200">
//           {/* Video Player Container */}
//           <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group">
//             {/* Video Thumbnail/Player */}
//             <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
//               {/* Animated Background */}
//               <div className="absolute inset-0 opacity-20">
//                 <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
//               </div>

//               {/* Demo Content Simulation */}
//               <div className="relative z-10 w-full h-full flex items-center justify-center">
//                 {!isPlaying ? (
//                   <div className="text-center">
//                     <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
//                       <Play className="w-12 h-12 text-white ml-1" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-2">Interactive Demo</h3>
//                     <p className="text-gray-300">See how ADmyBRAND AI creates campaigns</p>
//                   </div>
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     {/* Simulated Dashboard Interface */}
//                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full mx-8">
//                       <div className="flex items-center justify-between mb-6">
//                         <h4 className="text-xl font-bold text-white">Campaign Generator</h4>
//                         <div className="flex space-x-2">
//                           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                         </div>
//                       </div>

//                       <div className="space-y-4">
//                         <div className="bg-white/10 rounded-lg p-4">
//                           <div className="flex items-center mb-2">
//                             <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
//                             <span className="text-white text-sm">Analyzing target audience...</span>
//                           </div>
//                           <div className="w-full bg-gray-700 rounded-full h-2">
//                             <div
//                               className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
//                               style={{ width: `${(currentTime / duration) * 100}%` }}
//                             ></div>
//                           </div>
//                         </div>

//                         <div className="bg-white/10 rounded-lg p-4">
//                           <span className="text-white text-sm">Generated Ad Copy:</span>
//                           <div className="mt-2 text-gray-300 text-xs">
//                             "Transform your business with AI-powered marketing solutions..."
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Play Button Overlay */}
//               {!isPlaying && (
//                 <button
//                   onClick={togglePlay}
//                   className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
//                 >
//                   <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
//                     <Play className="w-10 h-10 text-white ml-1" />
//                   </div>
//                 </button>
//               )}
//             </div>

//             {/* Video Controls */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={togglePlay}
//                   className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   {isPlaying ? (
//                     <Pause className="w-5 h-5 text-white" />
//                   ) : (
//                     <Play className="w-5 h-5 text-white ml-0.5" />
//                   )}
//                 </button>

//                 <div className="flex-1 flex items-center space-x-3">
//                   <span className="text-white text-sm">{formatTime(currentTime)}</span>
//                   <div className="flex-1 bg-white/20 rounded-full h-1">
//                     <div
//                       className="bg-white rounded-full h-1 transition-all duration-300"
//                       style={{ width: `${(currentTime / duration) * 100}%` }}
//                     ></div>
//                   </div>
//                   <span className="text-white text-sm">{formatTime(duration)}</span>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
//                     <RotateCcw className="w-4 h-4 text-white" />
//                   </button>
//                   <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
//                     <Volume2 className="w-4 h-4 text-white" />
//                   </button>
//                   <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
//                     <Maximize className="w-4 h-4 text-white" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Demo Features */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//             <div className="text-center p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Play className="w-6 h-6 text-white" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-2">Interactive Demo</h4>
//               <p className="text-gray-600 text-sm">Experience our platform with real-time interactions</p>
//             </div>

//             <div className="text-center p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
//               <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <RotateCcw className="w-6 h-6 text-white" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-2">Live Examples</h4>
//               <p className="text-gray-600 text-sm">See actual campaigns being created in real-time</p>
//             </div>

//             <div className="text-center p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Maximize className="w-6 h-6 text-white" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-2">Full Experience</h4>
//               <p className="text-gray-600 text-sm">Complete walkthrough of all features and capabilities</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useRef, useState } from "react"
import { Play, Pause, Volume2, Maximize, RotateCcw } from "lucide-react"

export default function Demo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ADmyBRAND
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI-powered suite transforms marketing campaigns in real-time. From content creation to
            optimization, see the magic happen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* ✅ Real Video Player */}
            <video
              ref={videoRef}
              className="aspect-video w-full rounded-3xl"
              src="demo.mp4" // 📁 Place your video inside /public folder
              controls={false}
              onEnded={() => setIsPlaying(false)}
            />

            {/* ▶️ Custom Play Button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
