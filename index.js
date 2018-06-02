var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { object[key] = value;
return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, key)
  delete clone
  return Object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}