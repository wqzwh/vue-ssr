import Mock from 'mockjs';

export default Mock.mock('http://test.123.com/demo', {
    errno: 0,
    msg: "成功",
    data: [{
        'name': '@name',
        'age|1-100': 100,
        'color': '@color'
    }]
});
