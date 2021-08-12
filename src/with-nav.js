import { NavLink } from 'react-router-dom'

const demos = ['01']

const Menu = ({ children }) => (
  <div>
    <style>{`
    .nav {
      background: black;
      padding: 10px;
      font-size: 18px;
    }
    .nav a {
      margin: 0 20px 0 0;
      background: #FFF8DC;
      padding: 5px 10px;
      display: inline-block;
      border-radius: 5px;
    } 
    `}</style>
    <div className="nav">
      {demos.map(demo => (
        <NavLink key={demo} to={`/${demo}`}>
          {demo}
        </NavLink>
      ))}
    </div>
    {children}
  </div>
)

export const withNav = Comp => () =>
  (
    <Menu>
      <Comp />
    </Menu>
  )
