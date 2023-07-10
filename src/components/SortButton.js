import React from 'react';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { IconButton } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const SortButton = ({sortKey, sortOrder, columnName, onClick}) => {

  return (
    <div>
      <IconButton onClick={onClick}>
        {sortKey===columnName && sortOrder==='desc' ? <ArrowDropDownIcon color='success' size='small'/> : 
        sortKey===columnName && sortOrder==='asc' ? <ArrowDropUpIcon color='success' size='small'/> : 
        <SwapVerticalCircleIcon color='disabled' size='small' />}
      </IconButton>
       
    </div>
  )
}

export default SortButton
