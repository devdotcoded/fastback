import { Field } from "../abstract/Field";
import StringFieldTemplate from "@/views/fields/string.svelte";

export class StringField extends Field {

    public view() {
        return StringFieldTemplate;
    }

}