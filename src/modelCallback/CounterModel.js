export default class CounterModel {
  constructor(initialCount = 0, updateStateCallback) {
    console.log('CounterModel being constructed')
    this.state = {
      count: initialCount
    }
    this.updateStateCallback = updateStateCallback
  }

  _stateUpdated() {
    if (this.updateStateCallback) {
      console.log('Calling back: ', this.state)
      this.updateStateCallback(this.state)
    }
  }

  increment() {
    this.state.count++
    console.log('Incrementing')
    this._stateUpdated()
  }

  decrement() {
    this.state.count--
    console.log('Decrementing')
    this._stateUpdated()
  }
}
