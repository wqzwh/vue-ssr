import Mock from 'mockjs';

export default Mock.mock('http://123.jd.com/demo', {
    errno: 0,
    msg: "成功",
    data: [{
        'name': '@name',
        'age|1-100': 100,
        'color': '@color'
    }]
});
