import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import mobile from './img/mobile.png';
import mail from './img/mail.png';

function Contact () {
    return (
        <div className="fond">
          <p className="Camille">
              Camille Marcq
            </p>
          <div className="container">
            <div>
                <img src={mobile} alt="" id="mobile"/>
                <p>0456 32 02 59</p>
            </div>
            <div>
                <img src={mail} alt="" id="mail"/>
                <p>camille.marcq2@gmail.com</p>
            </div>
            
          </div>
        </div>
      );
}

export default Contact;