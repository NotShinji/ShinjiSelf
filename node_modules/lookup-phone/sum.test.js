const lookup = require('./index')

test('Insert the number +35191999999 has to be Vodafone, Portugal', () => {
    lookup(35191999999).then(data => {
        expect(data).toBe('Vodafone, Portugal')
    })
})

test('Insert the number +35193999999 has to be Optimus, Portugal', () => {
    lookup(35193999999).then(data => {
        expect(data).toBe('Optimus, Portugal')
    })
})

test('Insert the number +35193999990 has to be Optimus, Portugal', () => {
    lookup(35193999990).then(data => {
        expect(data).toBe('Optimus, Portugal')
    })
})

test('Insert the number +35196999999 has to be Telecomunicações Móveis Nacionais, S.A. (TMN), Portugal', () => {
    lookup(35196999999).then(data => {
        expect(data).toBe('Telecomunicações Móveis Nacionais, S.A. (TMN), Portugal')
    })
})

test('Insert the number +34642222222 has to be Best Spain Telecom, S.l., Spain', () => {
    lookup(34642222222).then(data => {
        expect(data).toBe('Best Spain Telecom, S.l., Spain')
    })
})

