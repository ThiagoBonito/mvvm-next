export function LoginView(){
    return (
        <div className="flex w-full h-[100vh] items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Login</h1>
          <p className="text-sm text-gray-600 text-center mb-6">Welcome back! Please login to your account.</p>
          <form action="/login" method="POST">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
            <p className="text-sm text-gray-600 mt-4">
              Don't have an account?
              <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
  )
}