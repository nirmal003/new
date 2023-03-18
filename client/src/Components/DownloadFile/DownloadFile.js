import React from "react";

function DownloadFile() {
  const fileUrl = "Nirmal Raj.pdf";
  const fileName = "Nirmal Raj.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
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
