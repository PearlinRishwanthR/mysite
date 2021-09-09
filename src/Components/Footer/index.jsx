
import "./style.css"
import {SiGmail} from "react-icons/si";


export default function Footer() {
  return (
      <>
      <div className="footer">
    <footer>
    <strong><p>Author:  R Pearlin Rishwanth
        <br/><p>Mail Me:- pearlinrishwath1@gmail.com</p>
    <center><div style={{height:'40px',width:'40px',borderRadius:'5px',backgroundColor:'white'}}><a href="mailto:pearlinrishwath1@gmail.com" target="1" ><SiGmail/></a>
    </div></center></p></strong>
    </footer>
    </div>
  </>

  );
}

