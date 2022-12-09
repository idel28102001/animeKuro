
import gpl from 'graphql-tag';
import Media from './Media';
import Page from './Page';
import Character from './Character';
import DateScalar from "./Scalars";
import Staff from './Staff';
import Similar from './Similar';

const types: Array<string> = [];
const queries: Array<string> = [];
const mutations: Array<string> = [];
const inputs: Array<string> = [];
const interfaces: Array<string> = [];
const enums: Array<string> = [];

const schemas = [Media,Page, Character, Staff, Similar];
schemas.forEach(e =>{
    types.push(e.types);
    queries.push(e.queries);
    mutations.push(e.mutations);
    inputs.push(e.inputs);
    interfaces.push(e.interfaces);
    enums.push(e.enums);
});


export default gpl`
    ${DateScalar.text}
    ${types.join('\n')}
    ${inputs.join('\n')}
    ${interfaces.join('\n')}
    ${enums.join('\n')}
    type Query {
        ${queries.join('\n')}
    }
    type Mutation {
        ${mutations.join('\n')}
    }
`;
