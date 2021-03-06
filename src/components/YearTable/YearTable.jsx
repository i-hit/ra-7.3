import React from 'react'
import PropTypes from 'prop-types'

function YearTable(props) {
  console.log('YearTable', props)

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
          {props.list.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

YearTable.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
}

export default YearTable
