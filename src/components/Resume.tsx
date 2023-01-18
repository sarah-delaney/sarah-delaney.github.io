import './Resume.css'
import Column from "./Column";
import Row from "./Row";

export default function Resume() {
    return <Column className='resume'>
                <Row>
                    <Column>Education</Column>
                    <Column>
                        <Row>Northeastern</Row>
                        <Row>Notre Dame</Row>
                     </Column>
                </Row>
                <Row>
                    <Column>Computer Knowledge</Column>
                    <Column>
                        <Row>Languages/Frameworks</Row>
                        <Row>Technologies</Row>
                    </Column>
                </Row>
                <Row>
                    <Column>Work Experience</Column>
                    <Column>
                        <Row>CRIO</Row>
                        <Row>PowerAdvocate</Row>
                        <Row>Northeastern</Row>
                    </Column>
                </Row>
            </Column>
}