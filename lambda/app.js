const csv = require('async-csv');
const axios = require('axios');
const CSV_ADDRESS = 'https://cdn.jsdelivr.net/gh/t5-digital/hackday_customers@main/MOCK_DATA.csv'
 

module.exports = {
    run: async () => {
        const csvString = await axios(CSV_ADDRESS);
        const rows = await csv.parse(csvString.data);
        const keys = rows[0];
        rows.shift();
        return rows.map(
            r => {
                const output = {};

                keys.forEach((k, i) => {
                    output[k] = r[i];
                })

                return output;
            }
        );
    }
}