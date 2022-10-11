import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';


/*
https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
https://fontawesome.com/v5.15/icons/github?style=brands
*/

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Created by <span>André</span></p>
            <a href='https://github.com/andreloezer' target='_blank' rel='noreferrer' className='icon'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
    );
};

export default Footer;