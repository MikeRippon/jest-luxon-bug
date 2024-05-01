const DateTime = require("luxon").DateTime

const aNewDateTime = () => DateTime.fromObject({ year: 2000 })

const sharedDate = aNewDateTime()

it('all looks fine to start with', () => {
    expect(sharedDate).toEqual(aNewDateTime())
})

it('but any failure involving a date time + object...', async () => {
    expect(sharedDate).toEqual({})
})

it('...seems to somehow "taint" that specific datetime', () => {
    expect(sharedDate).toEqual(aNewDateTime())
})