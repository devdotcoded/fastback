import { Field } from "@/models/abstract/Field";
import NumberFieldTemplate from "@/views/fields/number.svelte";

export class NumberField extends Field {
    
    public view() {
        return NumberFieldTemplate;
    }
}