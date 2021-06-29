import { Rest } from "./models/ApiDrivers/Rest";
import { Backend } from "./models/Backend";
import { NumberField } from "./models/fields/NumberField";
import { StringField } from "./models/fields/StringField";
import { Resource } from "./models/Resource";

new Backend({
    name: "Test",
    resources: [
        new Resource({
            name: "Resource 1",
            apiDriver: new Rest('localhost/res1'),
            fields: [
                new NumberField('id', 'Identifier'),
                new StringField('name', 'User Name')
            ]
        }),
        new Resource({
            name: "Resource 2",
            apiDriver: new Rest('localhost/res2'),
            fields: [
                new NumberField('id', 'Identifier'),
                new StringField('name', 'User Name')
            ]
        })
    ]
});