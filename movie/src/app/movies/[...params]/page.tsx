const DetailMovie = ({ params: { params } }) => {
  const [title, id] = params;

  return <div>{title}</div>;
};

export default DetailMovie;
