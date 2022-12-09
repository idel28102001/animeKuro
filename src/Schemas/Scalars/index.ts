import { GraphQLError, GraphQLScalarType, Kind } from "graphql";

function isDate(value: number) {
    if (typeof value === 'number' && Number.isInteger(value) && value.toString().length===8) {
      return value;
    }
    throw new GraphQLError('Provided value is not an 8 digit long date integer');
  }

  const DateResolver = {
    Date: new GraphQLScalarType({
        name: "Date",
        description: "8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500",
        parseValue: isDate,
        serialize: isDate,
        parseLiteral(ast) {
            if (ast.kind===Kind.INT) {
                return isDate(parseInt(ast.value,10));
            }
            throw new GraphQLError('Provided value is not an 8 digit long date integer');
        }
    })
  }



export default {resolver: DateResolver, text: "scalar Date"};