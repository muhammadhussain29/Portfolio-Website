"use client";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Loader2,
} from "lucide-react";
import { Pagination } from "@/types/global";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  searchKey?: string;
  searchPlaceholder?: string;
  pagination: Pagination;
  handleLimitChange: (value: number) => void;
  handlePageChange: (value: number) => void;
  loading: boolean;
  handleClickRow?: (row: T) => void;
}

function DataTable<T>({
  data,
  columns,
  searchKey,
  searchPlaceholder = "Search...",
  pagination,
  handleLimitChange,
  handlePageChange,
  loading,
  handleClickRow,
}: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  const getPageNumbers = () => {
    const total = pagination.totalPages;
    const current = pagination.page;
    const delta = 2; // current ke aas paas kitne pages

    const range: (number | string)[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);

    if (left > 2) range.push("...");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < total - 1) range.push("...");

    if (total > 1) range.push(total);

    return range;
  };

  return (
    <div className=" bg-white rounded-lg border border-gray-300 shadow-sm">
      {/* Search */}
      {searchKey && (
        <div className="p-4 border-b border-gray-300">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg bg-white text-foreground placeholder-slate-grey focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={`flex items-center gap-2 ${
                          header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : ""
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-6 w-full text-center text-gray-500 "
                >
                  <div className="flex items-center justify-center gap-2 w-full text-foreground">
                    <Loader2 className="w-6 h-6 text-primary animate-spin" />{" "}
                    <span>Loading...</span>
                  </div>
                </td>
              </tr>
            ) : table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`${handleClickRow ? "cursor-pointer" : ""} hover:bg-gray-100 transition-colors`}
                  onClick={() => handleClickRow?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-foreground"
                      onClick={(e) => {
                        if (cell.column.columnDef.header === "Actions") {
                          e.stopPropagation();   // 🔥 only stop for Actions column
                        }
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
     
      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-300 bg-white">
        <div className="text-sm text-gray-500">
          Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
          {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
          {pagination.total} results
        </div>

        <div className="flex items-center gap-1">
          {/* Prev */}
          <button
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={!pagination.hasPrev || loading}
            className="px-3 py-2 rounded-md text-sm
        disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
          >
            ‹
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-3 py-2 text-sm text-gray-400">
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`px-3 py-2 rounded-md text-sm transition cursor-pointer
            ${
              pagination.page === page
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
              >
                {page}
              </button>
            ),
          )}

          {/* Next */}
          <button
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={!pagination.hasNext || loading}
            className="px-3 py-2 rounded-md text-sm
        disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
