import { useRef } from "react";
import Papa from "papaparse";
import Button from "../UI/Button";

const Uploader = (props) => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const analyseData = (results) => {
    console.log("analyseData");
    console.log(results.data);
    props.onAddBookList(results.data);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    Papa.parse(file, {
      complete: analyseData,
      header: true,
    });
  };

  const InstructionText = () => {
    return (
      <>
        {" "}
        <h1>Instructions</h1>
        <h2>
          1. Go to&nbsp;
          <a href="https://www.goodreads.com/review/import" rel="noreferrer">
            https://www.goodreads.com/review/import
          </a>
          .
        </h2>
        <h2>2. Click "Export Library" to download your CSV file.</h2>
        <h2>3. Upload the CSV using the button below.</h2>
      </>
    );
  };

  const UploadingButton = () => {
    return (
      <>
        <Button onClick={handleClick}>Upload CSV</Button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </>
    );
  };

  const WaitingText = () => {
    return <h1>CSV IS BEING PROCESSED!!!!</h1>;
  };

  const ButtonOrText = () => {
    if (!props.isProcessing) {
      return <UploadingButton />;
    } else {
      return <WaitingText />;
    }
  };

  return (
    <>
      <InstructionText />
      <ButtonOrText />
    </>
  );
};

export default Uploader;
