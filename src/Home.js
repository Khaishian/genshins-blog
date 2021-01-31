import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "https://genshins-blog-backend.herokuapp.com/blog"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
