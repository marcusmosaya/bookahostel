import React,{useState} from 'react';
import BookForm from '../components/bookForm';


function BookButton() {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    console.log(showComponent);
      setShowComponent(!showComponent);
  };
  return(

    <div className="d-flex flex-row-reverse p-2 ">

    <button className="btn btn-success btn-lg bookButton" onClick={handleClick}>
    Book
    </button>
    {showComponent && <BookForm />}


    </div>
  )

}
export default BookButton;
