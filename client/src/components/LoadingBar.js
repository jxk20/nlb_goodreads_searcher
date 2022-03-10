const LoadingBar = (props) => {
  return (
    <h1>
      {props.numBooksSearched}/{props.totalNumBooksToSearch} books Searched!
    </h1>
  );
};

export default LoadingBar;
