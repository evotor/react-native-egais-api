import {NativeModules} from 'react-native'
import {defaultExecutor} from 'abstract-query-builder'

const executor = (entityName, outerPrototype, innerPrototypes) =>
    defaultExecutor(NativeModules.EgaisModule.query, entityName, outerPrototype, innerPrototypes);

export default executor;