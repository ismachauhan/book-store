const Book = ({ data }) => {
    console.log(data);
    return (
        <div className="book">
            <h2>{Title}</h2>
            <img src={imgLink}</img>
            <h2>{Author}</h2>
            <h3>{Price</h3>
        </div>
    )
};
export default Book;
const Price = () => {
    return <h3>$120</h3>
}
const Image = () => {
    return <h3><img src="https://m.media-amazon.com/images/I/61ewyOG0IZS._SY522_.jpg"></img></h3>
}
const Title = () => <h2>HAMLET</h2>
const Author = () => {
    return <h3>WILLIAM SHAKESPEARE</h3>
    const Price = () => {
        return <h3>$120</h3>
    }
    const Image = () => {
        return <h3><img src="https://m.media-amazon.com/images/I/61ewyOG0IZS._SY522_.jpg"></img></h3>
    }
    const Title = () => <h2>HAMLET</h2>
    const Author = () => {
        return <h3>WILLIAM SHAKESPEARE</h3>
    }
}