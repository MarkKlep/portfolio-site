import type { NextPage } from 'next';
import Head from 'next/head';
import { ContactForm } from '@/components/ContactForm';
import { GithubRepoList } from '@/components/GithubRepoList';
import { usePageTracker } from '@/lib/hooks';

const Home: NextPage = () => {
  usePageTracker();

  return (
    <>
      <Head>
        <title>Mark Klepanchuk - Full-Stack Developer</title>
        <meta name="description" content="Front-End & Full-Stack Developer | React, Angular, TypeScript, Node.js | Based in Warsaw, Poland" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-dark text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent animate-pulse">
              Mark Klepanchuk
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Full-Stack Developer | React • Angular • Node.js • TypeScript
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Warsaw, Poland 🇵🇱 | +48 510 705 769
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Front-End specialist with production experience in modernizing legacy systems, 
              building scalable web applications, and integrating CMS solutions. 
              Proficient in <span className="text-accent">React</span>, <span className="text-accent">Angular</span>, 
              and <span className="text-accent">Node.js</span> with strong fundamentals in algorithms and system design.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <a
                href="mailto:markklepanchuk@gmail.com"
                className="px-8 py-4 bg-accent hover:bg-accent-secondary text-dark font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-accent hover:bg-accent hover:text-dark text-accent font-bold rounded-lg transition-all"
              >
                View My Work
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              <a href="https://github.com/MarkKlep" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-secondary transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mark-klepanchuk-58728024a/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-secondary transition">
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/Mark2004/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-secondary transition">
                LeetCode
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 bg-dark-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* DataArt */}
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold">Front-End Developer (Healthcare)</h3>
                <p className="text-accent text-lg">DataArt • Jun 2025 - Dec 2025</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>✓ Modernizing legacy desktop CRM system by migrating to Angular-based web application</li>
                  <li>✓ Improving accessibility, usability, and workflow efficiency</li>
                  <li>✓ Collaborating with designers and back-end developers for seamless integration</li>
                </ul>
              </div>

              {/* HYS Enterprise */}
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold">Front-End Developer (Telecom)</h3>
                <p className="text-accent text-lg">HYS Enterprise • Sep 2024 - May 2025</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>✓ Designed web application and CRM for telecom domain with optimized performance</li>
                  <li>✓ Built responsive UI/UX using Angular and Tailwind for mobile, tablet, and desktop</li>
                  <li>✓ Integrated Strapi CMS reducing content update time by ~30%</li>
                  <li>✓ Launched application on App Store, Google Play, and web platforms</li>
                </ul>
              </div>

              {/* Mocoding */}
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
                <p className="text-accent text-lg">Mocoding • Apr 2024 - May 2024</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>✓ Developed Sea Heatmap Visualizer using Node.js, React, and esbuild</li>
                  <li>✓ Enhanced front-end functionality for Volunteer Website using React.js</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-accent rounded-lg p-6 bg-dark-secondary">
              <h3 className="text-2xl font-bold text-accent mb-2">
                Bachelor&apos;s Degree in Software Engineering
              </h3>
              <p className="text-xl font-semibold mb-4">Oles Honchar Dnipro National University</p>
              <p className="text-gray-400 mb-4">Sep 2021 - Jun 2025 | Dnipro, Ukraine</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  <strong>School Award:</strong> Dnipro Regional Mathematics Olympiad Winner (Oct 2019)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-dark-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">GitHub Projects</h2>
            <GithubRepoList limit={6} />
            <div className="text-center mt-12">
              <a
                href="https://github.com/MarkKlep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-dark font-bold rounded-lg transition"
              >
                View All Projects →
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark-secondary rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-accent mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ React & Next.js</li>
                <li>✓ Angular</li>
                <li>✓ HTML5 & CSS/SCSS</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Responsive Design</li>
                <li>✓ REST APIs</li>
              </ul>
            </div>

            <div className="p-6 bg-dark-secondary rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-accent mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Node.js</li>
                <li>✓ TypeScript</li>
                <li>✓ Strapi CMS</li>
                <li>✓ Full-Stack Development</li>
                <li>✓ API Design</li>
                <li>✓ Data Structures</li>
              </ul>
            </div>

            <div className="p-6 bg-dark-secondary rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-accent mb-4">Tools & Practices</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Git & GitHub</li>
                <li>✓ Agile/Scrum</li>
                <li>✓ JIRA & Confluence</li>
                <li>✓ OOP & UML</li>
                <li>✓ Algorithms</li>
                <li>✓ Performance Optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-20 px-4 bg-dark-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="p-6 rounded-lg border border-accent">
                <h3 className="text-2xl font-bold text-accent mb-2">English</h3>
                <p className="text-lg text-gray-300">Professional</p>
              </div>
              <div className="p-6 rounded-lg border border-accent">
                <h3 className="text-2xl font-bold text-accent mb-2">Ukrainian</h3>
                <p className="text-lg text-gray-300">Native</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Let&apos;s Connect</h2>
          <div className="mb-8 text-center">
            <p className="text-gray-400 mb-4">Have an opportunity or just want to chat? Reach out!</p>
            <div className="flex flex-col gap-4 items-center">
              <a href="mailto:markklepanchuk@gmail.com" className="text-accent hover:text-accent-secondary text-lg font-semibold">
                📧 markklepanchuk@gmail.com
              </a>
              <a href="tel:+48510705769" className="text-accent hover:text-accent-secondary text-lg font-semibold">
                📱 +48 510 705 769
              </a>
            </div>
          </div>
          <ContactForm
            onSuccess={() => {
              console.log('Message sent successfully!');
            }}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-700 py-8 px-4 text-center text-gray-500">
          <p>© 2025 Mark Klepanchuk. Crafted with Next.js + TypeScript + Tailwind CSS</p>
          <p className="mt-2 text-sm">Based in Warsaw, Poland 🇵🇱</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
