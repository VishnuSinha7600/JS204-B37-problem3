const reviews = [
    { productId: 1, category: 'Electronics', rating: 4.5, comment: 'Excellent!' },
    { productId: 2, category: 'Books', rating: 3.8, comment: 'Good read' },
    { productId: 3, category: 'Electronics', rating: 4.0, comment: 'Very good' },
    { productId: 4, category: 'Books', rating: 4.2, comment: 'Interesting' },
    { productId: 5, category: 'Electronics', rating: 3.5, comment: 'Decent' }
  ];


  const averageRatingByCategory = reviews.reduce((acc, review) => {
    const {category, rating} = review;

    if(!acc[category]){
        acc[category] = {
            totalRating: 0,
            count: 0
        };
    }

    acc[category].totalRating += rating;
    acc[category].count++;

    return acc;

  }, {});

  for(let category in averageRatingByCategory ){
    const { totalRating , count} = averageRatingByCategory[category] ;
    averageRatingByCategory[category] = totalRating/count;

  
  }

  console.log(averageRatingByCategory);