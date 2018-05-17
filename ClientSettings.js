import {NativeModules} from 'react-native'

export default class ClientSettings {

    static getFsRarId(): Promise<(string | null)> {
        return new Promise(
            resolve => NativeModules.EgaisModule.query(
                "FsRarId",
                null,
                null,
                null,
                (result) => resolve(result[0] ? result[0].FsRarId : null)
            )
        );
    }

}