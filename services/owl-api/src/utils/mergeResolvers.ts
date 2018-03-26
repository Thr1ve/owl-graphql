// From: https://github.com/apollographql/graphql-tools/blob/master/src/mergeDeep.ts

const isObject = (item: any): Boolean => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const mergeDeep = (target: object, source: object): object => {
  let output = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};

export const mergeResolvers = (resolvers: object[]): object =>
  resolvers.reduce((prev, cur) => mergeDeep(prev, cur), {});
