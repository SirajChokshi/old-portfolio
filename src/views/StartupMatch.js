import React, { Component } from 'react';

import '../css/case.css';

const styleTemp = {
    backgroundColor: "#3d5afe",
    backgroundImage: "url(\"/images/test5.png\")",
};

export default class StartupMatch extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - StartupMatch";
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>StartupMatch</h2>
                    <h3>2019 &middot; Design & Frontend Dev</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>StartupMatch</h2>
                        <h3>2019 &middot; Design & Frontend Dev</h3>
                    </div>
                </section>
                <article className="row" id="sub-header">
                    <section className="columns four">
                        <h3>Scope</h3>
                        <ul>
                            <li style={{width: "90%"}}>Design and develop a job board web application for startups at the
                                University of Illinois at Urbana-Champaign.
                            </li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Skills</h3>
                        <ul>
                            <li>User Experience Design</li>
                            <li>Frontend Development</li>
                            <li>User Research</li>
                            <li>Leadership</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>React.JS</li>
                            <li>Sketch</li>
                            <li>Illustrator</li>
                            <li>Git</li>
                        </ul>
                    </section>
                </article>

                <article className="case">

                    <h2><span>01.</span> Planning</h2>
                    <div className="row">
                        <div className="six columns">
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical
                                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                                professor at
                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                                consectetur, from
                                a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                                discovered
                                the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                                Finibus Bonorum et
                                Malorum"
                            </p>
                        </div>
                        <div className="six columns">
                            <p>
                                This book is a treatise on the
                                theory of ethics, very popular during the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum
                                dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem
                                Ipsum used
                                since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
                                from "de
                                Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                                accompanied
                                by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                    </div>
                    <h2><span>02.</span> Prototyping</h2>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                        professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        from
                        a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                        Bonorum et
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                        the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum
                        dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
                        since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
                        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied
                        by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <h2><span>03.</span> Development</h2>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                        professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        from
                        a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                        Bonorum et
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                        the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum
                        dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
                        since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
                        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied
                        by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <h2><span>04.</span> Results</h2>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                        professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        from
                        a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                        Bonorum et
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                        the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum
                        dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
                        since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
                        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied
                        by English versions from the 1914 translation by H. Rackham.
                    </p>
                </article>
            </main>
        )
    }
}
