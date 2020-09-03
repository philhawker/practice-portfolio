import React, { Component } from "react"
import moment from "moment"

var update = function () {
  document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a')
}

setInterval(update, 1000)

export default class Time extends Component {
  render() {
    return (
      <div id="datetime"></div>
    )
  }
}