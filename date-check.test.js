const DateTime = require("luxon").DateTime

const millenium = DateTime.fromObject({ year: 2000 })

it('all looks fine to start with', () => {
    const localMillenium = DateTime.fromObject({ year: 2000 })

    expect(localMillenium).toEqual(millenium)
})

it('but any failure involving a date time...', async () => {
    // Bug can be resolved by removing this expectation, or comparing to something other than an object (e.g. a string)
    expect(millenium).toEqual({})
})

it('...seems to somehow "taint" that specific datetime', () => {
    const localMillenium = DateTime.fromObject({ year: 2000 })

    expect(localMillenium).toEqual(millenium) // Fails (serializes to same string)
})