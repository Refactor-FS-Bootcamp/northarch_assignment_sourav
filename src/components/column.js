//  what i am doing here is to map specific each column value to our data which is stored in data
import ColumnFilter, { columnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter : ColumnFilter
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter : ColumnFilter
    }
    , {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        Filter : ColumnFilter
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Filter : ColumnFilter
    },

    {
        Header: 'AGE',
        Footer: 'AGE',
        accessor: 'age',
        Filter : ColumnFilter
    }
]

// lets group some column for this we have to create new constant

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },

            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    }, 
    {
        Header : 'Info',
        Footer : 'Info',
        columns : [

            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            },
        
            {
                Header: 'AGE',
                Footer: 'AGE',
                accessor: 'age'
            }
        ]
    }
]