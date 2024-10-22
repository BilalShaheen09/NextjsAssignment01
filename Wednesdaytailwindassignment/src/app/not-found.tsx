import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-yellow-300 text-white text-center p-10">
            <h1 className="text-9xl font-extrabold mb-4 animate-bounce">🎪 404</h1>
            <p className="text-5xl mb-2">Step right up! Page not found!</p>
            <p className="text-2xl mb-6">This show has ended!</p>
            <img
                src="https://media.giphy.com/media/3o6Zt3RvR5H9RMPdSg/giphy.gif"
                alt="Circus GIF"
                className="w-64 h-64 mb-4"
            />
            <Link href="/" className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 transform hover:scale-105">
                🎟️ Return to the Circus
            </Link>
            <p className="mt-6 text-lg">
                Or visit our <Link href="/" className="underline hover:text-blue-300">homepage</Link> for more fun!
            </p>
        </div>
    );
}
