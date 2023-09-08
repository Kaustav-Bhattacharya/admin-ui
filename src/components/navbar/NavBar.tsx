import "./navbar.scss"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>K-Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icons" />
        <img src="/app.svg" alt="" className="icons" />
        <img src="/expand.svg" alt="" className="icons" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png"
            alt=""
          />
          <span>Kaustav</span>
        </div>
        <img src="settings.svg" alt="" className="icons" />
      </div>
    </div>
  )
}

export { NavBar }
