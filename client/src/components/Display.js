import ResultsTable from "../UI/ResultsTable";

const Display = (props) => {
  const ReturnedDisplay = () => {
    if (!props.isProcessing && props.bookList.length > 0) {
      return <pre>{JSON.stringify(props.bookList, null, 2)}</pre>;
    } else {
      return <></>;
    }
  };

  return <ReturnedDisplay />;
};

export default Display;
