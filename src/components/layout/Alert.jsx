import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FiAlertCircle } from "react-icons/fi";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && <FiAlertCircle color="red" size={22} />}
        <p className="flex-1 text-base font-semibold leading-7 text-slate-600">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
