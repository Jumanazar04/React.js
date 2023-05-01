import React from 'react';
import ReactDOM from 'react-dom';
import NavScrollExample from './Companent/CompanentA';
import SectionMyTeam1 from './CompanentB/CompanentB';
import CommentB from './comment/CommentB';
import Ready from './ready/Ready';





ReactDOM.render(
  
  <section>
     <NavScrollExample></NavScrollExample>
     <SectionMyTeam1></SectionMyTeam1>
     <CommentB></CommentB>
      <Ready></Ready>
  </section>,
  
  
  document.getElementById("root"))