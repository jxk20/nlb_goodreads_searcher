import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Header from "./UI/Header";
import SearchButton from "./components/SearchButton";
import Uploader from "./components/Uploader";

function App() {
  const [hasUploadedCsv, setHasUploadedCsv] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rawBookList, setRawBookList] = useState([]);
  const [processedBookList, setProcessedBookList] = useState([]);

  const addBookListHandler = (newBookList) => {
    setHasUploadedCsv(true);
    setRawBookList(newBookList);
  };

  const processBookList = (oldBookList) => {
    return oldBookList.map((book) => book["Book Id"]);
  };

  const clickSearchButtonHandler = () => {
    console.log("Click Search Button");
    console.log(hasUploadedCsv);
    setIsProcessing(true);
    const newProcessedBookList = processBookList(rawBookList);
    // setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 5000);
    setProcessedBookList(newProcessedBookList);
    setHasUploadedCsv(false);
  };

  return (
    <div className="App">
      <Header />
      <Uploader
        onAddBookList={addBookListHandler}
        hasUploadedCsv={hasUploadedCsv}
        isProcessing={isProcessing}
      />
      <SearchButton
        onClickSearchButton={clickSearchButtonHandler}
        hasUploadedCsv={hasUploadedCsv}
        isProcessing={isProcessing}
      />
      <Display bookList={processedBookList} isProcessing={isProcessing} />
    </div>
  );
}

export default App;
