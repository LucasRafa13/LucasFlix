import react from 'react';
import '../../global.css';

function ButtonLink(props) {
  console.log(props);

  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
