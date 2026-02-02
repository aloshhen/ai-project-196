import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Music, Instagram, Send } from 'lucide-react'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const essenceRef = useRef(null)
  const isEssenceInView = useInView(essenceRef, { once: true })
  
  const mediaItems = [
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769987939.jpg?', caption: 'настраиваю живот' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769987992.jpg?', caption: 'в паузе от спецоперации' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769988036.jpg?', caption: 'в Омане на спецоперации' },
    { type: 'image', url: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769988070.jpg?', caption: 'ну когда уже пройдут эти сопли' }
  ]
  
  const artists = [
    { 
      name: 'FreshFact ака Ромчик',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1770044416.jpg?'
    },
    { 
      name: '9Mice',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1770044350.jpg?'
    },
    { 
      name: 'Lildrughill',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1770044435.jpg?'
    },
    { 
      name: 'ASAP Rocky',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1770044537.jpg?'
    },
    { 
      name: 'Playboy Carti',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1770044385.jpg?'
    }
  ]

  const essenceItems = [
    'Амбассадор снюса в Праге',
    'Самый возбуждающий пупок',
    'Магнолия',
    'Leather pants power',
    'Matcha Latte сип',
    'Дракон на спине',
    'Гнущиеся пальцы',
    'Состоит в сообществе «Вайперы Оболони»',
    'Roblox and TikTok is life'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="relative w-full h-full">
          <video
            src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-video-1769988133.MOV?"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-12 left-0 right-0 text-center z-10 px-4">
            <p className="text-3xl sm:text-5xl font-black text-neon-pink glitch font-pixel text-xs sm:text-base">
              разминаю шею
            </p>
          </div>
        </div>
      </div>
    )
  }

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
          {/* Profile Photo Circle - Made Larger */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full pixel-border animate-pulse" />
              <img
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769987641.jpg?"
                alt="Katya Golubenko"
                className="w-full h-full object-cover rounded-full border-4 border-black"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 glitch text-stroke-pink tracking-tighter leading-none">
            KATYA
            <br />
            GOLUBENKO
          </h1>
          
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

      {/* THE ESSENCE - Redesigned */}
      <section 
        ref={essenceRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-fuchsia-600 via-fuchsia-900 to-black"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={isEssenceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-black text-white mb-12 text-center glitch"
          >
            HIGHLIGHTS & QUOTES
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essenceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isEssenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="pixel-border bg-gradient-to-br from-black to-fuchsia-950 p-6 rounded-xl transform hover:scale-105 transition-transform"
              >
                <p className="text-xl sm:text-2xl font-bold text-neon-pink text-center leading-tight">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYLIST */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-4 text-neon-pink glitch">
            Favorite Music
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
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 border-hot-pink">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white flex-1">
                    {artist.name}
                  </p>
                  <div className="w-8 h-8 bg-hot-pink flex items-center justify-center" style={{ imageRendering: 'pixelated' }}>
                    <Music className="w-4 h-4 text-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MY PASSION */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-16 text-neon-pink glitch">
            MY PASSION
          </h2>
        </div>

        {/* TECHNO */}
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
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
      </section>

      {/* THE ARCHIVE */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-16 text-neon-pink glitch">
            THE ARCHIVE
          </h2>
          
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative w-full">
                  <div className="bg-black p-4 sm:p-6 rounded-lg">
                    <img
                      src={mediaItems[currentSlide].url}
                      alt={mediaItems[currentSlide].caption}
                      className="w-full h-auto object-contain rounded"
                    />
                    <p className="text-2xl sm:text-3xl font-black text-hot-pink mt-6 text-center font-pixel text-xs sm:text-sm">
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
              href="https://www.instagram.com/whoatemypopcorn?igsh=MTJ4NjlpNmllZHh2eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hot-pink rounded-full flex items-center justify-center neon-pulse">
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </a>
            
            <a
              href="https://t.me/er11ka"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hot-pink rounded-full flex items-center justify-center neon-pulse">
                <Send className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </a>
          </div>
          
          <p className="text-hot-pink mt-12 font-pixel text-xs">
            © 2024 VIPER OF OBOLON
          </p>
        </div>
      </section>
    </div>
  )
}

export default App