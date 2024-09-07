import React,{useState} from 'react';
import Nav from '../components/nav';
import ImageCaroussel from '../components/imagecaroussel';
import HostelDesc from '../components/hosteldesc';
import Footer from '../components/footer';
import BookButton from '../components/bookButton';
import BookForm from '../components/bookForm';
function Description(){
  //NAme of clicked hostel hostel
  //Addintional pictures
  //Some description about the hostel
  //
  const [data,setData]=useState({name:'Acorn',description:"Welcome to the best hostel in Kisumu,we offer a variety of features that you can surely no.There is free wifi that is extremely fast.We also have back up generators to support the system when thisngs go bad in any way.",imageURL:['../img/a.jpg','../img/b.jpg','../img/c.jpg']})
  return(
    <>
    <Nav/>
    <div  style={{position:'relative',top:10}} >
    <h1  style={{position:'absolute',top:50}} ><i>{data.name}</i></h1>
    <div className="horizontal-line"></div>
    <ImageCaroussel imageURL={data.imageURL} />
    <div className="horizontal-line"></div>
    <h6 className="mt-1">Description:</h6><hr/>
    <div className="p-2">
    <HostelDesc description={data.description} />
    </div>

    <BookButton />
    <Footer />
    </div>

    </>
  )
}
export default Description;
