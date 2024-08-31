/* eslint-disable react/no-unescaped-entities */
import {
  ContactBlog,
  ContactEmail,
  ContactLinkedin,
} from './components/contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 p-20 font-sans">
      <section className="flex flex-row gap-6 items-end">
        <h1 className="text-6xl font-semibold">Pere Solà Claver</h1>

        <p className="text-2xl italic font-normal">/pe.ɾə su'ɫa kɫə'βe/</p>
      </section>

      <h2 className="text-4xl">
        <span className="relative">
          <span
            className="block absolute -inset-1 -skew-y-3 skew-x-3 bg-pink-500"
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
        <ContactEmail address={process.env.EMAIL} />

        <ContactLinkedin address={process.env.LINKEDIN} />

        <ContactBlog address={process.env.BLOG} />
      </section>
    </div>
  );
}
