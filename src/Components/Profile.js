import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Loading from '../utilities/Loading'
import Link from '../Components/Link'

import { GET_PRODUCTS } from '../Queries/GetProducts'
// import RepositoryList from './RepositoryList'
import ErrorMessage from '../utilities/Error'

const Profile = () => (
  <Query query={GET_PRODUCTS}>
    {({ data, loading, error, description, title, onlineStoreUrl }) => {
      if (error) {
        return <ErrorMessage error={error} />
      }

      if (loading || !data) {
        return <Loading />
      }
      return (
/*       <RepositoryList repositories={data.products} /> */
/*         <div className="row">
{data.products.edges.map(product => (
            <div className="col-sm">
              <h5 className="card-title">{product.node.title}</h5>
              <p className="card-text">{product.node.description}</p>
            </div>
          ))} 
        </div> */

                <div>
        <div className="RepositoryItem-title">
          <h2>
            <Link href={onlineStoreUrl}>{title}</Link>
          </h2>
          <div className="RepositoryItem-title-action">{description}</div>
        </div>
        <div className="RepositoryItem-description">
    
          <div className="row">
          {data.products.edges.map(product => (
                <div className="col-sm">
                  <div className="card" style={{'width': "18rem"}}>
                      {product.node.images.edges.map(image => (
                          <div>
                           <img
                           key={image.node.id}
                           src={image.node.src}
                           className="card-img-top img-fluid"
                           style={{'max-width': '100%','height': 'auto' }}
                           alt="cover"
                         /> 
                         </div>
                      ))}
                    <div className="card-body">
                      <h5 className="card-title">{product.node.title}</h5>
                      <p className="card-text">{product.node.description}</p>
                      <button className="btn btn-primary">Buy</button>
                    </div>
                  </div>
                </div>
              ))}
 
            
          </div>
        </div>
      </div>

      )
    }}
  </Query>
)

export default Profile
