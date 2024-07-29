import { Table } from 'flowbite-react'
import React from 'react'

const CellSkeleton = () => {
  return (
    <Table.Cell
              
    className="whitespace-nowrap font-medium text-center  text-gray-900 dark:text-white"
  >
    <div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    </div>
  </Table.Cell>
  )
}

export default CellSkeleton