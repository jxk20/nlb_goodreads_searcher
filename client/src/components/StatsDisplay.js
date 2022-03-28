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

  // props.bookList
  return (
    <div>
      <h1>
        <u>Stats</u>
      </h1>
      <h1>Average Rating: {getAvgRating(props.bookList)}</h1>
    </div>
  );
};

export default StatsDisplay;
