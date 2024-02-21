import { toast } from "react-toastify";

const useNotification = ({ message }) => {
  const notify = () => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return notify;
};

export default useNotification;
