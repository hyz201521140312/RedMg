import React, { Component } from 'react'
import style from  './Note.module.css'
import PageBox from '../../Zqx/PageBox/PageBox'

export default class Note extends Component {
  render() {
    return (
      <div className={style.notebox}>
          <PageBox />
          <PageBox />
          <PageBox />
          <PageBox />
          <PageBox />
          <PageBox />    
          <PageBox />
          <PageBox />
          <PageBox />
          <PageBox />
          <PageBox />
          <PageBox />
      </div>
    )
  }
}
