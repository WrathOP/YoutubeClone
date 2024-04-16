/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnFiltersState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { FC, Fragment, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "../constants/functions";
import Button from "./UI-Components/button";
import Input from "./UI-Components/input";
import { DarkModeContext } from "../context/darkModeContext";

interface TableProps {
  columns: any[];
  data: any[];
  onRowClick?: (row: any) => void;
  title?: string;
  subtitle?: string;
  isPaginating?: boolean;
  isGlobalSearch?: boolean;
  searchPlaceholder?: string;
  showheader?: boolean;
  renderSubComponent?: (props: any) => React.ReactElement;
  headClass?: string;
  getRowCanExpand?: (row: any) => boolean;
  showGlobalSearch?: boolean;
  enableRowSelection?: boolean;
  rowSelection?: any;
  setRowSelection?: any;
  getSelectedRows?: any;
  setEmptyIds?: (b: boolean) => void;
  emptyIds?: boolean;
}

const Table: FC<TableProps> = ({
  columns,
  data,
  onRowClick,
  title,
  subtitle,
  isPaginating = true,
  isGlobalSearch = true,
  searchPlaceholder,
  showheader = true,
  renderSubComponent,
  headClass,
  getRowCanExpand = () => false,
  showGlobalSearch = true,
  enableRowSelection,
  getSelectedRows,
  setEmptyIds,
  emptyIds,
}) => {
  const [columnFilters, setColumnsFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const [rowSelection, setRowSelection] = useState<any>({});
  const { darkMode } = React.useContext(DarkModeContext);

  const color = darkMode ? "white" : "black";

  const table = useReactTable({
    data,
    columns,
    enableRowSelection: enableRowSelection,
    state: {
      columnFilters,
      rowSelection,
      expanded,
      globalFilter,
    },
    getRowCanExpand,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: isPaginating ? getPaginationRowModel() : undefined,
    onColumnFiltersChange: setColumnsFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
  });

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPageCount = table.getPageCount();

  const generatePageNumbers = (): (number | string)[] => {
    const numberOfPageNumbersToShow = 3;
    const pages: (number | string)[] = [];

    if (totalPageCount <= numberOfPageNumbersToShow) {
      for (let i = 1; i <= totalPageCount; i++) {
        pages.push(i);
      }
    } else {
      const halfRange = Math.floor(numberOfPageNumbersToShow / 2);
      const lowerBound = Math.max(currentPage - halfRange, 1);
      const upperBound = Math.min(currentPage + halfRange, totalPageCount);

      if (lowerBound > 1) {
        pages.push(1);

        if (lowerBound > 2) {
          pages.push("...");
        }
      }

      for (let i = lowerBound; i <= upperBound; i++) {
        pages.push(i);
      }

      if (upperBound < totalPageCount) {
        if (upperBound < totalPageCount - 1) {
          pages.push("...");
        }
        pages.push(totalPageCount);
      }
    }

    return pages;
  };

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    table.getColumn("item_code")?.setFilterValue(e.target.value);
  };

  const globalFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(String(e.target.value));
  };

  // const resetSelectedRows = () => {
  //   setRowSelection({});
  // };

  useEffect(() => {
    if (emptyIds) {
      table.toggleAllRowsSelected(false);
      setRowSelection({});
    }
    setEmptyIds && setEmptyIds(false);
    if (getSelectedRows) getSelectedRows(table.getSelectedRowModel().rows);
  }, [table.getSelectedRowModel(), emptyIds]);

  return (
    <>
      {title && (
        <section className="flex items-center justify-between mt-5 mb-6">
          <div>
            <h4 className="text-2xl font-semibold text-[#49484C]">{title}</h4>
            <p className="text-base font-medium text-[#49484C] opacity-60">
              {subtitle}
            </p>
          </div>
          {showGlobalSearch && (
            <div className="inline-flex items-center gap-2">
              <Input
                type="input"
                value={globalFilter}
                placeholder={searchPlaceholder || "Search..."}
                onChange={isGlobalSearch ? globalFilterHandler : filterHandler}
                className="px-3  rounded-lg text-base text-[#1B1A1F]"
                showIcon={true}
              />
            </div>
          )}
        </section>
      )}
      <div className="relative z-0  border rounded-[0.625rem] min-w-[600px] overflow-auto">
        <table className="w-full text-sm text-left table-auto rounded-[0.625rem]">
          {showheader && (
            <thead className={cn(`pt-4 w-full ${headClass ? headClass : ""}`)}>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="border-b divide-gray-200" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      style={{ width: header.column.getSize() || "auto" }}
                      className={`py-3 px-4 text-left text-sm font-normal overflow-hidden text-[0,0,0,0.4] `}
                      key={header.id}
                    >
                      <div className="flex items-center max-w-full gap-2 overflow-hidden">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}

                        {header.column.getCanSort() && (
                          <button
                            onClick={header.column.getToggleSortingHandler()}
                            className={cn(
                              darkMode ? "bg-grey-800" : "bg-gray-200","rounded-lg size-5"
                            )}
                          >
                            <ArrowDown color={color} size={18} />
                          </button>
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}

          {data?.length === 0 && (
            <td colSpan={table.getAllColumns().length}>
              <p className="mt-10 mb-10 text-3xl text-center">No data...</p>
            </td>
          )}

          {data && data.length > 0 && (
            <tbody className="bg-white divide-y divide-gray-200 ">
              {table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  <tr
                    className={`${
                      onRowClick ? "hover:bg-gray-200 cursor-pointer" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onRowClick) onRowClick(row);
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-3 overflow-hidden text-sm not-italic font-semibold text-ellipsis line-height-normal whitespace-nowrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                  {row.getIsExpanded() && renderSubComponent && (
                    <tr>
                      {/* 2nd row is a custom 1 cell row */}
                      <td colSpan={row.getVisibleCells().length}>
                        {renderSubComponent({ row })}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          )}
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>

      {isPaginating && (
        <div className="flex items-center justify-center mb-1 mt-7">
          <Button
            className="gap-2 text-sm font-medium border rounded-r-none"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <ArrowDown color={color} rotate={90} />
            Previous
          </Button>
          {generatePageNumbers().map((pageNumber, index) => (
            <Fragment key={index}>
              {pageNumber === "..." ? (
                <span className="mx-2">...</span>
              ) : (
                <Button
                  className={`border rounded-none gap-2 ${
                    currentPage === pageNumber
                      ? "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                      : "hover:bg-gray-100 hover:text-gray-700"
                  }`}
                  onClick={() => table.setPageIndex(Number(pageNumber) - 1)}
                >
                  {pageNumber}
                </Button>
              )}
            </Fragment>
          ))}
          <Button
            className="gap-2 text-sm font-medium border rounded-l-none"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next
            <ArrowDown color={color} rotate={-90} />
          </Button>
        </div>
      )}
    </>
  );
};

export default Table;
