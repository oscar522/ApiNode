import { checkHash256 } from './utils'


describe('utils', (): void => {
  const GetUtils = new checkHash256("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjQ4ODQyODYwfQ.ReBihA-uDsIHSi2CfhubrNbHLdIZHNZMK7dEx7y-kGY", "466792a00e4fc4a673417d8ba69f49573cd0601c64e6856bc98cec8b4549133a")

  it('Should create an instance ', (): void => {
    expect(GetUtils).toBeInstanceOf(checkHash256)
  })

  it('Should consume an instance', async (): Promise<void> => {
  const response = await GetUtils.checkHash256()
      expect(response).toEqual(false)
    })

})
