
import { Avatar } from "@material-ui/core";
import  Imgme from "../images/IMG_20201119_100357.jpg";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css"
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
      <>
    <div className='main'>
    <div className='photo'>
      <Avatar src={Imgme} className={classes.large}/>
    </div>
    <div className='content'>
      
        <h2>R Pearlin Rishwanth</h2>
        <h3>Full-Stack Web developer</h3>
        <h4>Reactjs Developer</h4>
      
      <div className='contacts'>
      <SocialIcon className="link" url="https://twitter.com/pearlinrishwant" target="1"/>
      <SocialIcon className="link" url="https://www.facebook.com/pearlin.rishwanth/" target="2"/>
      <SocialIcon className="link" url="https://github.com/PearlinRishwanthR" target="3"/>
      </div>
    </div>
    
  </div>
  <section>
  <h2>Introduction</h2>
    <p>Iam R Pearlin Rishwanth Iam a Full-Stack Web Developer experienced in ReactJs and AWS.</p>
</section>

<section>
  <h2>Where I'm From</h2>
    <p class="space-maker">Born and Grown in Tamilnadu,India.</p>
</section>

<section>
  <h2>More About Me</h2>
  <h3>What are My favorite hobbies?</h3>
  <p class="space-maker">Playing Keyboard Music and Reading books and Learning new Programming Languages.</p>
  
</section>
</>
  );
}

