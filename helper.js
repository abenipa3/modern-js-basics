// const helper = (arr) => {
//     return arr.map(item => item.toUpperCase());
// }

// We don't need to export each attribute because
// only one is being exported.
// export default helper

// We could clean this up by exporting default only.
// It works just the exact same way!
export default (arr) => {
    return arr.map(item => item.toUpperCase());
}