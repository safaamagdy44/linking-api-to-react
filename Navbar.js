import React from 'react';
import { BsSearch } from 'react-icons/bs';



const Navbar = ({search}) => {
 const onSearch=(word)=>{
    return(search(word))
  }
    return (
        <div className='container'>
  <div className='row'>
    <div className='col-md-2'>
      <h1 >lo<span className=' text-dark bg-success rounded-circle '>go</span></h1>
    </div>{/* col-2 */}
    <div className='col-md-10'>
    <div className="input-group mb-3 ">
  <span className="input-group-text bg-success" id="basic-addon1"><BsSearch/></span>
  <input type="text" className="form-control" placeholder=" تمت ازاله الصور تجنبا للذنوب =========>اكتب اسم الفيلم الذي تريد البحث عنه" onChange={(e)=>{onSearch(e.target.value)}} aria-label="Username" aria-describedby="basic-addon1" />
</div>{/* input-group */}
    </div>{/* col-10 */}
  </div>  {/* row */}

</div>

    );
}

export default Navbar;
