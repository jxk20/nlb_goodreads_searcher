import Card from "../UI/Card";

const StatsDisplay = (props) => {
  const getAvgRating = (bookList) => {
    if (bookList.length > 0) {
      const allRatings = bookList.map((book) =>
        parseFloat(book["Average Rating"])
      );
      const validRatings = allRatings.filter(
        (rating) => 0.0 <= rating <= 5.0 && !isNaN(rating)
      );
      const avgRating =
        validRatings.reduce((a, b) => a + b, 0) / validRatings.length;
      return avgRating.toFixed(2);
    }
  };

  const countBooksByType = (bookList, columnHeader) => {
    const filteredBooks = bookList.filter(
      (book) => book["Exclusive Shelf"] === columnHeader
    );
    return filteredBooks.length;
  };

  return (
    <Card>
      <h1>
        <u>Stats</u>
      </h1>
      <h2>Average Rating: {getAvgRating(props.bookList)}</h2>
      <h1>
        <u>Book Distribution</u>
      </h1>
      <h2> Read: {countBooksByType(props.bookList, "read")}</h2>
      <h2> To read: {countBooksByType(props.bookList, "to-read")}</h2>
    </Card>
  );
};

export default StatsDisplay;
