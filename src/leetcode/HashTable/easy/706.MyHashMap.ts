class MyHashMap {
  constructor(public hashMap: Record<string, number> = {}) {}

  put(key: number, value: number): void {
    this.hashMap[key] = value
  }

  get(key: number): number {
    const temp = this.hashMap[key]
    return temp === undefined ? -1 : temp
  }

  remove(key: number): void {
    delete this.hashMap[key]
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
