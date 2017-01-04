import React from 'react'
import CountrItem from '../components/countr-item'
import Header from '../components/header'
import styles from '../components/style'
import uuid from 'uuid/v4'
import Modal from 'react-modal'
function toBuffer(obj) {
  return new Buffer(JSON.stringify(obj)).toString('base64')
}
export default class Countr extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: {},
      modal: false,
      hash: ''
    }
  }
  openModal() {
    this.setState({modal: true}, () => {
      this.refs.addInput.focus()
    })
  }
  closeModal() {
    this.setState({modal: false})
  }
  addCountr() {
    const input = this.refs.addInput.value
    if (input.length > 25) {
      alert(`${input} is a bit too long. Max 25 Chars`)
    }
    if (input && input.length <= 25) {
      this.closeModal()
      const id = uuid()
      const newCountr = {}
      newCountr[id] = {
        name: input.trim(),
        n: 0
      }
      const newCounter = Object.assign({}, this.state.counter, newCountr)
      this.setState({
        counter: newCounter,
        hash: toBuffer(newCountr)
      })
    }
  }
  handleDel(key) {
    const deleted = this.state.counter
    const res = confirm(`Delete ${deleted[key].name}?`)
    if (res) {
      delete deleted[key]
      this.setState({
        counter: deleted,
        hash: toBuffer(deleted)
      })
    }
  }
  handleCountrAct(id, type) {
    const countr = this.state.counter
    countr[id].n = type === 'DECR' ? countr[id].n - 1 : countr[id].n + 1
    const newCountr = Object.assign({}, this.state.counter, countr[id].n)
    this.setState({
      counter: newCountr,
      hash: toBuffer(newCountr)
    })
  }
  componentDidMount() {
    if (document.location.hash.length > 0) {
      const countr = JSON.parse(Buffer.from(document.location.hash.split('#')[1], 'base64'))
      if (Object.keys(countr).length > 0) {
        console.log(countr)
        this.setState({
          counter: countr,
          hash: document.location.hash.split('#')[1]
        })
      }
    } else if (Object.keys(JSON.parse(localStorage.counter)).length > 0) {
      const countr = JSON.parse(localStorage.counter)
      this.setState({
        counter: countr,
        hash: toBuffer(countr)
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.counter = JSON.stringify(this.state.counter)
  }
  renderCountr() {
    const render = []
    for (const key in this.state.counter) {
      render.push(
        <CountrItem
          key={key}
          countr={this.state.counter[key]}
          n={this.state.counter[key]}
          inc={() => this.handleCountrAct(key, 'INC')}
          decr={() => this.handleCountrAct(key, 'DECR')}
          del={() => this.handleDel(key)}
        />
      )
    }
    return (
      <div>
        {render}
        <div style={{textAlign: 'center'}}>
          <a className="countr-link" href={`#${this.state.hash}`}>countr v1.0.1</a>
          <span> | </span>
          <a className="countr-link" href="https://github.com/ntwcklng/countr">github</a>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <Header />
        <div className="app">
        <style jsx>{styles}</style>
          <h1 onClick={() => this.openModal()}>countr+</h1>
          <div className="countr-items">
            <Modal closeTimeoutMS={200} isOpen={this.state.modal} onRequestClose={() => this.closeModal()} contentLabel="Add Countr">
              <div className="countr-modal_close" onClick={() => this.closeModal()}>close</div>
              <div>
                <input type="text" placeholder="Description" ref="addInput" className="countr-input_add"/>
                <div className="countr-modal_add" onClick={() => this.addCountr()}>add</div>
              </div>
            </Modal>
            {Object.keys(this.state.counter).length > 0 ? this.renderCountr() : <h2>click on countr+ to add new a counter.</h2>}
          </div>
        </div>
      </div>
    )
  }
}
