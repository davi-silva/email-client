import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SearchIcon from '../../../assets/icon_search.svg'
import Calender from '../../../assets/icon_calender.svg'

import {
  SearchBarDiv,
  SearchDiv,
  Input,
  SearchButton
} from '../../../styles/components/UI/SearchBar/SearchBar'

const SearchBar = ({ onChangeEmails }) => {
  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
    onChangeEmails(e, e.target.value)
  }

  return (
    <SearchBarDiv>
      <SearchDiv onSubmit={(e) => onChangeEmails(e, search)}>
        <div className='icon-input'>
          <div>
            <img src={Calender} />
          </div>
          <Input type='text' onChange={onChangeSearch} autoComplete='new-password' />
        </div>
        <div>
          <SearchButton type='submit'>
            <img src={SearchIcon} />
          </SearchButton>
        </div>
      </SearchDiv>
    </SearchBarDiv>
  )
}

SearchBar.propTypes = {
  onChangeEmails: PropTypes.func.isRequired
}

export default SearchBar
