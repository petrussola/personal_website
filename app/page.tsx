export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 p-20">
      <section className="flex flex-row gap-6 items-end">
        <h1 className="text-5xl">Pere Solà Claver</h1>

        <p className="text-2xl italic font-normal">/pe.ɾə su'ɫa kɫə'βe/</p>
      </section>

      <h2 className="text-3xl">Frontend developer</h2>

      <h3>
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
