const Home = () => {
  const handleClick = () => {
    console.log("Hello Ninjas!");
  };

  return (
    <div className="Home">
      <h2> Homepage </h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
<div className="Home"> </div>;
