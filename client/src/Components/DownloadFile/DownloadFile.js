import React from "react";
import nirmal from "../../Assets/Nirmal.pdf";

function DownloadFile() {
  const fileName = "Nirmal Raj.pdf";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = nirmal;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}

export default DownloadFile;
