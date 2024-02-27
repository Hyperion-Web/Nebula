const molecules = import.meta.globEager('./*.vue')

const moleculesExport = {}

for (const path in molecules) {
    moleculesExport[path.match(/(?<=.\/)\w*(?=.vue)/)] = molecules[path].default
}

export default moleculesExport