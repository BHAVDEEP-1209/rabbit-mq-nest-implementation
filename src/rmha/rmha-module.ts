import { Module } from "@nestjs/common";
import { SampleCommand } from "./commands/sample-command";

@Module({
    imports: [SampleCommand]
})
export class RmhaModule { }