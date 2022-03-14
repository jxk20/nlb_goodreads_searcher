var EMPTY_RESULT = {
  ItemNo: null,
  BranchID: null,
  BranchName: null,
  LocationCode: null,
  LocationDesc: null,
  CallNumber: null,
  StatusCode: null,
  StatusDesc: null,
  MediaCode: null,
  MediaDesc: null,
  StatusDate: null,
  DueDate: null,
  ClusterName: null,
  CategoryName: null,
  CollectionCode: null,
  CollectionMinAgeLimit: null,
};

export async function processBookList(
  oldBookList,
  setResultsList,
  setNumBooksSearched
) {
  setResultsList([]);
  setNumBooksSearched(0);
  for (const book of oldBookList) {
    const result = await processBook(book);
    console.log("processBookList: ", result);
    setResultsList((prevResults) => [...prevResults, ...result]);
    setNumBooksSearched((prevValue) => prevValue + 1);
  }
}

async function processBook(book) {
  const isbn13 = book.ISBN13.replace(/[^a-z0-9]/gi, "");
  // const isbn13 = book.ISBN13;
  console.log(isbn13);
  console.log(book.Title);
  if (isbn13 === "") {
    console.log("Book doesn't exist!");
    const blankResult = processResult(book, EMPTY_RESULT);
    console.log(blankResult);
    return [blankResult];
  } else {
    try {
      const response = await fetch(`/api?isbn=${isbn13}`);
      const results = await response.json();
      return results.map((result) => processResult(book, result));
    } catch (err) {
      return [{}];
    }
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

export function filterToReadBooks(rawBookList) {
  return rawBookList.filter((book) => book["Bookshelves"] === "to-read");
}
