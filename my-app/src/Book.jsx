const Book = () => {
  const book1 = {
    title: "Icebreaker",
    imglink:
      "https://static.wixstatic.com/media/13dc69_a6f4274d6b374997afa218755a453ed8~mv2.jpg/v1/fill/w_642,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/13dc69_a6f4274d6b374997afa218755a453ed8~mv2.jpg",
    author: "Hannah Grace",
  };
  return (
    <h1>{book1.title}</h1>
    <img src={book1.imgLink}>
      <h2>{book1.author}</h2>
    </img>
  );
};
export default Book;
