const DateTime = require("luxon").DateTime

const aNewDateTime = () => DateTime.fromObject({ year: 2000 })

const sharedDate = aNewDateTime()

it('luxon dates are immutable, and can be compared using toEqual', () => {
    expect(sharedDate).toEqual(aNewDateTime())
})

it('but any failure involving a date time + object...', async () => {
    expect(sharedDate).toEqual({})
})

it('...seems to somehow "taint" that specific datetime in subsequent tests', () => {
    expect(sharedDate).toEqual(aNewDateTime())
})