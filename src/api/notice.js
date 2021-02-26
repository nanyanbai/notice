import request from '@/utils/request'


// 查询所有
export const queryAll = data =>　{
    return request({
        method: 'POST',
        url: '/ds/bulletin/queryAll',
        data
    })
}

// 详细
export const queryDetail = data => {
    return request({
        method: 'POST',
        url: '/ds/bulletin/queryDetail',
        data
    })
}
