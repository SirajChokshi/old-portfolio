import React, { Component } from 'react';
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/case.css';
import '../styles/resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
    state = {
        containerWidth: 300
    };

    componentDidMount() {
        this.resizePDF();
        window.addEventListener('resize', this.resizePDF);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizePDF);
    }

    resizePDF = () => {
        this.setState({
            containerWidth: document.getElementsByClassName("container").item(0).offsetWidth
        })
    }

    render () {
        return (
            <Layout>
                <SEO title="Resume" />
                <h2 id="work-header">Resume</h2>

                <p>
                    <a href="/resume.pdf" className="button" target="_blank" rel='noreferrer noopener'>&nbsp;<i className="fas fa-download" />&nbsp; Download PDF&nbsp;</a>
                </p>

                <hr id="view-resume" />
                
                <Document file="/resume.pdf" error="Could not load PDF. Click above to view." loading="Loading PDF...">
                    <Page pageNumber={1} width={this.state.containerWidth} />
                </Document>
                
            </Layout>
        )
    }
}
