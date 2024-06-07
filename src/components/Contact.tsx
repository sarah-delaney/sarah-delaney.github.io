import './Contact.css';
import Column from "./Column";
import Row from "./Row";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    return <div className='content'> 
        <Column className="contactColumn">
            <Row className='contactTitle'>Contact me !</Row>
            <Column className='contactItems'>
                <Row><a className='contactItem' href="mailto:sarahdelaney82301@gmail.com"><MailOutlineIcon/><span>sarahdelaney82301@gmail.com</span></a></Row>
                <Row><a className='contactItem' href="https://www.google.ca/maps/place/Boston" target='_blank'><LocationOnOutlinedIcon/><span>Boston, MA</span></a></Row>
                <Row><a className='contactItem' href='https://github.com/sarah-delaney' target='_blank'><GitHubIcon/><span>github.com/sarah-delaney</span></a></Row>
                <Row><a className='contactItem' href='https://www.linkedin.com/in/sarahdelaney82301' target='_blank'><LinkedInIcon/><span>linkedin.com/in/sarahdelaney82301</span></a></Row>
            </Column>
        </Column>
    </div>
}