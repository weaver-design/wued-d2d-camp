var express = require('express')
var request = require('request');
var app = express()

var port = process.env.PORT || 8080;

// 四个人的 WUED
var WUED = [
  { name: '👽 jack-g-chen', avatar: 'https://avatars0.githubusercontent.com/u/50906620?s=300&v=4', role: 'Team Leader' },
  { name: '👩‍🎨 blankyl', avatar: 'https://avatars0.githubusercontent.com/u/50934382?s=300&v=4', role: 'UE Designer' },
  { name: '👩 kangshuang', avatar: 'https://avatars0.githubusercontent.com/u/50934637?s=300&v=4', role: 'UI Designer' },
  { name: '👼 GitHuboooSHY', avatar: 'https://avatars0.githubusercontent.com/u/50934332?s=300&v=4', role: 'FullStack Designer' },
]

// 一个来自产品方案部的家伙
var guy = { 
  name: '👨‍🚀Turkyden', 
  avatar: 'https://avatars2.githubusercontent.com/u/24560160?s=300&v=4', 
  role: 'JavaScript Developer' 
}

// 加入邓登举
WUED.push(guy);

// 从 https://picsum.photos/ 网站的开放接口获取数据源
var URL = 'https://picsum.photos/v2/list?page=2&limit=10';

// 启动一个服务器
app.get('/api/wued', function (req, res) {
  request(URL, function (error, response, body) {
    res.send(WUED.concat(JSON.parse(body).map(function(item) {
      return {
        name: item.author,
        avatar: item.download_url,
        role: 'member'
      }
    })));
  });
})

app.listen(port);