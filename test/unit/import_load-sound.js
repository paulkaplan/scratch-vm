const Storage = require('scratch-storage');
const tap = require('tap');

const {loadSound} = require('../../src/import/load-sound.js');

tap.tearDown(() => process.nextTick(process.exit));

tap.test('loadSound throws error when storage cannot find asset', t => {
    const md5ext = 'hello.wav';
    const storage = new Storage(); // Without any sources, it'll always not find the asset
    const runtime = {storage};
    const sound = {md5: md5ext};
    loadSound(sound, runtime)
        .catch(e => {
            t.equal(e, 'Could not load sound');
            t.end();
        });
});
