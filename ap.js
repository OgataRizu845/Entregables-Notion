const { Client } = require('@notionhq/client');

const fs = require('fs');
async function getNotionData() {
  const notion = new Client({
    auth: 'secret_fsKioQSn8HZccqdVRVdp0M6VTuwe3KiFho0du8Rr8YJ',
  });
  const results = await notion.databases.query({
    database_id: '593f1779e4844471b92396de19e724f6',
  });
  fs.writeFileSync('data.json', JSON.stringify(results, null, 2));

}


getNotionData();