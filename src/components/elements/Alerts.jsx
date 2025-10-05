import toast from "react-hot-toast";

export function SuccessAlrt(msg) {
    toast.success(msg, {
      style: {
        background: "#90EE90",
        color: "white",
        marginBottom: "20px",
        marginLeft: "20px",
      },
      duration: 1500,
    });
  }
  
  export function FailAlrt(msg) {
    toast.error(msg, {
      style: {
        background: "#FF6B6B",
        color: "white",
        marginBottom: "20px",
        marginLeft: "20px",
      },
      duration: 1500,
    });
  }
