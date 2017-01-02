import React from 'react'
import CountrItem from '../components/countr-item'
import Header from '../components/header'
import styles from '../components/style'
import uuid from 'uuid/v4'
import Modal from 'react-modal'
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
    if(input.length > 25) {
      alert(`${input} is a bit too long. Max 25 Chars`)
    }
    if(input && input.length <= 25) {
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
        hash: new Buffer(JSON.stringify(newCountr)).toString('base64')
      })
    }
  }
  handleDel(key) {
    const deleted = this.state.counter
    const res = confirm(`Delete ${deleted[key].name}?`)
    if(res) {
      delete deleted[key]
      this.setState({
        counter: deleted,
        hash: new Buffer(JSON.stringify(deleted)).toString('base64')
      })
    }
  }
  handleCountrAct(id, type) {
    const countr = this.state.counter
    countr[id].n = type === 'DECR' ? countr[id].n - 1 : countr[id].n + 1
    const newCountr = Object.assign({}, this.state.counter, countr[id].n)
    this.setState({
      counter: newCountr,
      hash: new Buffer(JSON.stringify(newCountr)).toString('base64')
    })
  }
  componentDidMount() {
    if (document.location.hash.length > 0) {
      const countr = JSON.parse(atob(document.location.hash.split('#')[1]))
      if (Object.keys(countr).length > 0) {
        this.setState({
          counter: countr,
          hash: document.location.hash.split('#')[1]
        })
      }
    } else if(Object.keys(JSON.parse(localStorage.counter)).length > 0) {
      const countr = JSON.parse(localStorage.counter)
      this.setState({
        counter: countr,
        hash: new Buffer(JSON.stringify(countr)).toString('base64')
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.counter = JSON.stringify(this.state.counter);
    console.log('did update',this.state.hash)
    location.hash = this.state.hash
  }
  renderCountr() {
    const render = []
    for(const key in this.state.counter) {
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
    return <div>{render}<p><a className='countr-share_link' href={`#${this.state.hash}`}>share your countr</a></p></div>
  }
  render() {
    return (
      <div>
        <Header />
        <div className="app">
        <style>{styles}</style>
          <h1 onClick={() => this.openModal()}>countr+</h1>
          <div className="countr-items">
            <Modal closeTimeoutMS={200} isOpen={this.state.modal} onRequestClose={() => this.closeModal()} contentLabel='Add Countr'>
              <div className='countr-modal_close' onClick={() => this.closeModal()}>close</div>
              <div>
                <input type='text' placeholder='Description' ref='addInput' className='countr-input_add'/>
                <div className='countr-modal_add' onClick={() => this.addCountr()}>add</div>
              </div>
            </Modal>
            {Object.keys(this.state.counter).length > 0 ? this.renderCountr() : <h2>click on countr+ to add new a counter.</h2>}

          </div>
        </div>
      </div>
    )
  }
}
