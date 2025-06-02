export function checkReview(reviews, userId) {
  let flag = true;

  reviews.forEach((x) => {
    if (x.ownerReview._id === userId) {
      flag = false;
    }
  });

  return flag;
}
