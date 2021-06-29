import { ApiDriver } from "../abstract/ApiDriver";

export class Rest extends ApiDriver {
    constructor(private route: string) {
        super()
    }
}