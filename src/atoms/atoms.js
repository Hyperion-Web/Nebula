const atoms = import.meta.globEager('./*.vue')

const atomsExport = {}

for (const path in atoms) {
    atomsExport[path.match(/(?<=.\/)\w*(?=.vue)/)] = atoms[path].default
}

export default atomsExport