const {MarkovMachine} = require('./markov')
const {fileText,urlText,genText,handleGenerate} = require('./makeText')

test('genText() should return a string with given text',()=>{
    
    expect (genText('cat in the hat')).toEqual(expect.any(String))
})

test('fileText() should return a string with given text',()=>{
    
    expect (fileText('eggs.txt')).toEqual(expect.any(String))
})

test('urlText() should return a string with given text',()=>{
    
    expect (urlText('http://shakespeare.mit.edu/Poetry/sonnet.IV.html')).toEqual(expect.any(String))
})