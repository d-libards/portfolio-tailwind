function SkillsCard({ icon, title, text }) {
  return (
    <article>
      <div className="flex items-center justify-center">
        <span>{icon}</span>
      </div>
      <h4 className="mt-6 font-bold text-center">{title}</h4>
      <p className="mt-2 text-slate-500 text-justify">{text}</p>
    </article>
  );
}
export default SkillsCard;
