const DateTime = require("luxon").DateTime

const millenium = DateTime.fromObject({ year: 2000 })

it('all looks fine to start with', () => {
    const localMillenium = DateTime.fromObject({ year: 2000 })

    expect(localMillenium).toEqual(millenium)
})

it('but any failure involving a date time...', async () => {
    expect(millenium).toEqual(DateTime.fromObject({ year: 1234 }))
})

it('...seems to somehow "taint" that specific datetime', () => {
    const localMillenium = DateTime.fromObject({ year: 2000 })

    expect(localMillenium).toEqual(millenium) // Fails (serializes to same string)
})

it('...including any derived date times', () => {
    const nextDay1 = millenium.plus({ days: 1 })
    const nextDay2 = DateTime.fromObject({ year: 2000 }).plus({ days: 1 })

    expect(nextDay1).toEqual(nextDay2) // Fails (serializes to same string)
})

it('..but dates derived from "tainted" date time can still be compared with each other', () => {
    const nextDay1 = millenium.plus({ days: 1 })
    const nextDay2 = millenium.plus({ days: 1 })

    expect(nextDay1).toEqual(nextDay2) // OK
})