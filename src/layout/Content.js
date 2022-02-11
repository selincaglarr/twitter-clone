import React  from 'react'
import { PopulerIcon } from "../icons/Icon";


const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
    <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
      <span className="font-bold text-xl text-gray-900">Home</span>
      <PopulerIcon className="w-6 h-6 text-primary-base" />
    </header>
    </main>
  )
}

export default Content