import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS  } from './column'
import './table.css';
import GlobalFilter from './GlobalFilter';

const SortingTable = () => {


    // The React useMemo Hook returns a memoized value.
    // Think of memoization as caching a value so that it does not need to be recalculated.
    // The useMemo Hook only runs when one of its dependencies update.
    // This can improve performance.

    const columns = useMemo(() => COLUMNS, [])

    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups,footerGroups, page,nextPage, previousPage, prepareRow ,pageOptions,setPageSize, state, setGlobalFilter} = tableInstance // these are basically f() and arrays that use table hook 
    // from reat table package as given to usto enable easy table creation we need to use all of these with our html for raeact table to work as intended

    
    const { globalFilter } = state

    const { pageIndex , pageSize} = state


    return (
        <>      <div className='global_div'>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
                </div>
        <table  {...getTableProps()}>
            
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} >
                            {
                                headerGroup.headers.map(column => (

                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? '  :-) Asen ':'   (-: Desc'): ' -> CLICK TO SORT'}
                                        </span>
                                        </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead >
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()} >
                            {
                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                            <td></td>
                        </tr>

                        )
                    })
                }
            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
        <span className='pageIndex'>
            Page {' '}
            <strong>
                {pageIndex + 1} of { pageOptions.length}
            </strong> {' '}
        </span>
         <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
            {
                [5,10,20,50,100].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                       show{pageSize}
                    </option>
                ))
            }

         </select>
        <div className='prev_next'>
            <button onClick={()=> previousPage()}>Previous</button>
            <button onClick={()=> nextPage()}>Next</button>

        </div>
        </>
    )
}

export default SortingTable