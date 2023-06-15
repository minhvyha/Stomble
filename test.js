const getArticlesFromApi = async () => {
  let response = await fetch('http://localhost:3012/u9clgWg4OzQBwLNp');
  let json = await response.json();
  console.log(json);
};
getArticlesFromApi();
