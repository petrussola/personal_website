/* eslint-disable react/no-unescaped-entities */
import {
  ContactBlog,
  ContactEmail,
  ContactLinkedin,
} from './components/contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 p-10 md:p-20">
      <section className="flex flex-row flex-wrap gap-6 items-end">
        <h1 className="text-6xl font-normal text-center grow">
          Pere Sola Claver
        </h1>

        <p className="text-2xl font-normal text-center grow">
          /pe.ɾə su'ɫa kɫə'βe/
        </p>
      </section>

      <section className="flex flex-row gap-3 items-center">
        <h2 className="text-4xl">
          <span className="relative">
            <span
              className="block absolute -inset-1 -skew-y-3 skew-x-3 bg-blue-800"
              aria-hidden="true"
            ></span>
            <span className="relative text-white">Frontend</span>
          </span>
        </h2>
        <h2 className="text-4xl">developer</h2>
      </section>

      <section className="relative">
        <span
          className="block absolute -inset-5 skew-y-1 skew-x-3 bg-yellow-300"
          aria-hidden="true"
        ></span>
        <h3 className="relative text-black text-2xl text-center leading-relaxed italic">
          JavaScript, React, Typescript, HTML, CSS, Styled Components, Tailwind,
          Storybook, Jest, React Testing Library, Cypress
        </h3>
      </section>

      <section className="flex flex-col items-center gap-5">
        <ContactEmail address={process.env.EMAIL} />

        <ContactLinkedin address={process.env.LINKEDIN || ''} />

        <ContactBlog address={process.env.BLOG || ''} />
      </section>
    </div>
  );
}
