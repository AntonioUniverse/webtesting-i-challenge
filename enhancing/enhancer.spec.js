const enhancer = require('./enhancer.js');
// test away!

describe('repair() method', () => {


// repair function to repair durability to 100
it('Repairs durability to 100', () =>{
    const item = {
        name: "Diamond Sword",
        durability: 10,

    }
    const fixed = enhancer.repair(item)
    const repaired = {
        name: "Diamond Sword",
        durability:100
    }


    
    expect(fixed).toStrictEqual(repaired)

})
})

describe('succeed() method', () => {


    // repair function to repair durability to 100
    it('add enhancement + 1 ', () =>{
        const item = {

            enhancement:  Math.floor(Math.random() *20),
    
        }
        const enhanced = enhancer.succeed(item)
        const enhancementsuccess = enhanced
    
    
        
        expect(enhanced).toEqual(enhancementsuccess)
    
    })
    })

    describe('fail() method', () => {


        // repair function to repair durability to 100
        it(' item less than 15 lose 5 durability, item 15 or more lose 10 durability, item is 16 or more lose 10 durability and 1 enhancement ', () =>{
            const item = {
                name: "Diamond Sword",
                enhancement:17,
                durability: 100,
        
            }
            const enhancedfail = enhancer.fail(item)
            const enhancementfail = {
                name: "Diamond Sword",
                enhancement:16,
                durability: 90,

            }
        
        
            
            expect(enhancedfail).toStrictEqual(enhancementfail)
        
        })
        })

