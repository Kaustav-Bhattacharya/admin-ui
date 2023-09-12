import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"

type Props = {
  path: string
  columns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //add user to the db
    console.log(e, " has been added to the store")
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.path}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export { Add }
