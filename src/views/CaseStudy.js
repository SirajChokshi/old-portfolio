import React, { Component } from 'react';

const styleTemp = {
    backgroundColor: "#3d5afe",
    backgroundImage: "url(\'images/test5.png\')",
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
};

export default class CaseStudy extends Component {
    state = {

    };

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>iOS File Manager</h2>
                    <h3>2018 &middot; UI/UX Design</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>iOS File Manager</h2>
                        <h3>2018 &middot; UI/UX Design</h3>
                    </div>
                </section>
                <article className="row" id="sub-header">
                    <section className="columns four">
                        <h3>Scope</h3>
                        <ul>
                            <li style={{width: "90%"}}>Design a landing screen for an accessible and functional file
                                manager using Apple Human-Interface Guidelines for iOS devices
                            </li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Skills</h3>
                        <ul>
                            <li>User Interface Design</li>
                            <li>User Experience Design</li>
                            <li>Brand Guidelines</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>Sketch</li>
                            <li>Illustrator</li>
                            <li>Apple Human-Interface Guidelines</li>
                        </ul>
                    </section>
                </article>

                <article className="case">
                    <h2><span>01.</span> Planning</h2>
                    <div className="row">
                        <div className="twelve columns">
                            <img src="images/files_1.png" alt="" />
                                <img src="images/files_2.png" alt="" />
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical
                                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                        a Latin professor at
                                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                        words, consectetur, from
                                        a Lorem Ipsum passage, and going through the cites of the word in classical
                                        literature, discovered
                                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                                        "de Finibus Bonorum et
                                        Malorum"
                                    </p>
                        </div>
                    </div>
                </article>
            </main>
        )
    }
}
