import './Card.css';

function Card(props) {
  return (
    <div className={`card p-0`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
