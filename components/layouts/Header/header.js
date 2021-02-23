import React, { Fragment, Component } from 'react'
import Link from 'next/link'
import HeaderStyleBox from './style'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.props.currentPage
    }
  }
  render() {
    return (
      <Fragment>
        <HeaderStyleBox>
          <Link href='/' >Index</Link>
          <Link href='/blog' >Blog</Link>
        </HeaderStyleBox>
      </Fragment>
    )
  }
}

export default Header
