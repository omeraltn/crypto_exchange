import { LoaderCircle } from "lucide-react";

const Loader = ({ design }) => {
  return (
    <div className={`grid place-items-center my-50 ${design}`}>
      <LoaderCircle className="size-8 text-blue-400 animate-spin" />
    </div>
  );
};

export default Loader;
