/*
  策略模式封装
*/

interface ConstructorParams {
  defaultCbs?: Function[]
  errorCbs?: Function[]
}

const DEFAULT_STRATEGY_MAP_KEY = '--strategy-default',
  ERROR_STRATEGY_MAP_KEY = '--strategy-error'

export class Strategy {
  map = new Map<string, Function[]>()

  constructor({ defaultCbs = [], errorCbs = [] }: ConstructorParams = {}) {
    this.map.set(DEFAULT_STRATEGY_MAP_KEY, defaultCbs)
    this.map.set(ERROR_STRATEGY_MAP_KEY, errorCbs)
  }

  getMapKeyFromCondition(condition: string | Record<string, any>): string {
    if (typeof condition === 'string') {
      return condition
    }
    const tempMap = new Map()
    Object.keys(condition)
      .sort()
      .forEach((key) => tempMap.set(key, condition[key]))
    return JSON.stringify(Object.fromEntries(tempMap))
  }

  add(condition: string | Object, conditionCbs: Function[]) {
    const mapKey = this.getMapKeyFromCondition(condition)
    const existingCondCbs = this.map.get(mapKey) || []
    this.map.set(mapKey, [...existingCondCbs, ...conditionCbs])
  }

  customAdd(ValueKeyGetter: (value: string | Object) => string | Object) {
    return (valueKey: string | Object, valueGetter: Function[]) => {
      const customKey = ValueKeyGetter(valueKey)
      this.add(customKey, valueGetter)
    }
  }

  do(key: string | Object) {
    const realKey = this.getMapKeyFromCondition(key)
    return (
      this.map.get(realKey) ||
      this.map.get(DEFAULT_STRATEGY_MAP_KEY) ||
      []
    ).reduce((prev, next) => {
      try {
        const res = next()
        prev.push(res)
      } catch (err) {
        ;(this.map.get(ERROR_STRATEGY_MAP_KEY) || []).forEach((cb) => cb(err))
        prev.push(undefined)
      }
      return prev
    }, [] as any[])
  }
}

/*
  const strategy1 = new Strategy({
    defaultCbs: [() => 'default']
    // errorCbs: [
    //   (err: any) => console.log(err),
    //   (err: any) => console.log('err2:', err)
    // ]
  })
  strategy1.add('ys', [() => '24'])
  strategy1.add({ name: 'xx', age: 25 }, [() => '24'])
  strategy1.add({ name: 'xx', age: 25 }, [() => '25'])
  strategy1.add({ age: 25, name: 'xx' }, [() => '26'])
  strategy1.add('xx', [() => '25'])

  const strategyCustomAdd = strategy1.customAdd((key) => {
    return typeof key === 'string' ? `custom${key}` : key
  })

  strategyCustomAdd('xx1', [() => 'custom 25'])
  strategyCustomAdd('ys1', [() => 'custom 24'])
  strategyCustomAdd({ name: 'xx', age: 25 }, [
    () => Promise.resolve('custom 25'),
    () => {
      throw Error('123')
    }
  ])
  strategyCustomAdd({ age: 25, name: 'xx' }, [() => 'custom 26'])

  console.log(strategy1)

  const res = strategy1.do({ name: 'xx', age: 25 })
  console.log(res)

  ;(res[3] as Promise<string>).then((res) => console.log('promise ' + res))

  console.log(strategy1.do('getDefaultStrategy'))

*/
