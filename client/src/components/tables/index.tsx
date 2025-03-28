// default table container
import { useState, useEffect } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Client = {
  name: String,
  clientCode: String,
  phone: String,
  email: String,
  status: String,
  updated_at: Date
}

const defaultData: Client[] = [
  {
    name: "Victor Alcaraz",
    clientCode: "ALC.V.",
    phone: "+19097588323",
    email: "victor.alcaraz@plasticsurgerystudios.com",
    status: "Active",
    updated_at: new Date(),
  },
  {
    name: "Michael Powers",
    clientCode: "POW.M.",
    phone: "+19097588300",
    email: "michael@plasticsurgery.com",
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
      return date ? date.toLocaleDateString() : '';
    },
    footer: info => info.column.id,
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
