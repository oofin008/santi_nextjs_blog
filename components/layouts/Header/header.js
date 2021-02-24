import React, { Fragment, Component } from "react";
import Link from "next/link";
import HeaderStyleBox from "./style";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
    };
  }
  render() {
    return (
      <Fragment>
        <HeaderStyleBox>
          <div className="header-logo">
            <Link href="/">
              <img src="/vercel.svg" alt="Vercel Logo" />
            </Link>
          </div>
          <div className="header-middle-area">
            <nav className="main-nav">
              <ul>
                <li>
                  <Link href="/">
                    <span>Index</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <span>Blog</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </HeaderStyleBox>
      </Fragment>
    );
  }
}

export default Header;
