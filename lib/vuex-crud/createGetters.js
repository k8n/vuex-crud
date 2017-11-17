"use strict";

exports.__esModule = true;
/**
 * Create default getters and merge them with getters defined by a user.
 */
var createGetters = function createGetters() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      getters = _ref.getters,
      idAttribute = _ref.idAttribute;

  return Object.assign({}, {
    /**
     * Return array of resources.
     */
    list: function list(state) {
      return state.list.map(function (id) {
        return state.entities[id.toString()];
      });
    },


    /**
     * Return array of singles (used internally by `byId` getter)
     */
    singles: function singles(state) {
      return state.singles.map(function (id) {
        return state.entities[id.toString()];
      });
    },


    /**
     * Get resource by id.
     */
    byId: function byId(state, mutationsGetters) {
      return function (id) {
        return mutationsGetters.singles.find(function (item) {
          var itemId = item[idAttribute];

          return itemId && itemId.toString() === id.toString();
        }) || null;
      };
    },


    /**
     * Return true if there is a ongoing request.
     */
    isLoading: function isLoading(state) {
      return state.isFetchingList || state.isFetchingSingle || state.isCreating || state.isUpdating || state.isReplacing || state.isDestroying;
    }
  }, getters);
};

exports.default = createGetters;