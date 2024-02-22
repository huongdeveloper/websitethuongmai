import React, { useState } from 'react'
import { Table } from 'antd';
import Loading from '../../../Loading'
import { Excel } from "antd-table-saveas-excel";
import { useMemo } from 'react';
const TableComponent = (props) => {
    const { selectionType = 'checkbox', data:dataSource = [], isLoading = false, columns = [], handleDelteMany } = props
    const [rowSelectedKeys, setRowSelectedKeys] = useState([])
    const newColumnExport = useMemo(() => {
        const arr = columns?.filter((col) => col.dataIndex !== 'action')
            return arr
    }, [columns])

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys)
    },
    
  };
    const handleDeleteAll = () => {
        handleDelteMany(rowSelectedKeys)
    }
    const exportExcel = () => {
        const excel = new Excel();
        excel
          .addSheet("test")
          .addColumns(newColumnExport)
          .addDataSource(dataSource, {
            str2Percent: true
          })
          .saveAs("Excel.xlsx");
    };

  return (
    <div className='TableComponent'>
        <Loading isLoading={isLoading}>
        <div className='TableComponent-header'>
        {!!rowSelectedKeys.length && (
            <div className='TableComponent-Delete-all' onClick={handleDeleteAll}>Xóa tất cả</div> )}
            <button onClick={exportExcel}>Export Excel</button>
        </div>
        <Table
        rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataSource}
          {...props}/>
          </Loading>
    </div>
  )
}

export default TableComponent
