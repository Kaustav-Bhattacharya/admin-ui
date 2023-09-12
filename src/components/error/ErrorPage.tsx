import { Link } from "react-router-dom"
import "./errorPage.scss"

const ErrorPage = () => {
  return (
    <div className="mainBlock">
      <div className="errormsg">
        <h1>404 ERORR!</h1>
        <div className="detail">
          This page is not yet available. Sorry for the inconvenience. We are
          working on it till then please visit{" "}
        </div>
        <div className="link">
          <em>
            <u>
              <Link to="/">Home</Link>
            </u>
          </em>
          .
        </div>
      </div>
    </div>
  )
}

export { ErrorPage }
