import type { SvelteComponent } from "svelte";

export abstract class Field {
    constructor(protected key: string, protected name: string) { }

    public abstract view(): typeof SvelteComponent;
    public props() {
        return {
            key: this.key,
            name: this.name
        }
    };

}