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
            name: "Diamond Sword",
            enhancement:  15,
            durability:100
    
        }
        const enhanced = enhancer.succeed(item)
        const enhancementsuccess = {

            name: "Diamond Sword",
            enhancement:  16,
            durability:100

        }
    
    
        
        expect(enhanced).toEqual(enhancementsuccess)
    
    })
    })

    describe('fail() method', () => {


        // repair function to repair durability to 100
        it(' item less than 15 lose 5 durability, item 15 or more lose 10 durability, item is 16 or more lose 10 durability and 1 enhancement ', () =>{
            
            const DiamondSword = {
            
                enhancement:14,
                durability:100

            }
            const failed1 = enhancer.fail(DiamondSword)
            const itemfailed1 ={
                
                enhancement:14,
                durability:95

            }


            expect(failed1).toEqual(itemfailed1)



            const DiamondSword2 = {
            
                enhancement:15,
                durability:100

            }
            const failed2 = enhancer.fail(DiamondSword2)
            const itemfailed2 ={
                
                enhancement:15,
                durability:90

            }


            expect(failed2).toEqual(itemfailed2)
        
        })


        const DiamondSword3 = {
            
            enhancement:17,
            durability:100

        }
        const failed3 = enhancer.fail(DiamondSword3)
        const itemfailed3 ={
            
            enhancement:16,
            durability:90

        }


        expect(failed3).toEqual(itemfailed3)
        })

