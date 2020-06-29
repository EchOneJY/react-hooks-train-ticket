const Koa = require('koa')

const app = new Koa()

const dayjs = require('dayjs')

app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    ctx.body = 'index page'
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/rest/cities') {
    ctx.type = 'json'
    ctx.body = await require('./mocker/rest/cities.json')
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/rest/query') {
    ctx.type = 'json'
    const response = await require('./mocker/rest/query.json')
    response.dataMap.directTrainInfo.trains = response.dataMap.directTrainInfo.trains.reverse()
    ctx.body = response
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/rest/search') {
    const { key } = ctx.query
    ctx.type = 'json'
    ctx.body = {
      result: [
        {
          key: '芜湖',
          display: '芜湖'
        },
        {
          key: '井冈山',
          display: '井冈山'
        },
        {
          key: '铁岭',
          display: '铁岭'
        }
      ],
      searchKey: key
    }
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/rest/ticket') {
    const { date } = ctx.query
    ctx.type = 'json'
    ctx.body = {
      detail: {
        departTimeStr: '07:15',
        arriveTimeStr: '11:47',
        arriveDate: dayjs(date).valueOf(),
        durationStr: '4小时32分'
      },
      candidates: [
        {
          type: '二等座',
          priceMsg: '443.5',
          ticketsLeft: '有票',
          channels: [
            {
              name: '快速预订',
              desc: '含40元出行保障 快速出票 迅捷无忧'
            },
            {
              name: '普通预订',
              desc: '出票较慢，高峰期需要排队'
            }
          ]
        },
        {
          type: '一等座',
          priceMsg: '748.5',
          ticketsLeft: '有票',
          channels: [
            {
              name: '快速预订',
              desc: '含40元出行保障 快速出票 迅捷无忧'
            },
            {
              name: '普通预订',
              desc: '出票较慢，高峰期需要排队'
            }
          ]
        },
        {
          type: '商务座',
          priceMsg: '1403.5',
          ticketsLeft: '5张',
          channels: [
            {
              name: '快速预订',
              desc: '含40元出行保障 快速出票 迅捷无忧'
            },
            {
              name: '普通预订',
              desc: '出票较慢，高峰期需要排队'
            }
          ]
        }
      ]
    }
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/rest/schedule') {
    ctx.type = 'json'
    ctx.body = [
      {
        station: '北京南',
        arriveTime: null,
        departTime: '07:20',
        stay: null
      },
      {
        station: '天津南',
        arriveTime: '07:54',
        departTime: '07:56',
        stay: 2
      },
      {
        station: '南京南',
        arriveTime: '11:51',
        departTime: '11:53',
        stay: 2
      },
      {
        station: '上海虹桥',
        arriveTime: '13:08',
        departTime: null,
        stay: null
      }
    ]
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  ctx.method = 'POST'
  ctx.type = 'image/png'
  if (ctx.path === '/rest/order') {
    const { date } = ctx.query

    ctx.body = {
      departTimeStr: '07:15',
      arriveTimeStr: '11:47',
      arriveDate: dayjs(date).valueOf(),
      durationStr: '4小时32分',
      price: 483.5
    }
  } else {
    await next()
  }
})

app.listen(5000)
