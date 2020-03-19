import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#fede96',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#2c3a49`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <div>
            <Link
                to={"/about"}
                style={{
                display: 'inline',
                margin: '0px 10px'
            }}>About</Link>

            <Link
                to={"/diary"}
                style={{
                    display: 'inline',
                    margin:'0px 10px'
                }}>Diary</Link>
            <Link
                to={"/me"}
                style={{
                    display: 'inline',
                    margin:'0px 10px'
                }}>fedealessi96</Link>
        </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
