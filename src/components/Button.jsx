const Button = ({ lebel }) => {
  return (
    <span className="bg-primary hover:bg-secondary transition-all duration-500 px-[21px] py-2 rounded-[30px] text-primary-content font-medium uppercase">
      {lebel}
    </span>
  );
};

export default Button;
