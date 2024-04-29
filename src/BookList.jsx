import Book from "./Book";
const data1={
    title:"Let Us C",
    author:"Yashwant Kanitkar",
    imgLink:"https://m.media-amazon.com/images/I/51CxmVYKYsL._SY445_SX342_.jpg",
    price:$100,
};
const BookList=()=>{
    return (
        <div className="booklist">
            <Book 
            title={data1.title}
             author={data1.author}
             imgLink={data1.imgLink}
             price={data1.author}
             />
        </div>
    )
  };
  export default BookList;
  