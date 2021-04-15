import './Nav_bar.css';
import 'bootstrap/dist/css/bootstrap.css';

function Nav_bar() {
  return (
    <nav>
      <ul className="marcq">
        <li>Cam' Mcq</li>
      </ul>
      <ul className="onglet">
        <li>About</li>
        <li>Skills</li>
        <li>Galerie</li>
        <li>Contact</li>
      </ul>     
      
    </nav>
  ); 
}

export default Nav_bar;