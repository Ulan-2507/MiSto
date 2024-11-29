import fs from 'fs/promises';
import resolveRoot from '../resolveRoot.js';
import firstCharUpperCase from '../firstCharUpperCase.js';

export default async (layer, sliceName) => {
    const componentName = firstCharUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`,
        );
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
};
