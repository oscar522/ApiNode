import { envVars } from './env-vars.config'
describe('env-vars.config', (): void => {
  const GetEnvVars = new envVars()

  it('Should create an instance ', (): void => {
    expect(GetEnvVars).toBeInstanceOf(envVars)
  })

  it('Should consume an instance', async (): Promise<void> => {
  process.env.DOCUMENT_TYPE_HOMOLOGATION = "[{\"value\":\"1\",\"name\":\"RUT\"}, {\"value\":\"2\",\"name\":\"RUT1\"}]"
  const response = await GetEnvVars.getJSONArray("DOCUMENT_TYPE_HOMOLOGATION")
    expect(response).toEqual([{"name": "RUT", "value": "1"}, {"name": "RUT1", "value": "2"}])
  })

  it('Should consume an instance error', async (): Promise<void> => {
    process.env.DOCUMENT_TYPE_HOMOLOGATION = "[\"value\":\"1\",\"name\":\"RUT\"}, {\"value\":\"2\",\"name\":\"RUT1\"}]"
    const response = await GetEnvVars.getJSONArray("DOCUMENT_TYPE_HOMOLOGATION")
      expect(response).toEqual(null)
    })

})
