import React from 'react'
// import PropTypes from 'prop-types'
import {SortedTable,TableTool} from '../../../Components/UILib/Table';
// import Icon from '../../Components/Icon'
import {mockProductList} from '../../../Utils/Constants/mockData'
import {Paper} from '../../../Components/UILib/Container';
import {Link} from 'react-router-dom';


const rows = [
  { id: 'Key', numeric: false, isCheckbox: false, label: 'Key' },
  { id: 'Name', numeric: false, isCheckbox: false, label: 'Name' },
  { id: 'Created_At', numeric: false, isCheckbox: false, label: 'Created_At' },
  { id: 'Updated_At', numeric: false, isCheckbox: false, label: 'Updated_At' },
  { id: 'Display', numeric: false, isCheckbox: true, label: 'Display' },
];
const ModelList = React.memo(() => {
  return (
    <Paper>
    <TableTool/>
    <Link to="/create-model">create model </Link>

    <SortedTable 
        data={mockProductList}
        headColumnName={rows}
        orderBy="Name"
        direction="asc"
        onRowClick={(e)=>console.log(e)}
        pagination={5}
      />

    </Paper>
  )
})

ModelList.propTypes = {

}

export default ModelList
