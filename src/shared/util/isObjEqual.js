export const isObjEqual = (obj_1, obj_2) => {
    if (Object.keys(obj_1).length !== Object.keys(obj_2).length) {
        return false;
    }
    for (const [key_1, value_1] of Object.entries(obj_1)) {
        if (obj_2[key_1] !== value_1) {
            return false;
        }
    }
    return true;
};