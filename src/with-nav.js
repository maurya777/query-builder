import { NavLink } from 'react-router-dom'

const demos = ['01', '02', '03', '04', '05']

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
      <NavLink to={'/'}>Full Demo</NavLink>
      <NavLink to={'tree-to-nodeleaf?level=01'}>Tree to Node Leaf</NavLink>
      <NavLink to={'nodeleaf-to-tree?level=01'}>Node Leaf to Tree</NavLink>
      {demos.map(demo => (
        <NavLink key={demo} to={`?level=${demo}`}>
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
