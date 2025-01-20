const Button = ({
  className = "", title,}) => {
  return (
    <button className={`px-4 py-2 rounded-md shadow transition ${className}`}>
      {title}
    </button>
    );
  };

export default Button;
