import {NativeModules} from 'react-native'
import {resultReader} from 'abstract-query-builder'

const defaultExecutor = (entityName, outerPrototype, innerPrototypes?) =>
    (selection, selectionArgs, sortOrderLimit) =>
        new Promise(resolve =>
            NativeModules.EgaisModule.query(
                entityName,
                selection,
                selectionArgs,
                sortOrderLimit,
                resultReader(resolve, outerPrototype, innerPrototypes)
            )
        );

export default defaultExecutor;