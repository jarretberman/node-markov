/** Command-line tool to generate Markov text. */

const {MarkovMachine} = require('./markov')
const process = require("process")
const axios = require('axios')
const fs = require('fs')
// const { execPath } = require('process')

// let text
// if(process.argv[2] === 'file'){
//     fs.readFile(process.argv[3], 'utf8', (err,data =>{
//         if(err) {
//             console.error(err)
//             process.exit(1)
//         }
//         text = data
//     }))
// } else if (process.argv[2] === 'url'){
//     text = await axios.get(process.argv[3])
//                     .catch( (err) => {
//                         console.error(err)
//                         process.exit(1)
//                     })
// } else {

//     text = "cat in the hat"
// }

const genText = (text, num)=> {
    let markov = new MarkovMachine(text)
    return markov.makeText(num)

}

const fileText = (path)=>{
    fs.readFile(path, 'utf8', (err,data) =>{
        if(err) {
            console.error(err)
            process.exit(1)
        }
        return genText(data)
    })
    
}

async function urlText(url){
    let resp

    resp = await axios.get(url)
                    .catch( (err) => {
                        console.error(err)
                        process.exit(1)
                    })
    return genText(resp.data)                
}

const handleGenerate = () =>{

    let method = process.argv[2]
    let path = process.argv[3]

    if (method === "file") {
        console.log(fileText(path))
    }
      
    else if (method === "url") {
       console.log(urlText(path))
    }
}

handleGenerate()

module.exports = {fileText,urlText,genText,handleGenerate} 