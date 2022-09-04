import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ getPage ,pageCount}) => {
    const handlePageClick=(data)=>{
        getPage(data.selected+1);
    }

    console.log(pageCount)
    // document.write(pageCount);
    return (
        <div>
            

            <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< السابق"


        containerClassName={'pagination justify-content-center my-5'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}

        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}

        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}

        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}

        activeClassName={'active'}
           
      />



        </div>
    );
}

export default Pagination;
