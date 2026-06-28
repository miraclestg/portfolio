const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Professional Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, security, and building innovative solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Cybersecurity Enthusiast & Developer
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I'm a cybersecurity enthusiast and developer currently pursuing my degree in Information Technology at HUFLIT.
            With a strong passion for both security and development, I love exploring the intersection of these fields.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I would love to expand my knowledge and contribute to the tech community through innovative projects and continuous learning.
            Currently focusing on DevSecOps practices and building secure, scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
