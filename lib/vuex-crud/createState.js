'use strict';

exports.__esModule = true;
var createState = function createState(_ref) {
  var state = _ref.state,
      only = _ref.only;

  var crudState = {
    entities: {},
    list: [],
    singles: []
  };

  if (only.includes('FETCH_LIST')) {
    Object.assign(crudState, {
      isFetchingList: false,
      fetchListError: null
    });
  }

  if (only.includes('FETCH_SINGLE')) {
    Object.assign(crudState, {
      isFetchingSingle: false,
      fetchSingleError: null
    });
  }

  if (only.includes('CREATE')) {
    Object.assign(crudState, {
      isCreating: false,
      createError: null
    });
  }

  if (only.includes('UPDATE')) {
    Object.assign(crudState, {
      isUpdating: false,
      updateError: null
    });
  }

  if (only.includes('REPLACE')) {
    Object.assign(crudState, {
      isReplacing: false,
      replaceError: null
    });
  }

  if (only.includes('DESTROY')) {
    Object.assign(crudState, {
      isDestroying: false,
      destroyError: null
    });
  }

  return Object.assign(crudState, state);
};

exports.default = createState;