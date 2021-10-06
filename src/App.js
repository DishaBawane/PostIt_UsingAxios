import Card from "./components/Card";
import PostCard from "./components/PostCard";

import usePostHttp from "./hooks/use-http";


const App = () => {
  const [posts, submitPost, isLoading,error] = usePostHttp();

  return (
    <>
      <Card submitPost={submitPost} />
      {isLoading && <h3 className="loading">Loading new post....</h3>}
      {posts.length <= 0 ? (
        <h3 className="loading">Loading....</h3>
      ) : (
        posts.map((postData) => (
          <PostCard
            key={postData.objectId}
            error={error}
            img={postData.image}
            title={postData.title}
            text={postData.description}
            category={postData.category}
          />
        ))
      )}
    </>
  );
};

export default App;
