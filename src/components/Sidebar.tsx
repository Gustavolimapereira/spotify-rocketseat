import { HomeIcon, Library, Search } from 'lucide-react'

export function Siderbar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex intems-center gap-3 text-sm font-semibold text-zinc-200"
        >
          {' '}
          <HomeIcon /> Home
        </a>
        <a
          href=""
          className="flex intems-center gap-3 text-sm font-semibold text-zinc-200"
        >
          {' '}
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex intems-center gap-3 text-sm font-semibold text-zinc-200"
        >
          {' '}
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 1
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 2
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 3
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 4
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 5
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 6
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 7
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 8
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 9
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          PlayList 10
        </a>
      </nav>
    </aside>
  )
}
