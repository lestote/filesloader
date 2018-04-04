const fs = require('fs');
const path = require('path');

const getFilesInDir = (dir, file) => {
    return fs.readdirSync(dir, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        return files
            .filter((filename) => filename.match(/\.gif$/))
            .map((filename) => filename);
    });
};

const start = (files, entry) => files.map(file => getFilesInDir(`${entry}/${file}`, file));

try {
    const entry = path.resolve(__dirname, '../src/images');
    const gifFile = path.resolve(__dirname, '../src/gif.map.js');

    fs.readdir(entry, (err, files) => {
        const content = `module.exports = ${JSON.stringify(start(files, entry))};`;
        fs.writeFileSync(
            gifFile,
            content,
            (err) => {
                if (err) throw err;
            }
        );
    });
} catch(error) {
    throw new Error(error);
}