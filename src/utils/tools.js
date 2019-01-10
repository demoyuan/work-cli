/**
 * @param {Object} obj URL参数对象
 * @returns URL参数字符串
 */
export const urlEncode = obj => {
    const params = []
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        if (typeof value === 'undefined') {
            value = ''
        }
        params.push([key, encodeURIComponent(value)].join('='))
    })
    return params.join('&')
}

/**
 * @param {Number} n 数字
 * @description 个位数补零
 */
export const supplement = n => {
    return (n = n < 10 ? '0' + n : n.toString())
}

/**
 * @param {Number} number
 * @description 创建从00开始字符串数组
 * @returns 字符串数组
 */
export const createTimeArr = number => {
    return [
        ...Array.from({ length: number }, (v, i) => {
            return supplement(i)
        }).values()
    ]
}

/**
 * @param {String} str
 * @description 判断字符长度
 */
export const fontLength = str => {
    let len = 0
    let formatStr = str.trim()
    for (let font of formatStr) {
        font.charCodeAt() > 255 ? (len += 2) : len++
    }
    return len
}

/**
 * @param {Array} arr
 * @description ['09:00', '14:00'] 转 [9, 0, 14, 0]
 */
export const timeNumberArr = arr => {
    let numArr = []
    arr.map(item => {
        let strArr = item.split(':')
        let num = strArr.map(str => parseInt(str))
        numArr = [...numArr, ...num]
    })
    return numArr
}

/**
 * @param {Array} arr
 * @param {Number} index 需要删除的keys
 * @description 根据数组key值移除元素
 * @returns 返回移除元素后的数组
 */
export const removeArrItem = (arr, index) => {
    // 数组深拷贝，防止修改原数组，会忽略掉值为undefined以及函数表达式
    let [...copyArr] = JSON.parse(JSON.stringify(arr))
    delete copyArr[index]
    let newArr = copyArr.filter(() => true)
    return [...newArr]
}

/**
 * @param {Number} start 开始时间戳
 * @param {Number} expired 过期时间戳
 * @description 返回过期状态
 * @returns 1: 使用时间未到, 2: 使用时间内, 3: 已过期
 */
export const expiredStatus = (start, expired) => {
    let nowTime = new Date().getTime(),
        status = 0
    if (start <= nowTime && nowTime <= expired) {
        status = 2
    } else if (nowTime < start) {
        status = 1
    } else {
        status = 3
    }
    return status
}

/**
 * @param {*} time 日期
 * @param {String} type 格式
 * @description 日期格式化
 */
export const timeFormat = (time, type = 'YY-MM-DD hh:mm:ss') => {
    if (time || time === 0) {
        let data = new Date(time)
        let obj = {
            y: data.getFullYear(),
            m: supplement(parseInt(data.getMonth() + 1)),
            d: supplement(data.getDate()),
            h: supplement(data.getHours()),
            mi: supplement(data.getMinutes()),
            s: supplement(data.getSeconds())
        }
        let dataStr = ''
        switch (type) {
            case 'YY-MM-DD hh:mm:ss':
                dataStr = `${obj.y}-${obj.m}-${obj.d} ${obj.h}:${obj.mi}:${obj.s}`
                break
            case 'YY-MM-DD hh:mm':
                dataStr = `${obj.y}-${obj.m}-${obj.d} ${obj.h}:${obj.mi}`
                break
            case 'YY-MM-DD':
                dataStr = `${obj.y}-${obj.m}-${obj.d}`
                break
            case 'hh:mm:ss':
                dataStr = `${obj.h}:${obj.mi}:${obj.s}`
                break
            case 'hh:mm':
                dataStr = `${obj.h}:${obj.mi}`
                break
        }
        return dataStr
    }
}

/**
 * @param {String} str 带区号手机号码
 * @returns [Number: 区号, String: 手机号]
 */
export const formatTel = str => {
    let areaCode = [852, 86]
    let arr = []
    for (let i = 0, j = areaCode.length; i < j; i++) {
        if (str.includes(areaCode[i])) {
            arr[0] = areaCode[i]
            arr[1] = str.split(areaCode[i])[1]
            break
        }
    }
    return arr
}

/**
 * @param {Number} time 延迟时间
 * @description 暂停延时
 */
export const delay = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}
