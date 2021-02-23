/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c.toLowerCase() !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {}
    let words = this.words

    // loop through words to make chains
    for( let i = 0; i < words.length; i++){
      let currentChain = this.chains[ words[i] ]
      //if word doesnt have a chain yet make a chain with next word in the chain
      if (!currentChain ){
        
         this.chains[words[i]]= [ words[i+1] ]
        
      // if next word is not in chain, add to chain
      }else if (currentChain.indexOf(words[ i+1 ]) === -1 ){
        
        
        currentChain.push(words[i+1])
          
      }

    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let markovChain = ''

    //pick a random word to start and add to chain
    let current = this.words [ Math.floor(Math.random() * this.words.length) ]
    let i = 0
    markovChain += current

    while (i < numWords) {

      
      //find chain of current word
      let currentChain = this.chains[current]
      if (!currentChain[0]){
        current = this.words [ Math.floor(Math.random() * this.words.length) ]

      } else {
      //find next word and set to current
        current = currentChain[ Math.floor(Math.random() * currentChain.length)]  
      }
      i++
      markovChain = markovChain + " " + current  
    }

    return markovChain
    // let current = this.words [ Math.floor(Math.random() * this.words.length) ]
    // markovChain = markovChain + " " + current
    // //find chain of current word
    // let currentChain = this.chains[current]

    // //find next word and set to current
    // let next = currentChain[ Math.floor(Math.random() * currentChain.length)]

  }
}

let mm = new MarkovMachine (`O, that you were yourself! but, love, you are
No longer yours than you yourself here live:
Against this coming end you should prepare,
And your sweet semblance to some other give.
So should that beauty which you hold in lease
Find no determination: then you were
Yourself again after yourself's decease,
When your sweet issue your sweet form should bear.
Who lets so fair a house fall to decay,
Which husbandry in honour might uphold
Against the stormy gusts of winter's day
And barren rage of death's eternal cold?
O, none but unthrifts! Dear my love, you know
You had a father: let your son say so.
FROM fairest creatures we desire increase,
That thereby beauty's rose might never die,
But as the riper should by time decease,
His tender heir might bear his memory:
But thou, contracted to thine own bright eyes,
Feed'st thy light'st flame with self-substantial fuel,
Making a famine where abundance lies,
Thyself thy foe, to thy sweet self too cruel.
Thou that art now the world's fresh ornament
And only herald to the gaudy spring,
Within thine own bud buriest thy content
And, tender churl, makest waste in niggarding.
Pity the world, or else this glutton be,
To eat the world's due, by the grave and thee.
When forty winters shall beseige thy brow,
And dig deep trenches in thy beauty's field,
Thy youth's proud livery, so gazed on now,
Will be a tatter'd weed, of small worth held:
Then being ask'd where all thy beauty lies,
Where all the treasure of thy lusty days,
To say, within thine own deep-sunken eyes,
Were an all-eating shame and thriftless praise.
How much more praise deserved thy beauty's use,
If thou couldst answer 'This fair child of mine
Shall sum my count and make my old excuse,'
Proving his beauty by succession thine!
This were to be new made when thou art old,
And see thy blood warm when thou feel'st it cold.
Look in thy glass, and tell the face thou viewest
Now is the time that face should form another;
Whose fresh repair if now thou not renewest,
Thou dost beguile the world, unbless some mother.
For where is she so fair whose unear'd womb
Disdains the tillage of thy husbandry?
Or who is he so fond will be the tomb
Of his self-love, to stop posterity?
Thou art thy mother's glass, and she in thee
Calls back the lovely April of her prime:
So thou through windows of thine age shall see
Despite of wrinkles this thy golden time.
But if thou live, remember'd not to be,
Die single, and thine image dies with thee.
Unthrifty loveliness, why dost thou spend
Upon thyself thy beauty's legacy?
Nature's bequest gives nothing but doth lend,
And being frank she lends to those are free.
Then, beauteous niggard, why dost thou abuse
The bounteous largess given thee to give?
Profitless usurer, why dost thou use
So great a sum of sums, yet canst not live?
For having traffic with thyself alone,
Thou of thyself thy sweet self dost deceive.
Then how, when nature calls thee to be gone,
What acceptable audit canst thou leave?
Thy unused beauty must be tomb'd with thee,
Which, used, lives th' executor to be.`)
//console.log(mm.makeText())

module.exports = { MarkovMachine }