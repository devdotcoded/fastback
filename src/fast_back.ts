import type { Resource } from "@/models/Resource";
import Main from "@/views/main.svelte";
import { writable } from "svelte/store";

export const currentResourceSlug = writable<null | string>(null);

export interface FastBackConfig {
    name: string;
    resources: Resource[];
}

let config: FastBackConfig | undefined = undefined;


export function FastBack(fastBackConfig: FastBackConfig) {
    config = fastBackConfig;

    new Main({ target: document.body });
}

function getConfig(): FastBackConfig {
    if (!config) {
        throw new Error('Please first call Fastback');
    }
    return config;
}

export function getResources(): Resource[] {
    return getConfig().resources;
}

export function getResourceBySlug(slug: string | null): Resource | null {
    const resource = getConfig().resources.find(resource => resource.getSlug() === slug);
    if (!resource) {
        return null
    }
    return resource;
}