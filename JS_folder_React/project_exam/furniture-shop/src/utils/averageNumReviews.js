export function averageNumReviews(reviews) {
  const averageNumber = reviews?.reduce(
    (accumulator, current) => accumulator + Number(current?.rating),
    0
  );

  const length = reviews?.length || 0;
  const result = Math.round(averageNumber / length) || 0;

  return [length, result];
}
