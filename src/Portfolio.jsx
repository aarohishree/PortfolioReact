import React from 'react';
import './Portfolio.css';

// --- You can add cute icons from a library like react-icons ---
// npm install react-icons
import { FiMail, FiPhone, FiMapPin, FiHeart, FiCode, FiUsers, FiAward, FiStar } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaGitAlt, FaAws } from 'react-icons/fa';
import profilePic from './assets/aarohi.png';

const App = () => {
    // Helper function for smooth scrolling
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            <header className="navbar">
                <div className="navbar-brand">AS.</div>
                <nav>
                    <a onClick={() => scrollToSection('home')}>Home</a>
                    <a onClick={() => scrollToSection('academics')}>Academics</a>
                    <a onClick={() => scrollToSection('leadership')}>Leadership</a>
                    <a onClick={() => scrollToSection('experience')}>Experience</a>
                    <a onClick={() => scrollToSection('projects')}>Projects</a>
                    <a onClick={() => scrollToSection('skills')}>Skills</a>
                </nav>
            </header>

            <main>
                {/* --- Home Section --- */}
                <section id="home" className="section home-section">
                    <div className="home-content">
                        <img src={profilePic} alt="Aarohishree Subedi" className="profile-pic" />
                        <h1 className="main-title">Aarohishree Subedi</h1>
                        <p className="subtitle">Undergraduate in Computer Science with a passion for AI and elegant web solutions.</p>
                        <div className="contact-info">
                            <span><FiMapPin className="icon" /> Kathmandu</span>
                            <span><FiPhone className="icon" /> +977 9805511966</span>
                            <span><FiMail className="icon" /> aarohishreesubedi@gmail.com</span>
                        </div>
                    </div>
                </section>

                {/* --- Academics Section --- */}
                <section id="academics" className="section">
                    <h2 className="section-title">Academics</h2>
                    <div className="card-container">
                        <div className="card">
                            <h3>Sunway College, Kathmandu</h3>
                            <p className="card-meta">2024-2027</p>
                            <p>Under-graduate in Computer Science with Artificial Intelligence</p>
                        </div>
                        <div className="card">
                            <h3>Saint Xavier’s College, Kathmandu</h3>
                            <p className="card-meta">2021-2023</p>
                            <p>Completed high school studies in the science stream.</p>
                        </div>
                        <div className="card">
                            <h3>Little Angels’ Boarding School, Jhapa</h3>
                            <p className="card-meta">Up to Grade 10</p>
                            <p>Completed upper secondary studies.</p>
                        </div>
                    </div>
                </section>

                {/* --- Leadership Section --- */}
                <section id="leadership" className="section">
                    <h2 className="section-title">Leadership</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"><FiStar /></div>
                            <div className="timeline-content">
                                <h3>Club Executive Member: Sunway Entrepreneurship Club</h3>
                                <p className="timeline-date">Dec 2024-Present</p>
                                <p>Organized and managed club activities, fostering entrepreneurship skill-building.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FiUsers /></div>
                            <div className="timeline-content">
                                <h3>Club member: SXC Magis</h3>
                                <p className="timeline-date">2 years</p>
                                <p>Advocated for inclusivity and equality through seminars and activities.</p>
                            </div>
                        </div>
                         <div className="timeline-item">
                            <div className="timeline-icon"><FiAward /></div>
                            <div className="timeline-content">
                                <h3>School Vice-President</h3>
                                <p className="timeline-date">1 year</p>
                                <p>Assisted in school administration and encouraged student participation in activities.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- Community Service / Experience Section --- */}
                <section id="experience" className="section">
                    <h2 className="section-title">Community & Experience</h2>
                     <div className="card-container">
                        <div className="card-small">
                            <FiHeart className="card-icon"/>
                            <h4>Speaking buddy at ENGin</h4>
                            <p>Volunteering to help Ukrainian students improve their English skills (Dec 2024-Present).</p>
                        </div>
                        <div className="card-small">
                            <FiCode className="card-icon"/>
                            <h4>Creator at Mattrab Community</h4>
                            <p>Guided juniors by answering queries and uploading study materials (2022-Present).</p>
                        </div>
                        <div className="card-small">
                            <FiHeart className="card-icon"/>
                            <h4>Social Entrepreneurship Bootcamp</h4>
                            <p>Learned advanced tools, frameworks, and social business approaches.</p>
                        </div>
                        <div className="card-small">
                            <FiUsers className="card-icon"/>
                            <h4>Volunteer for Kalpabriksha</h4>
                            <p>Helped organize YUWANTAR to inspire youth leadership.</p>
                        </div>
                         <div className="card-small">
                            <FiAward className="card-icon"/>
                            <h4>Teaching at PiE</h4>
                            <p>Assisted underprivileged students with their curriculum.</p>
                        </div>
                    </div>
                </section>

                {/* --- Projects Section --- */}
                <section id="projects" className="section">
                    <h2 className="section-title">Projects</h2>
                    <div className="card-container">
                        <div className="card project-card">
                            <h3>LegalEase Nepal</h3>
                            <p>A chatbot for Nepali citizens to ask legal queries and connect with lawyers.</p>
                            <p className="project-role"><strong>My Role:</strong> Frontend Developer</p>
                            <div className="tech-stack">
                                <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Tailwind</span>
                            </div>
                        </div>
                         <div className="card project-card">
                            <h3>Hospital Management System</h3>
                            <p>Developed a system to manage patient records, appointments, and hospital administration.</p>
                            <p className="project-role"><strong>Tech Used:</strong> Python</p>
                            <div className="tech-stack">
                                <span>Python</span>
                            </div>
                        </div>
                        <div className="card project-card">
                            <h3>VolunteerNow</h3>
                            <p>A website connecting volunteers with those in need.</p>
                            <p className="project-role"><strong>Tech Used:</strong> HTML, CSS</p>
                            <div className="tech-stack">
                                <span>HTML</span><span>CSS</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Skills Section --- */}
                <section id="skills" className="section">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item"><FaHtml5 /> HTML</div>
                        <div className="skill-item"><FaCss3Alt /> CSS</div>
                        <div className="skill-item"><FaJsSquare /> JavaScript</div>
                        <div className="skill-item"><FaReact /> React</div>
                        <div className="skill-item"><FaFigma /> Figma</div>
                        <div className="skill-item"><FaGitAlt /> Git</div>
                        <div className="skill-item"><FaAws /> AWS</div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>Designed with ♡ by Aarohishree Subedi</p>
            </footer>
        </div>
    );
}

export default App;