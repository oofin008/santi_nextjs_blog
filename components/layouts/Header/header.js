import React, { Component } from 'react'
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
      <>
        <HeaderStyleBox>
          <Link href='/' >Index</Link>
          <Link href='/blog' >Blog</Link>
        </HeaderStyleBox>
      </>
    )
  }
}

export default Header
