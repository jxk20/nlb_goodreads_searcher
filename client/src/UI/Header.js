import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <h1>NLB Goodreads Searcher</h1>
    </div>
  );
};

export default Header;
