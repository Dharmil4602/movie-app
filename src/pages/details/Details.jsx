import React from 'react'
import './details.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
 
function Details() {
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details