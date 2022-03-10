import ResultsTable from "../UI/ResultsTable";

const Display = (props) => {
  // const ReturnedDisplay = () => {
  //   if (!props.isProcessing && props.resultsList.length > 0) {
  //     return <ResultsTable data={props.resultsList} />;
  //     // <pre>{JSON.stringify(props.bookList, null, 2)}</pre>;
  //   } else {
  //     return <p>LOADING!!!!</p>;
  //   }
  // };

  // return <ReturnedDisplay />;
  return <ResultsTable data={props.resultsList} />;
};

export default Display;
