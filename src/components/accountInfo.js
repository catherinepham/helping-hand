import React from 'react'

const accountInfo = ({emailA}) => {
  return (
    <div style={S}> 
        <h6>
            Account Information:
        </h6>
        <h8>
            email: {emailA}
        </h8>
    </div>
  )
}

export default accountInfo

const S = {
    marginTop: '4%',
    marginLeft: '1%',
    marginRight: '80%',
    backgroundColor: '#f9f2ff',
    borderRadius: '8px',
}
