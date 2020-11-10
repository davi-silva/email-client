import React from 'react'
import PropTypes from 'prop-types'

import { ResultsP, Line } from '../../../styles/components/UI/Results/Results'

const Results = ({ emailCount }) => {
  return (
    <>
      <ResultsP>
        Results: <span>{emailCount}</span> email{emailCount > 1 && ('(s)')}
      </ResultsP>
      <Line />
    </>
  )
}

Results.propTypes = {
  emailCount: PropTypes.number.isRequired
}

export default Results
