#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const files = fs.readdirSync(process.cwd());

const grabMD = (file) =>{
    const docBlock = 'doc'
    const blockRegString = `(?<=<${docBlock}>)(\\D*?)(?=<\/${docBlock}>)`
    const regex = new RegExp(blockRegString, 'g')
    const fileContent  = fs.readFileSync(file, 'utf-8')
    const res = fileContent.match(regex)
    return {
        name: path.basename(file),
        content: res
    }
}

const mdMap = files.map(file=>{
    if (path.extname(file) === '.vue'){
        return grabMD(file)
    }
}).filter(e=>e)

mdMap.forEach(file=>{
    const ext = path.extname(file.name);
    const mdFileName = path.basename(file.name).split(ext)[0]
    fs.writeFileSync(mdFileName+'.md', file.content?.join('') || '')
})