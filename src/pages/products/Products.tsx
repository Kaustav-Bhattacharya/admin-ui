import { GridColDef } from "@mui/x-data-grid"
import { Add } from "../../components/add/Add"
import { DataTable } from "../../components/dataTable/DataTable"
import { products } from "../../data"
import { useState } from "react"
import './products.scss'

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
]
const Products = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="users">
      <div className="info">
        <h1>Prtoducts</h1>
        <button onClick={() => setOpenModal(true)}>Add New Product</button>
      </div>
      <DataTable path="users" columns={columns} rows={products} />
      {openModal && (
        <Add path="product" columns={columns} setOpen={setOpenModal} />
      )}
    </div>
  )
}

export { Products }
