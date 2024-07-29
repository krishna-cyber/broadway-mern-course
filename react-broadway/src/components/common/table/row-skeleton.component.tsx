type RowSkeletonProps = {
  rows: number;
  cols: number;
};
import { Table } from "flowbite-react";
import CellSkeleton from "./cell-skeleton.component";
const RowSkeleton = ({ rows, cols }: RowSkeletonProps) => {
  return (
    <>
      {[...Array(rows)].map((_, i: number) => (
        <Table.Row
          key={i}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          {[...Array(cols)].map((_, i: number) => (
            <CellSkeleton key={i} />
          ))}
        </Table.Row>
      ))}
    </>
  );
};

export default RowSkeleton;
