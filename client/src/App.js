import "regenerator-runtime/runtime";
import React from "react";
import { useState } from "react";
import { processBookList, filterToReadBooks } from "./utils/processBook";
import "./App.css";
import Display from "./components/Display";
import Header from "./UI/Header";
import LoadingBar from "./components/LoadingBar";
import SearchButton from "./components/SearchButton";
import StatsDisplay from "./components/StatsDisplay";
import Uploader from "./components/Uploader";

function App() {
  const [hasUploadedCsv, setHasUploadedCsv] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rawBookList, setRawBookList] = useState([]);
  const [resultsList, setResultsList] = useState([]);
  const [numBooksSearched, setNumBooksSearched] = useState(0);
  const [totalNumBooksToSearch, setTotalNumBooksToSearch] = useState(0);

  const addBookListHandler = (newBookList) => {
    setHasUploadedCsv(true);
    setRawBookList(newBookList);
  };

  const clickSearchButtonHandler = () => {
    setIsProcessing(true);
    const filteredBooklist = filterToReadBooks(rawBookList);
    processBookList(filteredBooklist, setResultsList, setNumBooksSearched);
    setTotalNumBooksToSearch(filteredBooklist.length);
    setIsProcessing(false);
    setHasUploadedCsv(false);
  };

  return (
    <div className="App">
      <Header />
      <Uploader
        onAddBookList={addBookListHandler}
        isProcessing={isProcessing}
      />
      <StatsDisplay bookList={rawBookList} />
      <SearchButton
        onClickSearchButton={clickSearchButtonHandler}
        hasUploadedCsv={hasUploadedCsv}
        isProcessing={isProcessing}
      />
      <LoadingBar
        numBooksSearched={numBooksSearched}
        totalNumBooksToSearch={totalNumBooksToSearch}
      />
      <Display resultsList={resultsList} isProcessing={isProcessing} />
    </div>
  );
}

export default App;
