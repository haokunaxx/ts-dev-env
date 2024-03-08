import 'reflect-metadata'

function ClassDecorator(target: any) {
  console.log(target, target.prototype)
  for (let key in target.prototype) {
    const originHandler = target.prototype[key]
    const needToReport = Reflect.getMetadata(
      'needToReport',
      target.prototype,
      key
    )
    const reportType = Reflect.getMetadata('reportType', target.prototype, key)
    target.prototype[key] = function () {
      if (needToReport) {
        console.log('根据上报类型执行相应埋点策略: --', reportType)
      }
      originHandler.call(this)
    }
  }
}

function NeedToReport(type: 'lifeCycle' | 'userAction') {
  return function (
    target: any,
    propertyKey: any,
    descriptor: PropertyDescriptor
  ) {
    console.log(target)
    target.needToReportCache = target.needToReportCache || {}
    target.needToReportCache[propertyKey] = type
    //标记这个方法调用时需要提交埋点信息
    Reflect.defineMetadata('needToReport', true, target, propertyKey)
    //标记上报类型
    Reflect.defineMetadata('reportType', type, target, propertyKey)
  }
}

@ClassDecorator
class MockClass {
  name: string
  constructor() {
    this.name = 'xx'
  }

  created() {
    console.log('created')
    console.log('---', this.name)
  }

  @NeedToReport('lifeCycle')
  mounted() {
    console.log('mounted')
  }

  @NeedToReport('lifeCycle')
  destroyed() {
    console.log('destroyed')
  }

  @NeedToReport('userAction')
  onSomeBtnClicked() {
    console.log('onSomeBtnClicked')
  }
}

const mock = new MockClass()
mock.created()
mock.mounted()
mock.onSomeBtnClicked()
