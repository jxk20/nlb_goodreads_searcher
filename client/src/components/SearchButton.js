import Button from "../UI/Button";
import classes from "./SearchButton.module.css";

const SearchButton = (props) => {
  const handleClick = () => {
    props.onClickSearchButton();
  };

  const ButtonToShow = () => {
    if (props.hasUploadedCsv) {
      if (props.isProcessing) {
        return <h1>Loading!!</h1>;
      }
      return (
        <Button className={classes.button} onClick={handleClick}>
          Search for Books!
        </Button>
      );
    } else {
      return <h1>WHERE's MA BUTTON??</h1>;
    }
  };

  return <ButtonToShow />;
};

export default SearchButton;
