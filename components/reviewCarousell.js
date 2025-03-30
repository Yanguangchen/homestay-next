var React = require("react");

// Style objects
const carouselContainerStyle = {
  position: "relative",
  maxWidth: "1000px",
  margin: "0 auto",
};

const reviewCardStyle = (isFading) => ({
  backgroundColor: "#f3f4f6",
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  opacity: isFading ? 0 : 1,
  transform: isFading ? "translateX(-20px)" : "none",
});

const starsStyle = {
  color: "#fbbf24",
  fontSize: "24px",
  marginBottom: "12px",
};

const reviewTextStyle = {
  marginBottom: "16px",
};

const authorInfoStyle = {
  display: "flex",
  alignItems: "center",
};

const authorInitialStyle = {
  backgroundColor: "#065f46",
  color: "white",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginRight: "12px",
  fontFamily: "Raleway",
};

const authorNameStyle = {
  fontWeight: 600,
  fontFamily: "Raleway",
};

const reviewDateStyle = {
  color: "#6b7280",
  fontSize: "14px",
  fontFamily: "Raleway",
};

const googleLogoStyle = {
  height: "24px",
  marginTop: "16px",
};

const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const prevButtonStyle = {
  ...navButtonStyle,
  left: "0px",
};

const nextButtonStyle = {
  ...navButtonStyle,
  right: "0px",
};

var ReviewCard = function (props) {
  var review = props.review;
  var isFading = props.isFading;
  return React.createElement(
    "div",
    { style: reviewCardStyle(isFading) },
    React.createElement(
      "div",
      { style: starsStyle },
      "★".repeat(review.rating),
      "☆".repeat(5 - review.rating)
    ),
    React.createElement("p", { style: reviewTextStyle }, review.text),
    React.createElement(
      "div",
      { style: authorInfoStyle },
      React.createElement(
        "div",
        { style: authorInitialStyle },
        review.author[0].toUpperCase()
      ),
      React.createElement(
        "div",
        null,
        React.createElement("p", { style: authorNameStyle }, review.author),
        React.createElement("p", { style: reviewDateStyle }, review.date)
      )
    ),
    React.createElement("img", {
      src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      alt: "Google",
      style: googleLogoStyle,
    })
  );
};

var GoogleReviewsCarousel = function (props) {
  var reviews = props.reviews;
  var _React$useState = React.useState(0),
    currentIndex = _React$useState[0],
    setCurrentIndex = _React$useState[1];
  var _React$useState2 = React.useState(false),
    isFading = _React$useState2[0],
    setIsFading = _React$useState2[1];

  var nextReview = function () {
    setIsFading(true);
    setTimeout(function () {
      setCurrentIndex(function (prevIndex) {
        return (prevIndex + 1) % reviews.length;
      });
      setIsFading(false);
    }, 300);
  };

  var prevReview = function () {
    setIsFading(true);
    setTimeout(function () {
      setCurrentIndex(function (prevIndex) {
        return (prevIndex - 1 + reviews.length) % reviews.length;
      });
      setIsFading(false);
    }, 300);
  };

  React.useEffect(function () {
    var intervalId = setInterval(nextReview, 5000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);

  return React.createElement(
    "div",
    { style: carouselContainerStyle },
    React.createElement(ReviewCard, {
      review: reviews[currentIndex],
      isFading: isFading,
    }),
    React.createElement(
      "button",
      { onClick: prevReview, style: prevButtonStyle },
      "‹"
    ),
    React.createElement(
      "button",
      { onClick: nextReview, style: nextButtonStyle },
      "›"
    )
  );
};

var sampleReviews = [
  {
    rating: 5,
    text: "We're impressed with KSQ. Their staff are very well-trained and diligent.",
    author: "Aishwarya",
    date: "7 Hours ago",
  },
  {
    rating: 5,
    author: "Karen Lim",
    date: "23 hours ago",
  },
  {
    rating: 5,
    text: " KSQ Manpower Services has supplied my family with exceptional assistance.",
    author: "Tony Lam",
    date: "5 months ago",
  },
  {
    rating: 5,
    text: "With KSQ, our children are well taken care of",
    author: "Ahmad",
    date: "8 months ago",
  },
  {
    rating: 5,
    text: "Having tried various agencies before, KSQ stands out for its reliability",
    author: "Hong Chiong",
    date: "3 years ago",
  },
];

var GoogleReviews = function () {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { textAlign: "center" } },
      "What our clients say!"
    ),
    React.createElement(GoogleReviewsCarousel, { reviews: sampleReviews }),
    React.createElement(
      "p",
      { style: { textAlign: "center", marginBottom: "10%" } },
      "Powered by Web Wizards Widgets"
    )
  );
};

module.exports = GoogleReviews;
