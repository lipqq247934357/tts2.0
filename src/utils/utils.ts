/**
 * 解析url参数 注意：只支持hash的参数
 * @example /#/?id=12345&a=b
 * @return Object {id:12345,a:b}
 *
 * 备注：vue-router中的this.$route.query可以获取到需要的内容
 *
 */

export const urlParse4Search = function (): any {
    let url = window.location.search;
    let obj: any = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    // ['?id=12345', '&a=b']
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
};

export const urlParse = function () {
    let url = window.location.hash;
    let obj: any = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    // ['?id=12345', '&a=b']
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
};

/**
 * 将data转化成树结构
 * 支持子节点排序
 *
 * 注：当某个节点的父节点不存在并且不是一级菜单的时候就会进入死循环，待优化
 *
 * @param data
 * @returns {Array}
 */

export const treeUtil = function (data: any) {

    let i = 0;
    let tree = [];
    let pos = [];
    while (data.length !== 0) {
        let item = data[i];
        item.children = [];
        if (item.menuLevel === '1') { //一级菜单
            tree.push(item);// 树的一级菜单
            pos[item['menuId']] = tree[tree.length - 1];
            data.splice(i, 1);
        } else { // 子节点
            let parentId = item['parentMenuId'].trim();
            let obj: any = pos[parentId]; // 获取父节点
            if (obj !== undefined) {
                obj.children.push(item); // 给父亲增加自己
                pos[item['menuId']] = obj.children[obj.children.length - 1]; // 将自己的引用放到对应一维数组中
                sort(obj.children);
                data.splice(i, 1);
            } else { // 父节点没有设置，下一轮就可以找到父节点
                i++;
            }
        }
        if (i > data.length - 1) { // 一轮遍历完成
            i = 0;
        }
    }

    function sort(obj: any) { // 根据menuOrder进行排序
        obj.sort(function (a: any, b: any) {
            return a.menuOrder - b.menuOrder
        })
    }

    return tree;
}


export const formatNumber = (s: string, n: number) => {
    if (s === undefined) return
    n = n > 0 && n <= 20 ? n : 2
    // eslint-disable-next-line no-useless-escape
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    var l = s.split('.')[0].split('').reverse(), r = s.split('.')[1]
    var t = ''
    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
    }
    return t.split('').reverse().join('') + '.' + r
}
export const formatDate = (date: Date) => {
    date = new Date(date);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    if (month.length == 1) {
        month = "0" + month;
    }
    if (day.length == 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;

}


