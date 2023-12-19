import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="flex justify-center mt-24">
      <CircularProgress className="text-white" size={60} />
    </div>
  );
};

export default Loading;
