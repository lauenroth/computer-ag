import {
  anmeldungen,
  anmeldung,
  createAnmeldung,
  updateAnmeldung,
  deleteAnmeldung,
} from './anmeldungen'

describe('anmeldungen', () => {
  scenario('returns all anmeldungen', async (scenario) => {
    const result = await anmeldungen()

    expect(result.length).toEqual(Object.keys(scenario.anmeldung).length)
  })

  scenario('returns a single anmeldung', async (scenario) => {
    const result = await anmeldung({ id: scenario.anmeldung.one.id })

    expect(result).toEqual(scenario.anmeldung.one)
  })

  scenario('creates a anmeldung', async () => {
    const result = await createAnmeldung({
      input: { email: 'String1564191', name: 'String', klasse: 'String' },
    })

    expect(result.email).toEqual('String1564191')
    expect(result.name).toEqual('String')
    expect(result.klasse).toEqual('String')
  })

  scenario('updates a anmeldung', async (scenario) => {
    const original = await anmeldung({ id: scenario.anmeldung.one.id })
    const result = await updateAnmeldung({
      id: original.id,
      input: { email: 'String55897532' },
    })

    expect(result.email).toEqual('String55897532')
  })

  scenario('deletes a anmeldung', async (scenario) => {
    const original = await deleteAnmeldung({ id: scenario.anmeldung.one.id })
    const result = await anmeldung({ id: original.id })

    expect(result).toEqual(null)
  })
})
