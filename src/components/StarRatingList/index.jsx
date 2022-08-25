import { HiStar } from 'react-icons/hi'

function StarRatingList({ stars }) {
  return (
    <>
      {
        stars.map((isFilledStar, i) => 
          <HiStar 
            key={i} 
            size={20} 
            color={isFilledStar ? "var(--filledStarColor)" : "var(--unfilledStarColor)"} 
          />
        )
      }
    </>
  )
}

export default StarRatingList;