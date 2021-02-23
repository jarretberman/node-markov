const {MarkovMachine} = require('./markov')


test('maketext() should be a string', function(){
    const markov = new MarkovMachine('my name is bob')
    expect (markov.makeText()).toEqual(expect.any(String))
}) 
test('MarkovMachine should instantiate chains', function(){
    const markov = new MarkovMachine('my name is bob')
    expect (typeof markov.chains).toEqual("object")
    expect (markov.chains['my'].length).toEqual(1)
}) 