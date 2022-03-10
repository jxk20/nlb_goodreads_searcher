// import { useEffect } from "react";
export async function processBookList(
  oldBookList,
  setResultsList,
  setNumBooksSearched
) {
  // const results = [];
  setResultsList([]);
  setNumBooksSearched(0);
  for (const book of oldBookList) {
    const result = await processBook(book);
    console.log("processBookList");
    console.log(result);
    setResultsList((prevResults) => [...prevResults, ...result]);
    setNumBooksSearched((prevValue) => prevValue + 1);
    // results.push(...result);
  }
  // return results;
  // return oldBookList.map((book) => processBook(book));
}

async function processBook(book) {
  console.log("book");
  console.log(book);
  console.log("book.ISBN13");
  console.log(book.ISBN13);
  try {
    const response = await fetch(`/api?isbn=${book.ISBN13}`);
    // const response = await fetch("/api?isbn=9780593238295");
    // console.log("response");
    // console.log(response);
    // console.log(response.text());
    const results = await response.json();
    console.log("Results");
    console.log(results);
    return results.map((result) => processResult(book, result));
  } catch (err) {
    console.error("err", err);
    return {};
  }
}

function processResult(book, result) {
  return {
    Author: book.Author,
    Title: book.Title,
    BranchName: result.BranchName,
    Rating: parseFloat(book["Average Rating"]),
    CallNumber: result.CallNumber,
    StatusDesc: result.StatusDesc,
    Isbn: book.ISBN13,
  };
}
