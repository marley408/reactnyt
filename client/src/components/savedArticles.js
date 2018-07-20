import React from 'react';



const SavedArticles = () => {
  return(
    <div className='card'>
        <div className='card-header'>
          <h3>Saved Articles</h3>
        </div>
        <div className='card-body'>
          <div className="list-group">
            <div className="list-group-item">  
              <h3>
                <a href='' className="card-link">Title as a Link</a>
                <button type="button" class="btn btn-danger save">Delete</button>
              </h3>           
            </div>
          </div>
        </div>
    </div>
  )

}

export default SavedArticles
