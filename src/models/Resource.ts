import type { ApiDriver } from "./abstract/ApiDriver";
import type { Field } from "./abstract/Field";
import ResourceView from "@/views/pages/resource.svelte";
import type { SvelteComponent } from "svelte";

export interface ResourceConfig {
    name: string;
    slug?: string;
    fields: Field[],
    apiDriver: ApiDriver
}

export class Resource {
    public constructor(private config: ResourceConfig) { }

    public getSlug(): string {
        if (this.config.slug) {
            return this.config.slug;
        }

        return this.config.name.replaceAll(' ', '-').toLowerCase();
    }

    public getView(): typeof SvelteComponent {
        return ResourceView;
    }

    public getName(): string {
        return this.config.name;
    }

    public getFields(): Field[] {
        return this.config.fields;
    }
}