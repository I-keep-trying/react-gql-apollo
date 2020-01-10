import React from 'react'
import Link from '../Components/Link'
import {GET_PRODUCTS} from '../Queries/GetProducts'
import '../style.css'

const RepositoryItem = ({ id, description, title, onlineStoreUrl }) => (
  <div>
    <div className="RepositoryItem-title">
      <h2>
        <Link href={onlineStoreUrl}>{title}</Link>
      </h2>
      <div className="RepositoryItem-title-action">{description}</div>
    </div>
    <div className="RepositoryItem-description">

{/*       <div className="row">
          <div className="col-sm">
              {products.edges.map(({ node }) => (
    <div key={node.id} className="RepositoryItem">
      <RepositoryItem {...node} />
    </div>
  ))}
            <div className="card" style={{ width: '18rem' }}>
              {images.edges.map(image => (
                <div>
                  <img
                    key={image.node.id}
                    src={image.node.originalSrc}
                    className="card-img-top img-fluid"
                    style={{ 'max-width': '100%', height: 'auto' }}
                    alt="cover"
                  />
                </div>
              ))}

              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Add to Cart?</button>
              </div>
            </div>
          </div>
        
      </div> */}
    </div>
  </div>
)
export default RepositoryItem
