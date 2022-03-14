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
    setResultsList((prevResults) => [...prevResults, ...result]);
    setNumBooksSearched((prevValue) => prevValue + 1);
  }
}

async function processBook(book) {
  try {
    const response = await fetch(`/api?isbn=${book.ISBN13}`);
    const results = await response.json();
    return results.map((result) => processResult(book, result));
  } catch (err) {
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

export function filterToReadBooks(rawBookList) {
  return rawBookList.filter((book) => book["Bookshelves"] === "to-read");
}
