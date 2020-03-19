import Mock from 'mockjs'

// const data = Mock.mock({
//   'items|30': [{
//     id: '@id',
//     title: '@sentence(10, 20)',
//     'status|1': ['published', 'draft', 'deleted'],
//     author: 'name',
//     display_time: '@datetime',
//     pageviews: '@integer(300, 5000)'
//   }]
// })

export default [
  {
    url: '/prod-api/system/dict/type/list?pageNum=1&pageSize=10&beginTime=&endTime=',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        total: 10,
        rows: [
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            },
            {
                searchValue: null,
                createBy: "admin",
                createTime: "2018-03-16 11:33:00",
                updateBy: null,
                updateTime: null,
                remark: "用户性别列表",
                dataScope: null,
                params: {},
                dictId:1,
                dictName:"用户性别",
                dictType:"sys_user_sex",
                status:"0"
            }
        ],
        code: 200,
        msg: 0
      }
    }
  }
]
