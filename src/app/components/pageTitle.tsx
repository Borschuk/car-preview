const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <h1 className={`text-3xl font-bold text-center pt-16 ${className || ""}`}>
        {children}
      </h1>
    </>
  );
};

export default PageTitle;
