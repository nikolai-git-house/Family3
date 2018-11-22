class FetchMoreQueue {
  queue = []

  lock = false

  item = null

  add = (fetchMore, offset, key) => {
console.log('before add to queue', offset, key, this)
    if(this.lock) {
      setTimeout(() => this.add(fetchMore, offset, key), 1)
    }


    if(this.item !== null) {
      return
    }

    this.lock = true
    const similarItems = this.queue.filter((item) => item.offset === offset && item.key === key)

console.log('similarItems', similarItems, this.queue)

    if(similarItems.length > 0) {
      this.lock = false
      return
    }

    const addToQueue = { fetchMore, offset, key, id: Date.now() }
console.log('added to queue', addToQueue)
    this.queue = [...this.queue, addToQueue]
    this.lock = false

console.log('after add to queue', this.queue)
    this.dispatch()
  }

  removeFirst = () => {
console.log('before removeFirst', this)
    if(this.lock) {
      setTimeout(() => this.removeFirst(), 1)
    }

    console.log('removeFirst', this)
    this.lock = true
    this.queue = this.queue.slice(1)
    this.item = null
    this.lock = false

    console.log('after removeFirst - dispatch')
    setTimeout(() => this.dispatch(), 1)
  }

  dispatch = () => {
console.log('before dispatche queue', this.queue)
    if(this.queue.length === 0) {
      return
    }

    if(this.item !== null) {
      if(Date.now() - this.item.id > 2000) {
        this.item = null
      } else {
        return
      }
    }

    this.item = this.queue[0]

    console.log('dispatche queue', this.item)
    this.item.fetchMore({
      variables: {
        offset: this.item.offset
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        console.log('updateQuery prevResult:', prevResult, 'fetchMoreResult:', fetchMoreResult)
        const result = !fetchMoreResult ? prevResult : ({...prevResult, products: [...prevResult[this.item.key], ...fetchMoreResult[this.item.key]]})

        setTimeout(() => this.removeFirst(), 1)

        return result
      }
    })

  }

}

export default FetchMoreQueue
