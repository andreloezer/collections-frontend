import { createContext } from 'react';

export const collectionContext = createContext({
    collection: {},
    setCollection: () => {},
});
