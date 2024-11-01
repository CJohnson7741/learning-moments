export const PostFilterBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="search posts"
        className="post-search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
    </div>
  );
};
