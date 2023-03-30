import { Carrer } from './components/Carrer'

export default function Home() {
  return (
    <main className="mt-16">
      <h5 className="text-base mb-2">Hey, I'am</h5>
      <h2 className="text-5xl font-bold w-510px sm:w-full sm:text-4xl mb-2">
        Nicolas Teófilo
      </h2>
      <p className="mb-2">
        I'm a software developer, I currently work as a back-end developer, I
        work mainly with the JavaScript/TypeScript ecosystem, however I have
        also worked as a front-end developer, also with the same programming
        language that I use in the backend.
      </p>
      <p>
        I'm always looking for innovations and continuous learning, always
        aiming to offer a higher quality and great experience in all the
        software I develop.
      </p>
      <Carrer />
    </main>
  )
}
