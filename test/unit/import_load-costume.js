const Storage = require('scratch-storage');
const tap = require('tap');

const {loadCostume} = require('../../src/import/load-costume.js');

tap.tearDown(() => process.nextTick(process.exit));

tap.test('loadCostume throws error when storage cannot find asset', t => {
    const md5ext = 'hello.svg';
    const storage = new Storage(); // Without any sources, it'll always not find the asset
    const runtime = {storage};
    const costume = {my: 'costume'};
    loadCostume(md5ext, costume, runtime)
        .catch(e => {
            t.equal(e, 'Could not load costume');
            t.end();
        });
});
