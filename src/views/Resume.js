import React, { Component } from 'react';

import '../css/case.css';
import '../css/resume.css';

export default class Resume extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - Resume";
    }

    render () {
        return (
            <main>
                <h2 id="work-header">Resume</h2>

                <p>
                    <a href="/files/resume.pdf" className="button" target="_blank" rel='noreferrer noopener'>&nbsp;<i className="fas fa-download" />&nbsp; Download PDF&nbsp;</a>
                </p>

                <hr id="view-resume" />

                    <article id="resume-header" className="row">
                        <div className="columns nine">
                            <p className="resume-name">Siraj Chokshi</p>
                            <p className="resume-sub-name">UI/UX Designer & Frontend Developer &mdash; <a
                                href="https://sirajchokshi.com">https://sirajchokshi.com</a></p>
                        </div>
                        <div className="columns three">
                            <p className="info">
                                8 Squirrel Hill Rd<br />
                                Acton, MA 01720<br />
                                <strong><a href="tel:1-978-760-8276">(978) 760-8276</a></strong><br />
                                <a href="mailto:sirajsc2@illinois.edu">sirajsc2@illinois.edu</a>
                            </p>
                        </div>
                    </article>

                    <article id="resume" className="row">
                        <div className="columns nine">
                            <h3>Experience</h3>
                            <section>
                                <p className="title"><strong>Illinois Founders,</strong> Champaign &mdash; <em>Frontend Developer</em></p>
                                <p className="date">September 2019 - Present</p>
                                <ul>
                                    <li>Designing user interfaces and experiences for software to promote accessibility
                                        at UIUC for startups and student entrepreneurs
                                    </li>
                                    <li>Developing a Startup Job Board using React.JS, Redux and Thunk
                                        middleware while working with RESTful APIs to create a functional web
                                        application.
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <p className="title"><strong>The Genetics of Design,</strong> Concord &mdash; <em>Cognitive
                                    Research Intern</em></p>
                                <p className="date">June 2018 - December 2018</p>
                                <ul>
                                    <li>Improved local economy using eye-tracking software to analyze architecture by
                                        applying cognitive psychology research methods
                                    </li>
                                    <li>Educated public on eye-tracking strategies through exhibit at a local museum
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <p className="title"><strong>Dan Koh for Congress,</strong> Andover &mdash; <em>Digital Campaign Intern</em></p>
                                <p className="date">February 2018 - September 2018</p>
                                <ul>
                                    <li>Communicated policy by designing marketing materials and media</li>
                                    <li>Managed and updated the campaign website, databases, and webmail for the campaign website using PHP, Python, XML and CSS</li>
                                </ul>
                            </section>
                            <section>
                                <p className="title"><strong>Middlesex West Chamber of Commerce,</strong> Acton &mdash; <em>Social Media & Graphic Designer</em></p>
                                <p className="date">March 2017 - September 2017</p>
                                <ul>
                                    <li>Managed social media and email forms using Constant Contact, Facebook, G Suite and other platforms</li>
                                    <li>Created marketing materials, brochures, posters and advertisements</li>
                                </ul>
                            </section>
                            <h3>Education</h3>
                            <section>
                                <p className="title"><strong>University of Illinois at Urbana-Champaign</strong> &mdash;
                                    <em> B.Sc</em></p>
                                <p className="date">August 2019 - December 2022 &mdash; GPA 3.81 / 4.00</p>
                                <ul>
                                    <li>Majoring in Cognitive Science (BS) and minoring in Design</li>
                                    <li>Working towards an interdisciplinary education in Human-Computer Interaction through psychology, computer science and art coursework</li>
                                    <li>Relevant Coursework:&nbsp;
                                         <a href="https://ise.illinois.edu/courses/profile/IE340" target="_blank" rel='noreferrer noopener'>Human Factors Engineering</a>,&nbsp;
                                         <a href="https://cs125.cs.illinois.edu/" target="_blank" rel='noreferrer noopener'>Intro to Computer Science</a>,&nbsp;
                                         <a href="https://courses.illinois.edu/schedule/2020/spring/BCOG/200" target="_blank" rel='noreferrer noopener'>Programming for Cognitive Sciences</a>,&nbsp;
                                         <a href="https://cs.illinois.edu/courses/profile/MATH213" target="_blank" rel='noreferrer noopener'>Discrete Structures</a>,&nbsp;
                                         <a href="https://courses.illinois.edu/schedule/2020/spring/PSYC/230" target="_blank" rel='noreferrer noopener'>Sensation and Perception</a>,&nbsp;
                                         <a href="https://courses.illinois.edu/schedule/2020/spring/ART/140" target="_blank" rel='noreferrer noopener'>Introduction to Art</a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="columns three skills">
                            <h3>Skills</h3>
                            <ul>
                                <li>Visual Design</li>
                                <li>Frontend Development</li>
                                <li>User Interface</li>
                                <li>User Experience</li>
                                <li>Wireframing</li>
                                <li>Responsive Design</li>
                                <li>User Research</li>
                            </ul>
                            <p>Visual Design, Frontend Development, User Interface, User Experience, Wireframing,
                                Responsive Design, User Research</p>
                            <h4>Tools</h4>
                            <ul>
                                <li>Sketch</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                <li>InVision</li>
                                <li>Omnigraffle</li>
                                <li>Figma</li>
                                <li>Framer</li>
                                <li>After Effects</li>
                                <li>Final Cut Pro X</li>
                            </ul>
                            <p>Sketch, Illustrator, Photoshop, InVision, Omnigraffle, Figma, Framer, After Effects,
                                Final Cut Pro X</p>
                            <h4>Development</h4>
                            <ul>
                                <li>HTML, CSS, JavaScript</li>
                                <li>React.JS, Redux, jQuery</li>
                                <li>PHP, SQL</li>
                                <li>Java, C#, Python</li>
                            </ul>
                            <p>HTML, CSS, JavaScript, React.JS, Redux, jQuery, PHP, SQL, Java, C#, Python</p>
                            <h4>Other</h4>
                            <ul>
                                <li>Windows, macOS, GNU/Linux, Git, XCode, Visual Studio</li>
                            </ul>
                            <p>Windows, macOS, GNU/Linux, Git, XCode, Visual Studio</p>
                        </div>
                    </article>
            </main>
        )
    }
}
