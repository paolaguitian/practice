import React from 'react';


const InfoCard = ({ data } = {}) => {
  console.log(data)
  const renderCard = () => {
    return (
      data.results.map(({ name } = '') => {
        return (
          <h2>
            {name}
          </h2>
        )
      })
    )
  }
  return (
    <div>
      {renderCard()}
    </div >
  )
}

export default InfoCard;