import './Resume.css'
import Column from "./Column";
import Row from "./Row";
import Download from '@mui/icons-material/Download';
const pdf = require('../assets/pdf.pdf');

export default function Resume() {
    return <div className='content'><Column className='resume'>
        <Row className='downloadRow'><a className='downloadLink' href={pdf} target='_blank'><Row>Resume<Download className='downloadIcon'/></Row></a></Row>
                <Row>
                    <Column className='resumeSection'><span className='sectionTitle'>Education</span></Column>
                    <Column className='sectionContent'>
                        <Column>
                            <Row className='subTitle'>Northeastern University</Row>
                            <Row className='italic'>Computer Science and Mathematics</Row>
                            <span className='italic'>Relevant Classes:</span>
                            <ul>
                                <li>Fundamentals of Software Engineering</li>
                                <li>Object Oriented Design</li>
                                <li>Algorithms & Data</li>
                                <li>Database Design</li>
                                <li>Theory of Computation</li>
                                <li>Logic & Computation</li>
                                <li>Statistics & Stochastic Processes</li>
                            </ul>
                            <Row className='italic'>Northeastern Women's Rugby Treasurer</Row>
                            <ul> 
                                <li>Create budgets for each semester to anticipate required dues and fundraising</li>
                                <li>Facilitate dues payments and organize payment plans</li>
                                <li>Update monthly ledgers to keep track of transactions in the account</li>
                            </ul>
                        </Column>
                        <Row className='subTitle'>Notre Dame School of Manhattan</Row>
                     </Column>
                </Row>
                <Row>
                    <Column className='resumeSection'><span className='sectionTitle'>Computer Knowledge</span></Column>
                    <Column  className='sectionContent'>
                        <Column>
                            <Row className='subTitle'>Languages/Frameworks</Row>
                            <Row>JavaScript | Typescript | React | Node | SQL| Java | Spring Boot | Struts | JSP</Row>
                        </Column>
                        <Column><
                            Row className='subTitle'>Technologies</Row>
                            <Row>Git | AWS | GCP | Postman | Elasticsearch | Maven | Kibana</Row>
                        </Column>
                        
                    </Column>
                </Row>
                <Row>
                    <Column className='resumeSection'><span className='sectionTitle'>Work Experience</span></Column>
                    <Column  className='sectionContent'>
                        <Row className='subTitle'>CRIO</Row>
                        <Row className='subTitle'>PowerAdvocate</Row>
                        <Row className='subTitle'>Northeastern</Row>
                    </Column>
                </Row>
            </Column></div>
}