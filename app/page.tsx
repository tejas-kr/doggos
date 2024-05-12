import Image from "next/image";

export default function Home() {

  const dogs = [
    {
      name: "Shonty",
      transform: 'scale-105 rotate-2',
    },
    {
      name: "Monty",
      transform: 'scale-90 -rotate-2',
    },
    {
      name: "Sheru",
      transform: 'rotate-12',
    },
    {
      name: "Monu",
      transform: 'scale-80',
    },
    {
      name: "Pontu",
      transform: 'scale-80 -rotate-6',
    },
    {
      name: "Sweeti",
      transform: 'scale-70 -skew-y-6',
    },
    {
      name: "Maxu",
      transform: 'scale-105 rotate-45',
    },
    {
      name: "Puchu",
      transform: 'scale-60 rotate-2',
    },
  ]

  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">
      <h1 className="">Hi Doggos 🐶!</h1>
      <h2 className="my-12">The best doggos in town (good bois)</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12 xl:grid-cols-4 my-20 lg:my-32">
        {dogs.map(({ name, transform }, idx) => {
          return (
            <div key={name} className={`border-2 border-opacity-50 border-indigo-400 rounded-xl 
                  m-auto px-4 pb-4 shadow-md shadow-purple-400 backdrop-blur-sm 
                  bg-white/30 ${transform} hover:scale-110 hover:bg-purple-200
                  hover:transition hover:duration-500`}>
              <div className="my-3">
                <h2>{name}</h2>
              </div>
              <div>
                <Image 
                  className="rounded-lg"
                  src={`/images/dog (${idx + 1}).jpg`}
                  width={260}
                  height={160}
                  alt={name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
