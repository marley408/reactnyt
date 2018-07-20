import React from 'react';

// const Results = () => {
//   return(
//       <div class="card">
//             <div class="card-header">
//               <h3>
//                 <a href='' class="card-link">Title as a Link</a>
//               </h3>
//               </div>
//               <div class="card-body">
//               <p class="card-text">Summary</p>
//               <button type="button" class="btn btn-danger save">Save Article</button>
//             </div>
//           </div>
//   )

// }

const Results = () => {
  return(
    <div className='card'>
        <div className='card-header'>
          <h3> Results</h3>
        </div>
        <div className='card-body'>
          <div className="list-group">
            <div className="list-group-item">  
              <h3>
                <a href='' className="card-link">Title as a Link</a>
                <button type="button" class="btn btn-danger save">Save</button>
              </h3>           
            </div>
          </div>
        </div>
    </div>
  )

}

export default Results
