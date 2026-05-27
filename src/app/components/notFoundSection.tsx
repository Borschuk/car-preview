import { Link } from "react-router";
import Button from "./button";

const NotFoundSection = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-400">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-black-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link to="/configurator">
            <Button type="primary" className="mt-8">
              Home
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundSection;
