export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Welcome to your simple Next.js application built with modern web technologies
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            🚀 Ready to Build Amazing Things
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            This is a clean, modern hello world page built with Next.js, TypeScript, and Tailwind CSS. 
            You're all set to start building your next great project!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Next.js 15</h3>
              <p className="text-blue-700 text-sm">React framework for production</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">TypeScript</h3>
              <p className="text-purple-700 text-sm">Type-safe development</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">Tailwind CSS</h3>
              <p className="text-indigo-700 text-sm">Utility-first styling</p>
            </div>
          </div>
        </div>
        
        <footer className="mt-12 text-gray-500 text-sm">
          Built with ❤️ using modern web technologies
        </footer>
      </div>
    </div>
  )
}