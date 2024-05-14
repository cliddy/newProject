// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) =>{
  return{ 
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      const base = returnRandBase();
      const newBase = base =>{
        if (base === 'A'){
          const noA = dnaBases.filter(letter =>{
            return letter !== 'A';
          });
        } else if (base === 'T'){
          const noT = dnaBases.filter(letter =>{
            return letter !== 'T';
          });
        } else if (base === 'C'){
          const noC = dnaBases.filter(letter =>{
            return letter !== 'C';
          });
      } else {
        const noG = dnaBases.filter(letter =>{
          return letter !== 'G';
        });
      }

      }
    }
}
}

console.log(pAequorFactory(1, mockUpStrand()));


