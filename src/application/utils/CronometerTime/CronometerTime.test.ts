import { CronometerTime } from './CronometerTime'

describe('CronometerTime', (): void => {
  const GetCronometerTime = new CronometerTime()

  it('Should create an instance ', (): void => {
    expect(GetCronometerTime).toBeInstanceOf(CronometerTime)
  })

  it('Should consume an instance', async (): Promise<void> => {
    await GetCronometerTime.setInitTime(new Date)
    const response = await GetCronometerTime.getInteval(new Date)
    expect(response).toEqual(response)
  })
})
