const layouts = import.meta.globEager('./*.vue')

const layoutsExport = {}

for (const path in layouts) {
    console.log(path.match(/(?<=.\/)\w*(?=.vue)/))
    layoutsExport[path.match(/(?<=.\/)\w*(?=.vue)/)] = layouts[path].default
}
console.log(layoutsExport)
export default layoutsExport