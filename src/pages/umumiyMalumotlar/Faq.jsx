import React from 'react';
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div>
      frequently asked question PAGE

      <Link to={'/'} replace>
        <button className={'btn btn-outline'}>GO BACK</button>
      </Link>
    </div>
  );
};

export default Faq;