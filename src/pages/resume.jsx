import React from 'react';
import filepdf from "../pdf/Pearlin Resume.pdf";
import {ImFilePdf} from "react-icons/im";
import { Button } from '@material-ui/core';

const Resume = () => {
    
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
<section>
<p>Click here on button to download My Resume.</p>
  <Button variant="contained" color="primary"><a style={{color:'white'}} href={filepdf} download>
  <i aria-hidden="true"></i>
  <ImFilePdf/>Download PDF
</a> </Button>
</section>

    </div>
  );
};

export default Resume;