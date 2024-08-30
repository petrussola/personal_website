export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 p-20">
      <section className="flex flex-row gap-6 items-end">
        <h1 className="text-6xl">Pere Solà Claver</h1>

        <p className="text-2xl italic font-normal">/pe.ɾə su'ɫa kɫə'βe/</p>
      </section>

      <h2 className="text-4xl">
        <span className="relative">
          <span
            className="block absolute -inset-1 -skew-y-3 bg-pink-500"
            aria-hidden="true"
          ></span>
          <span className="relative text-white">Frontend</span>
        </span>
        developer
      </h2>

      <h3 className="text-2xl text-center leading-relaxed">
        Javascript, React, Typescript, HTML, CSS, Tailwind, Styled Components,
        Storybook, Jest, React Testing Library, Cypress
      </h3>

      <section className="flex flex-col items-center gap-5">
        <h3>{process.env.EMAIL}</h3>
        <h3>{process.env.LINKEDIN}</h3>
        <h3>{process.env.BLOG}</h3>
      </section>
    </div>
  );
}

// border border-solid border-red-500
