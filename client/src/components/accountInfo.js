import React from 'react'

const accountInfo = ({emailA, nameA}) => {
  return (
    <div style={S}> 
        <h6 style={B}>
          Account Information:
        </h6>
        <h6 >
          Name: {nameA}
        </h6>
        <h8>
          Email: {emailA}
        </h8>
        
    </div>
  )
}

export default accountInfo

const B = {
  fontSize: '20px',
}

const S = {
    marginTop: '4%',
    marginLeft: '40%',
    marginRight: '40%',
    backgroundColor: '#f9f2ff',
    borderRadius: '8px',
}
