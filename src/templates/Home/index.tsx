import { Biography } from './components/Biography'
import { Carrer } from './components/Carrer'

export default function Home() {
  return (
    <main>
      <div>
        <h2 className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 bg-clip-text text-transparent text-5xl font-bold w-510px sm:w-full sm:text-4xl">
          Nicolas Teófilo
        </h2>
        <div>
          Olá, eu sou <span>Nicolas Teófilo</span> 👋🏻
        </div>
        <Biography />
        <Carrer />
      </div>
    </main>
  )
}
