const { fetchSummary } = require('../mainService')

test('fetchSummaryData', () => {
    return fetchSummary().then(data => {
        expect(data.status).toBe(200);
    });
});