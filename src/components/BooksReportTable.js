import React from 'react';
function BooksReportTable(props){
   const books=props.books
  return(
    <table className="table table-striped table-hover">
   <thead className="text-center">
     <tr>
       <th>Tenant Name:</th>
       <th>Contact Info:</th>
       <th>Due Occupation Date:</th>
       <th>Due Evacuation Date:</th>
     </tr>
   </thead>
   <tbody className="text-center">
   {
     books.map((books)=>(
       <tr id="nm">
          <td >{books.name}</td>
          <td >{books.contact}</td>
          <td >{books.occupation_date}</td>
          <td >{books.evacuation_date}</td>
       </tr>
     ))
   }

   </tbody>
 </table>
  )
}
export default BooksReportTable;
