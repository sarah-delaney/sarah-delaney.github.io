import './Resume.css'
import Column from "./Column";
import Row from "./Row";
import Download from '@mui/icons-material/Download';
const pdf = require('../assets/Sarah Delaney Resume.pdf');

export default function Resume() {
    return <div className='content'><Column className='resume'>
        <Row className='downloadRow'><a className='downloadLink' href={pdf} target='_blank'><Row>Resume<Download className='downloadIcon'/></Row></a></Row>
                <Row className='resumeRow'>
                    <Column className='resumeSection'><span className='sectionTitle'>Education</span></Column>
                    <Column className='sectionContent'>
                        <Row className='subTitle'>Northeastern University</Row>
                        <Row className='italic'>Computer Science and Mathematics</Row>
                        <span className='italic'>Relevant Classes:</span>
                        <ul>
                            <li>Fundamentals of Software Engineering</li>
                            <li>Object Oriented Design</li>
                            <li>Algorithms & Data</li>
                            <li>Theory of Computation</li>
                            <li>Logic & Computation</li>
                            <li>Statistics & Stochastic Processes</li>
                            <li>Artificial Intelligence</li>
                            <li>Matrix Methods for ML</li>
                        </ul>
                    </Column>
                </Row>
                <Row className='resumeRow'>
                    <Column className='resumeSection'><span className='sectionTitle'>Computer Knowledge</span></Column>
                    <Column  className='sectionContent'>
                        <Column>
                            <Row className='subTitle'>Languages/Frameworks</Row>
                            <Row>TypeScript | JavaScript | CSS | React | Node | SQL | Java | Spring Boot JPA | Maven | Struts | Python</Row>
                        </Column>
                        <Row className='subTitle'></Row>
                        <Column>
                            <Row className='subTitle'>Technologies</Row>
                            <Row>Git | AWS | GCP | Postman | Elasticsearch | Docker | Cypress | JUnit</Row>
                        </Column>
                        
                    </Column>
                </Row>
                <Row className='resumeRow'>
                    <Column className='resumeSection'><span className='sectionTitle'>Work Experience</span></Column>
                    <Column  className='sectionContent'>
                    <Row className='subTitle'>WHOOP</Row>
                        <ul>
                            <li>Programmed and deployed frontend components for site-wide promotions, including dynamic, currency-specific banners, resulting in the most successful sales period in company history</li>
                            <li>Conducted A/B testing on eCommerce sites using Datadog metrics and Amplitude tracking to measure success and user conversion, working with Product, Marketing, and QA teams to facilitate rollout</li>
                            <li>Addressed technical debt in Java backend services for managing subscriptions and memberships by rewriting endpoints, fixing existing bugs, and abstracting duplicated code</li>
                            <li>Authored detailed technical plans for full-stack projects, incorporating team feedback and implementing code changes</li>
                            <li>Contributed to a rewrite of the Join flow website from Angular to Next.js, which was A/B tested in production</li>
                        </ul>
                        <Row className='subTitle'>Clinical Research IO</Row>
                        <ul>
                            <li>Designed, built, tested, and maintained a new React component library used in all team's frontend applications</li>
                            <li>Contributed to the finalization of the first milestone of eSource rewrite initiative as the primary developer</li>
                            <li>Developed new Data Collection application with a react frontend and node backend service to preserve logic functionality of existing legacy app</li>
                            <li>Collaborated with UX, product, and development teams to finalize improved user workflows in new application and plan bodies of work for current and future milestones</li>
                            <li>Investigated and solved a variety of bugs in the legacy Java application</li>
                            <li>Presented achievements to the entire company (40+ employees)</li>
                        </ul>
                        <Row className='subTitle'>PowerAdvocate</Row>
                        <ul>
                            <li>Created search filters in React app for PowerAdvocate's Supplier Search to enhance user experience</li>
                            <li>Expanded supplier search microservice by syncing data from an Oracle database into Elasticsearch</li>
                            <li>Crafted Elasticsearch queries to improve performance and accuracy of results based on search terms and filters</li>
                            <li>Worked on adapting the supplier search react app to be used within different products on PowerAdvocate's platform</li>
                            <li>Presented at a departmentwide Product Review meeting, giving an overview of new supplier search features released and their business value</li>
                        </ul>
                        <Row className='subTitle'>Northeastern</Row>
                        <ul>
                            <li>Tutored Northeastern students in Mathematics classes to improve students' class performance</li>
                            <li>Assessed student's goals for the session and prepare material in advance to excel students' understanding of material</li>
                        </ul>
                    </Column>
                </Row>
            </Column></div>
}