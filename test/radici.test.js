const Radici = artifacts.require('./Radici.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Radici', ([deployer, seller, buyer]) => {
    let radici

    before(async () => {
        radici = await Radici.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await radici.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })

    describe('products', async () => {
        let result1, result2, productCount

        before(async () => {
            result1 = await radici.createEntry('{"key":"value"}', "ipfs://yomama", { from: seller })
            productCount = await radici.getEntryCount()
            result2 = await  radici.getEntry(1);
        })

        it('creates products', async () => {
            // SUCCESS
            assert.equal(productCount, 1)
            console.log(result1)
            console.log(result2)
            // assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
            // assert.equal(event.name, 'iPhone X', 'name is correct')
            // assert.equal(event.price, '1000000000000000000', 'price is correct')
            // assert.equal(event.owner, seller, 'owner is correct')
            // assert.equal(event.purchased, false, 'purchased is correct')

            // FAILURE: Product must have a name
            // await await marketplace.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
            // FAILURE: Product must have a price
            // await await marketplace.createProduct('iPhone X', 0, { from: seller }).should.be.rejected;
        })
    })
})