export function checkReview(reviews, userId, role) {
  let flag = true;

  if (!role || role === "Admin") {
    flag = false;
    return;
  }

  reviews.forEach((x) => {
    if (x.ownerReview._id === userId) {
      flag = false;
    }
  });

  return flag;
}
