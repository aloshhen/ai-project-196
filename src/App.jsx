import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star, Music, Instagram, Send } from 'lucide-react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const essenceRef = useRef(null)
  const isEssenceInView = useInView(essenceRef, { once: true })
  
  const mediaItems = [
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?', caption: 'VIPER MODE' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?', caption: 'OBOLON QUEEN' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?', caption: 'LEATHER POWER' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?', caption: 'PINK VIBES' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?', caption: 'SNUS AMBASSADOR' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?', caption: 'TECHNO NIGHTS' },
    { type: 'video', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-video-1.MOV?', caption: 'LIVE ESSENCE' }
  ]
  
  const artists = [
    'FreshFact ака Ромчик',
    '9Mice',
    'Lildrughill',
    'Timati',
    'Playboy Carti'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950 to-black opacity-50" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-hot-pink animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-hot-pink animate-pulse" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 glitch text-stroke-pink tracking-tighter leading-none">
            KATYA
            <br />
            GOLUBENKO
          </h1>
          
          <div className="space-y-3 mb-12">
            <p className="text-xl sm:text-2xl font-bold text-neon-pink glitch tracking-wider">
              VIPER OF OBOLON
            </p>
            <p className="text-lg sm:text-xl font-bold text-hot-pink tracking-wider">
              PRAGUE SNUS AMBASSADOR
            </p>
          </div>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <Star className="w-12 h-12 text-hot-pink mx-auto float" style={{ filter: 'drop-shadow(0 0 20px #FF69B4)' }} />
            <p className="text-hot-pink text-sm mt-4 font-pixel">SCROLL DOWN</p>
          </motion.div>
        </motion.div>
      </section>

      {/* THE ESSENCE */}
      <section 
        ref={essenceRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-fuchsia-600 via-fuchsia-900 to-black"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={isEssenceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-black text-white mb-20 text-center glitch"
          >
            THE ESSENCE
          </motion.h2>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={isEssenceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right"
            >
              <p className="text-3xl sm:text-5xl font-black text-neon-pink tracking-tight">
                Leather Pants Power
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={isEssenceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <p className="text-3xl sm:text-5xl font-black text-white tracking-tight glitch">
                Возбуждающая родинка на лбу
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={isEssenceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-6xl font-black text-neon-pink tracking-tight">
                Самый красивый в мире пупок
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLAYLIST */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-4 text-neon-pink glitch">
            THE SOUND
          </h2>
          <p className="text-center text-hot-pink mb-12 text-lg font-pixel text-xs sm:text-sm">
            PLAYLIST VIBES
          </p>
          
          <div className="space-y-4">
            {artists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pixel-border bg-gradient-to-r from-black to-fuchsia-950 p-6 rounded-lg transform hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-hot-pink flex items-center justify-center" style={{ imageRendering: 'pixelated' }}>
                    <Music className="w-4 h-4 text-black" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white flex-1">
                    {artist}
                  </p>
                  <div className="w-2 h-2 bg-hot-pink animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIBE CHAPTERS */}
      <section className="relative py-20 px-4">
        {/* OMAN */}
        <div className="min-h-screen flex items-center justify-center mb-20 sand-wave">
          <div className="text-center">
            <h3 className="text-7xl sm:text-9xl font-black text-white mb-8 tracking-tighter" style={{ textShadow: '0 0 40px #FF69B4' }}>
              OMAN
            </h3>
            <p className="text-2xl sm:text-4xl text-white font-bold">
              Luxury Escape. Dunes & Dreams.
            </p>
          </div>
        </div>
        
        {/* TECHNO */}
        <div className="min-h-screen flex items-center justify-center mb-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-green-500 font-mono text-xs"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `fall ${3 + Math.random() * 2}s linear infinite`,
                }}
              >
                {Math.random().toString(36).substring(7)}
              </div>
            ))}
          </div>
          <div className="text-center relative z-10">
            <h3 className="text-6xl sm:text-9xl font-black text-green-500 mb-8 tracking-tighter matrix-glitch font-mono">
              TECHNO
            </h3>
            <p className="text-2xl sm:text-4xl text-hot-pink font-bold glitch">
              Raves 24/7. Harder. Faster. Pinker.
            </p>
          </div>
        </div>
        
        {/* BANYA */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <div className="text-center">
            <h3 className="text-7xl sm:text-9xl font-black text-white mb-8 tracking-tighter blur-steam">
              BANYA
            </h3>
            <p className="text-2xl sm:text-4xl text-hot-pink font-bold blur-steam">
              Non-stop steam. Detox for Vipers.
            </p>
          </div>
        </div>
      </section>

      {/* THE ARCHIVE */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-16 text-neon-pink glitch">
            THE ARCHIVE
          </h2>
          
          <div className="relative h-[500px] sm:h-[600px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative max-w-md w-full">
                  <div className="pixel-border bg-black p-4 sm:p-6 rounded-lg">
                    {mediaItems[currentSlide].type === 'image' ? (
                      <img
                        src={mediaItems[currentSlide].url}
                        alt={mediaItems[currentSlide].caption}
                        className="w-full h-64 sm:h-96 object-cover rounded"
                      />
                    ) : (
                      <video
                        src={mediaItems[currentSlide].url}
                        className="w-full h-64 sm:h-96 object-cover rounded"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                    <p className="text-2xl sm:text-3xl font-black text-hot-pink mt-4 text-center font-pixel text-xs sm:text-sm">
                      {mediaItems[currentSlide].caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-hot-pink w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-fuchsia-950">
        <div className="max-w-2xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-hot-pink hover:bg-fuchsia-600 text-white text-3xl sm:text-5xl font-black py-8 sm:py-12 rounded-2xl mb-12 neon-pulse transition-all"
          >
            HIT ME UP
          </motion.button>
          
          <div className="flex justify-center gap-6 sm:gap-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hot-pink rounded-full flex items-center justify-center neon-pulse">
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </a>
            
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hot-pink rounded-full flex items-center justify-center neon-pulse">
                <Send className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </a>
            
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hot-pink rounded-full flex items-center justify-center neon-pulse">
                <Music className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </a>
          </div>
          
          <p className="text-hot-pink mt-12 font-pixel text-xs">
            © 2024 VIPER OF OBOLON
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}

export default App