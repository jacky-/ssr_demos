class Publish {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }

  emmit(data) {
    const _this = this;
    _this.subscribers.forEach(function (ele) {
      if (ele.cb) {
        ele.cb(data, _this);
      }
    });
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  on(publish, callback) {
    const _this = this;
    const alreadExists = publish.subscribers.some(function (item) {
      return item.sub === _this;
    })
   if (!alreadExists) {
      publish.subscribers.push({
        sub: _this,
        cb: callback
      });
    }
    return _this;
  }
}


const p1 = new Publish('p1');
const s1 = new Subscriber('s1');

s1.on(p1, function (data, who) {
  console.log('_this', data, who === p1)
})

p1.emmit('p1xx');


class Event {
  constructor() {
    this.__message = {};
  }

  onEvent(type, fn) {
    //如果此消息不存在，创建一个该消息类型
    if (typeof __message[type] === 'undefined') {
      // 将执行方法推入该消息对应的执行队列中
      __message[type] = [fn];
    } else {
      //如果此消息存在，直接将执行方法推入该消息对应的执行队列中
      __message[type].push(fn);
    }
  }

  emmitEvent(type, args) {
    //如果该消息没有注册，直接返回
    if (!__message[type]) return;
    //定义消息信息
    let events = {
      type: type,           //消息类型
      args: args || {}       //参数
    },
      i = 0,                         // 循环变量
      len = __message[type].length;   // 执行队列长度
    //遍历执行函数
    for (; i < len; i++) {
      //依次执行注册消息对应的方法
      __message[type][i].call(this, events)
    }
  }
  off(type, fn) {
    //如果消息执行队列存在
    if (__message[type] instanceof Array) {
      // 从最后一条依次遍历
      let i = __message[type].length - 1;
      for (; i >= 0; i--) {
        //如果存在改执行函数则移除相应的动作
        __message[type][i] === fn && __message[type].splice(i, 1);
      }
    }
  }
}
