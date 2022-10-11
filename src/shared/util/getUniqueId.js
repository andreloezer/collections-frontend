export const getUniqueId = ids => {
    let id = 1;
    while (ids.includes(id)) {
        id++;
    }
    return id;
};