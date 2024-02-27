import Redis from "ioredis";

export default class ReBloom {
    commands = ['BF.ADD', 'BF.EXISTS', 'BF.RESERVE']
    cmds = {}
    client: Redis
    constructor(redis: Redis) {
      this.client = redis;
      this.commands.forEach((command) => {
        const cmd = redis.createBuiltinCommand(command);
        this.cmds[command] = cmd.string;
        this.cmds[`${command}Buffer`] = cmd.buffer;
      });
    }
  
    add(key: string, value: string): Promise<number> {
      const cmd = this.cmds['BF.ADD'];
      return cmd.call(this.client, key, value);
    }
  
    exists(key: string, value: string): Promise<number> {
      const cmd = this.cmds['BF.EXISTS'];
      return cmd.call(this.client, key, value);
    }
  
    reserve(key: string, errRate: number, capacity: number): Promise<number> {
      // errRate is false positive, it means the key doesn't actually exists, but the result shows it exists
      const cmd = this.cmds['BF.RESERVE'];
      return cmd.call(this.client, key, errRate, capacity);
    }
  }