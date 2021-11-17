import React from "react";
import { Box } from "@chakra-ui/layout";
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


export default function Rating({ rating, numReviews, styling }) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                 {...styling}
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? '#FFA90A' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf color="#FFA90A" {...styling} key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar {...styling} key={i} style={{ marginLeft: '1' }} />;
          })}
        {numReviews > 0 && <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>}
      </Box>
    );
  }