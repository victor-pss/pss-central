// default table container
import { useState, useEffect } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Client = {
  _id: String,
  name: String,
  clientCode: String,
  phone: String,
  email: String,
  status: String,
  updated_at: Date
}

const defaultData: Client[] = [
  {
    _id: "",
    name: "loading...",
    clientCode: "",
    phone: "",
    email: "",
    status: "",
    updated_at: new Date(),
  },
]

const columnHelper = createColumnHelper<Client>();

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('clientCode', {
    header: () => 'clientCode',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('phone', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
    cell: info => info.getValue() || null,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('updated_at', {
    cell: info => {
      const date = new Date(info.getValue());
      return date ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` : '';
    },
    footer: info => info.column.id,
  }),
    columnHelper.display({
      id: 'actions',
      cell: ({ row }) => (
        <div>
          <button onClick={() => 
            alert(
              `Editing id ${row.original._id} - ${row.original.name}`
            )}>Edit</button>
          <button onClick={async () => {
            await fetch(
              `http://localhost:5001/api/db/clients/${row.original._id}`,
              { method: "delete"}
            )}}>Delete</button>
        </div>
      )
    }),
]

const Table = () => {
  const [data, setData] = useState(defaultData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  
  useEffect(() => {
    const getPayload = async () => {
      const clients = await fetch("http://localhost:5001/api/db/clients");
      const clientData = await clients.json()
      console.log(clientData);
      setData(clientData);
    }

    getPayload();
  }, []);

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};

export default Table;
