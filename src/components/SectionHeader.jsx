function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeader;