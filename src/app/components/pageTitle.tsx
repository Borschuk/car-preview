const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <h1
        className={`px-4 pt-8 text-center text-2xl font-bold sm:pt-12 sm:text-3xl md:pt-16 ${
          className || ""
        }`}
      >
        {children}
      </h1>
    </>
  );
};

export default PageTitle;
