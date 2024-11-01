import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            illo fuga dolore, ex incidunt veritatis, pariatur, quia voluptas
            laboriosam consequuntur quaerat delectus quae ab ea? Odio illo
            itaque expedita facilis.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;
