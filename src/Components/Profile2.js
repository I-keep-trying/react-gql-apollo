import React from 'react'
import { Query } from 'react-apollo'
import Loading from '../utilities/Loading'
import QueryShop from '../Queries/QueryShop'

const Profile = () => (
  <Query query={QueryShop}>
    {({ data, loading }) => {
      // const { viewer } = data;
      console.log(data)
      if (loading || !data) {
        return <Loading />
      }
      return (
        <div>
           {data.shop.name}
        </div>
      )
    }}
  </Query>
)

export default Profile
