import React from 'react'
import CountrItem from '../components/countr-item'
import Header from '../components/header'
import uuid from 'uuid/v4'
import Modal from 'react-modal'
import CountrAdd from '../components/countr-add'
import Footer from '../components/footer'
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
      this.addInput.focus()
    })
  }
  closeModal() {
    this.setState({modal: false})
  }
  addCountr() {
    const input = this.addInput.value
    console.log(input)
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
        <Footer hash={this.state.hash}/>
      </div>
    )
  }
  render() {
    return (
      <div>
        <Header />
        <div className="app">
          <h1 onClick={() => this.openModal()}>countr+</h1>
          <div className="countr-items">
            <style jsx>{`
              .countr-items {
                width: 100%;
                display: flex;
                flex-direction: column;
              }
            `}</style>
            {Object.keys(this.state.counter).length > 0 ? this.renderCountr() : <h2>click on countr+ to add new a counter.</h2>}
          </div>
          <style jsx>{`
          .ReactModalPortal > div {
            opacity: 0;
          }
          .ReactModalPortal .ReactModal__Overlay {
            transition: opacity 200ms ease-in-out;
            background: rgba(0, 0, 0, 0.15);
          }
          .ReactModal__Overlay--after-open {
            opacity: 1;
          }
          .ReactModal__Overlay--before-close {
            opacity: 0;
          }
          `}</style>
          <Modal closeTimeoutMS={200} isOpen={this.state.modal} onRequestClose={() => this.closeModal()} contentLabel="Add Countr">
          <CountrAdd close={() => this.closeModal()} add={() => this.addCountr()} inputRef={(input) => { this.addInput = input }} />
          </Modal>
        </div>
      </div>
    )
  }
}
