import firstCharUpperCase from '../firstCharUpperCase.js';

export default (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;

    return `import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@app/store';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {
    
};

export const ${sliceName}Slice = buildSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});


export const {
    actions: ${sliceName}Actions,
    reducer: ${sliceName}Reducer,
    useActions: use${sliceName}Actions,
} = ${sliceName}Slice;
`;
};
