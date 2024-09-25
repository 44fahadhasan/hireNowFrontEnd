const Content = ({ title, content }) => {
  return (
    <div className="lg:flex justify-center items-center flex-col mb-5 sm:mb-10 text-secondary text-center">
      <h1 className="text-4xl sm:text-5xl font-black leading-10">{title}</h1>
      {content && (
        <p className="mt-5 text-xl mx-auto w-[85%]  lg:w-[60%] xl:w-[50%]">
          {content}
        </p>
      )}
    </div>
  );
};

export default Content;
