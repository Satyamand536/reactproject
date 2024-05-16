import Book from "./Book";
const BookStore = () => {
    const books = [
        {
            title:"Icebreaker",
            imglink:
        "https://static.wixstatic.com/media/13dc69_a6f4274d6b374997afa218755a453ed8~mv2.jpg/v1/fill/w_642,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/13dc69_a6f4274d6b374997afa218755a453ed8~mv2.jpg"
      author: "Hannah Grace",
        },
    ];

    return (
      <div>
        <h1>{Book.title}</h1>
        <img src={Book.imglink} />
        <h2>{Book.author}</h2>
      </div>
    );
  };
  export default Book