// Code MovieReviews Here
import React from 'react'

const Review = ({summary_short}) => {
  return (
    <div className="review">
      <div>{summary_short}</div>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews