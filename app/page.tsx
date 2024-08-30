export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 p-20">
      <h1 className="text-5xl">Pere Sola Claver</h1>

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
