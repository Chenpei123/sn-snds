
Mock.mock(/authStatus/, {
  "hasLogin": true
});

Mock.mock(/\/getRemoteSelectList\.htm/, {
  result: true,
  message: '',
  'data|10': [{name: '@cname', no: '@integer(1,100)'}]
});

Mock.mock(/\getHttpDemo\.htm/, {
  result: true,
  'data': {
    'list|12': [{name: '@cname', value: '@integer(1,100)'}]
  }
});

Mock.mock(/\/usermsg\.do/,{
  "result": true,
  "data" : {
    "userName" : "臧琦凯",
    "userId" : "16071573"
  }
});
Mock.mock(/\/system\/stateNum\.do/,{
  "result": true,
  "data" : {
      "list":[
      {'state':'已停止','num':'500'},
      {'state':'运行中','num':'1000'}
    ]
  } 
});
Mock.mock(/\/system\/record\.do/,{
  "result": true,
  "data" : {
        "list|10":[
          {
            'systemName':'易购主站',
            'exName|+1': 201607090001,
            'exEnvirment':'PRD',
            "exMySqlVersion":'Mysql5.5',
            "exOperation":'MySQL5.5升级到MySQL5.6',
            "exOperationResult":'成功',
            "exOperationTime":'2015-03-26 16:20:35',
            'exDataDoc':'/help.docx'
          }
        ]
  }    
});
Mock.mock(/\/system\/exDatas\.do/,{
  "result": true,
  "data" : {
        "list|17" : [
            {
                'exName|+1':201607090001,
                'exAnotherName':'大促',
                'exSystemName':'豆芽',
                "exEnvirment":'SIT',
                "exType":'主',
                "exState":'运行中',
                "exMainIP":'192.168.1.11',
                "exSecondIPs":['192.168.1.12','192.168.1.10','192.168.1.13'],
                "exReadVIP":'xxx.xxx.xxx.xxx',
                "exWriteVIP":'xxx.xxx.xxx.xxx',
                "exMySqlVersion":'Mysql5.6',
                "modify":true
              },  
          ]
  }    
});
Mock.mock(/\/system\/exDatasUp\.do/,{
  "result": true,
  "data" : {
        "list|33": [
          {
            'exOddNumber|+1':201607090001,
            'exNumber|1-3':1,
            'exPerson':'陈庆通',
            'exSystem':'豆芽',
            "exEnvirment":'SIT',
            "exMainIP":'192.168.1.11:8080',
            "exSecondIPs":['192.168.1.12','192.168.1.10','192.168.1.13'],
            "exReadVIP":'xxx.xxx.xxx.xxx',
            "exWriteVIP":'xxx.xxx.xxx.xxx',
          },
      
      ]
  }
});
Mock.mock(/\/system\/exDatasUped\.do/,{
  "result": true,
  "data" : {
        "list|11": [
              {
                'exOddNumber|+1':201607090001,
                'exNumber|1-3':1,
                'exPerson':'陈庆通',
                'exSystem':'豆芽',
                "exEnvirment":'SIT',
                "exMainIP":'192.168.1.11:8080',
                "exSecondIPs":['192.168.1.12','192.168.1.10','192.168.1.13'],
                "exReadVIP":'xxx.xxx.xxx.xxx',
                "exWriteVIP":'xxx.xxx.xxx.xxx',
                'upResult':"成功"
              },
        ]
  }
});
Mock.mock(/\/system\/exLog\.do/,{
  "result": true,
  "data" : {
      "result|2-8": true,
      "logs|3-5": [
          [
          '2016-07-08日志:',
          '实例100013-201505210939开始升级:',
          '2016-07-08 21:09:56 xxxxxxxxxxxxxxxxxxxx',
          '2016-07-08 21:19:56 xxxxxxxxxxxxxxxxxxxx',
          '2016-07-08 21:29:56 xxxxxxxxxxxxxxxxxxxx',
          '2016-07-08 21:39:56 xxxxxxxxxxxxxxxxxxxx',
          '2016-07-08 21:49:56 xxxxxxxxxxxxxxxxxxxx',
          '2016-07-08 21:59:56 xxxxxxxxxxxxxxxxxxxx',
          '2016-07-08 22:09:56 xxxxxxxxxxxxxxxxxxxx',
          '实例100013-201505210939升级成功！',
          '实例100013-201505210939升级失败，请查看xxxx文件或者联系运维人员。']
          
      ]
  }
});
Mock.mock(/\/system\/update\.do/,{
  "result": true,
  "data" : {
    "result|8-2":false
  }
});
Mock.mock(/\/system\/toggle\.do/,{
  "result": true,
  "data" : {
    "result": true
  }
});
