import React from 'react'
import './List.css'
import nick from '../img/nick.png';
import sagar from '../img/jade.png';
import gaurav from '../img/gaurav.png';
import sagard from '../img/sagar.jpg';
import vishal from '../img/vishal.png';
import jayesh from '../img/jayesh.png';

const List = () => {
  return (
    <div>
        <div className="row">
        <div className="col ">
          <div className="  text-center fs-3 fw-bolder">Friendlist</div>
          <table className='table table-active ms-2 w-100 bg-seconadary ' >
            

            <tr className='bg-warning '>
                <th >Sr. No.</th>
                <th>Name </th>
                <th>Last Name </th>
                <th>Mo. No.  </th>
                <th>Email Id </th>
                <th>D.O.B. </th>
                <th>Thumbnail </th>
            </tr>
            <tr>
                <td> 01 </td>
                <td>Swapnil</td>
                <td>Nikose</td>
                <td>99232135**</td>
                <td>nicks**gmail.com </td>
                <td>08/08/2*** </td>
                <td className="rounded-2 img-fluid "><img src={nick} alt='' className="rounded-5" height="120px" width="100px"  /></td>
            </tr>
            <tr>
                <td> 02 </td>
                <td>sagar</td>
                <td>Bhujade</td>
                <td>3256412563**</td>
                <td>bhujade**gmail.com </td>
                <td>18/08/2*** </td>
                <td className="rounded-2 img-fluid "><img src={sagar}  className="rounded-5" alt="" height="120px" width="100px"  /></td>
            </tr>
            <tr>
                <td> 03 </td>
                <td>Gaurav</td>
                <td>Gaurkhede</td>
                <td>70295496**</td>
                <td>gaurav**gmail.com </td>
                <td>25/05/2*** </td>
                <td className="rounded-2 img-fluid "><img src={gaurav} alt="" className="rounded-5" height="120px" width="100px"  /></td>
            </tr>
            <tr>
                <td> 04 </td>
                <td>sagar</td>
                <td>Dehare</td>
                <td>69857463**</td>
                <td>sagar**gmail.com </td>
                <td>08/09/2*** </td>
                <td className="rounded-2 img-fluid "><img src={sagard} alt="" className="rounded-5" height="120px" width="100px"  /></td>
            </tr>
            <tr>
                <td> 05 </td>
                <td>Kunal</td>
                <td>Waghade</td>
                <td>85749621**</td>
                <td>kwaghade**gmail.com </td>
                <td>01/07/2*** </td>
                <td className="rounded-2 img-fluid "><img src={nick} alt="" className="rounded-5" height="120px" width="100px"  /></td>
            </tr>
            <tr>
                <td> 06 </td>
                <td>Vishal</td>
                <td>Gurunule</td>
                <td>52416358**</td>
                <td>vguru**gmail.com </td>
                <td>10/09/2*** </td>
                <td className="rounded-2 img-fluid "><img src={vishal} alt="" className="rounded-5" height="120px" width="100px"  /></td>
            </tr>
            <tr>
                <td> 07 </td>
                <td>Jayesh</td>
                <td>Rathod</td>
                <td>72640652**</td>
                <td>jay**gmail.com </td>
                <td>**/**/2*** </td>
                <td className="rounded-2 img-fluid "><img src={jayesh} alt="" className="rounded-5" height="120px" width="100px"  /></td>
            </tr>
        </table>
        </div>

      </div>
      
    </div>
  )
}

export default List
