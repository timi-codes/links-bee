import AppDataSource from "./app.datasource";
import { Redis } from "ioredis";


class ReBloomFilter extends AppDataSource {
    commands: string[] = ['BF.ADD', 'BF.EXISTS', 'BF.RESERVE']
    cmds = {}

    constructor(options){
        super(options)
        this.cache = options.cache as Redis;
        this.commands.forEach((command) => {
            const cmd = this.cache.createBuiltinCommand(command)
            this.cmds[command] = cmd.string;
            this.cmds[`${command}Buffer`] = cmd.buffer;
        });

        const cmd = this.cmds['BF.RESERVE'];
        cmd.call(this.cache, "model:link", 0.01, 1000);
    }

    // get({ id, model }: { id: string; model: string}): Promise<any> {
    //     const cmd = this.cmds['BF.EXISTS'];
    //     const key = `${model}`;
    //     const exist = cmd.call(this.cache, this.cacheKey(key), id);
    //     if(exist) {

    //     }

    // }
}