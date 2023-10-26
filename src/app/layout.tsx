import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify-Rocketseat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-800 h-100 w-full">
        <div className="grid grid-cols-3 gap-2 p-5 h-auto bg-pink-400">
          <div className="bg-green-400 h-80 flex items-center justify-center flex-col">
            <p className="font-sans">Gustavo Lima</p>
            <p className="font-serif">Carolina Infante</p>
          </div>
          <div className="bg-red-400">
            <p className="font-thin">Gustavo Lima</p>
          </div>
          <div className="bg-yellow-400">9</div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 active:scale-95 transform transition-all duration-100 ease-in-out text-white font-bold py-2 px-4 rounded">
          Clique Aqui
        </button>
      </body>
    </html>
  )
}
