import { Command, CommandRunner, Option } from "nest-commander";

@Command({ name: 'basic', description: 'A parameter parse' })
export class SampleCommand extends CommandRunner {

    @Option({
        flags: '-l, --limit <limit>',
        description: 'Limit option',
        defaultValue: 10,
    })
    parseLimit(val: string): number {
        return Number(val);
    }

    run(passedParams: string[], options?: Record<string, any>): any {
        console.log('running command');
        console.log('params', passedParams);
        console.log('options', options);
    }
}