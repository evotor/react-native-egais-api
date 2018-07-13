import executor from "./executor";

export default class ClientSettings {

    static getFsRarId = (): Promise<(string | null)> => executor("FsRarId")

}