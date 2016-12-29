const nonEmptyStringSerialier = {
  serialize: x => x || '',
  deserialize: x => x == '' ? null : x,
}


/**
 * Define a parameter which is available for all Routes through a specific branch.
 * 
 * @param {Object}          options
 * @param {function | any}  options.default     A default value, or function to generate one
 * @param {boolean}         options.required    Throw an error if a route is created without this param
 * @param {Serializer}      options.serializer  How to serialize/deserialize
 */
export function createParamType(options = {}) {
  let serializer
  if (options !== true && 'serializer' in options) {
    if (
      !options.serializer ||
      typeof options.serializer.serialize !== 'function' ||
      typeof options.serializer.deserialize !== 'function'
    ) {
      throw new Error(`A junctions Serializer must specify serialize, deserialize`)
    }

    serializer = {
      serialize: options.serializer.serialize,
      deserialize: options.serializer.deserialize
    }
  }
  else {
    serializer = nonEmptyStringSerialier
  }
  
  const param = {
    default: options.default,
    required: options.required || false,
    serializer: serializer,
  }

  return param
}


export function deserializeParams(paramTypes, params) {
  const deserializedParams = {}
  const keys = Object.keys(params)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    const serializer = paramTypes[key].serializer
    const serializedValue = params[key]
    deserializedParams[key] = serializer.deserialize(decodeURIComponent(serializedValue))
  }
  return deserializedParams
}

export function serializeParams(paramTypes, params) {
  const serializedParams = {}
  const keys = Object.keys(params)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    const serializedValue = encodeURIComponent(paramTypes[key].serializer.serialize(params[key]))
    if (serializedValue !== undefined) {
      serializedParams[key] = serializedValue
    }
  }
  return serializedParams
}
