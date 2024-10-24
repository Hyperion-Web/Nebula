const compositions = import.meta.globEager('./*.vue')

const compositionsExport = {}

for (const path in compositions) {
    compositionsExport[path.match(/(?<=.\/)\w*(?=.vue)/)] = compositions[path].default
}

export default compositionsExport