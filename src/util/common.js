export function compreObj(obj1, obj2) {
    var flag = true;
    function compre(obj1, obj2) {
        if (Object.keys(obj1).length != Object.keys(obj2).length) {
            flag = false;
        } else {
            for (let x in obj1) {
                if (obj2.hasOwnProperty(x)) {
                    if (obj1[x] !== obj2[x]) {
                        compre(obj1[x], obj2[x]);
                    }
                } else {
                    flag = false;
                }
            }
        }
        if (flag === false) {
            return false;
        } else {
            return true;
        }

    }
    return compre(obj1, obj2)
}