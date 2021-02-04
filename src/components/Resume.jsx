import React, { Component } from 'react'

class Resume extends Component {
    state = {  }

    render() { 
        return (
            <div className="container showcase-inner">
                <div className="resume">
                <h1 className="resumeTitle">Resume</h1>
              <h2>Languages</h2>
              <div className="row">
                <div className="column left">
                    <p>Swedish</p>
                    <p>English</p>
                </div>
                <div className="column right">
                    <p>Native language</p>
                    <p>Fluent in speech and writing</p>
                </div>
              </div> 

              <h2>Skills</h2>
              <div className="row">
              <div className="column left">
                    <p>JavaScript</p>
                    <p>Html5</p>
                    <p>CSS</p>
                    <p>C#</p>
                </div>
                <div className="column middle">
                    <p>.NET</p>
                    <p>PHP</p>
                    <p>Node.js</p>
                    <p>React</p>
                </div>
                <div className="column right">
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>Adobe illustrator and photoshop</p>
                </div>
              </div>

              <h2>Education</h2>
              <p>2019-2021</p>
              <div className="row remove">
                <div className="column left align">
                  <h3>Web Developer</h3>
                  <h4>Linnaeus University</h4>
                </div>
                <div className="column right align">
                <p>Just started my last term  to become  a Web Developer. 
                  I have studied software quality, testing,  analysis and design together with learning different languages and frameworks.
                  The last term focuses on  group projects, software architectures and Internet of Things.</p>
                </div>
              </div>

              <p>2013-2014</p>
              <div className="row remove">
                <div className="column left align">
                  <h3>Literary Studies</h3>
                  <h4>Gothenburg University</h4>
                </div>
                <div className="column right align">
                <p>What can literature tell us about people's thoughts and conditions throughout history? Why do certain texts live on, and how do you really determine what is good literature?
                We immersed ourselves in literary classics and at the same time problematized the concept of classics and questions about canon and literary history writing.
                </p>
                </div>
              </div>

              <h2>Employment</h2>
              <p>2017-PRESENT</p>
              <div className="row remove">
                <div className="column left align">
                  <h3>Optician assistant</h3>
                  <h4>Synsam</h4>
                </div>
                <div className="column right align">
                  <p>To be good in this job you need to have skills in customer service as well as have a huge understanding of the technical aspects of optics. 
                    You need to take this knowledge and present it to customers with patience.
                    I made decisions together with the opticians every day to make sure that how the optic should work and how the customer feels are both equally measured. </p>
                </div>
              </div>
              
              <p>2011-2017</p>
              <div className="row remove align">
                <div className="column left align">
                  <h3>Seller, Barista</h3>
                  <h4>Jeans Company, Espresso House & Nöjds Confectionery</h4>
                </div>
                <div className="column right align">
                <p>Stress resistance, customer service and always a smile on my face.</p>
                </div>
              </div>
              </div>
            </div>
        )
    }
}
 
export default Resume;