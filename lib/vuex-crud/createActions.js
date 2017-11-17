'use strict';

exports.__esModule = true;
var createActions = function createActions(_ref) {
  var actions = _ref.actions,
      rootUrl = _ref.rootUrl,
      client = _ref.client,
      only = _ref.only,
      parseList = _ref.parseList,
      parseSingle = _ref.parseSingle,
      parseError = _ref.parseError;

  var crudActions = {};

  if (only.includes('FETCH_LIST')) {
    Object.assign(crudActions, {
      /**
       * GET /api/<resourceName>
       *
       * Fetch list of resources.
       */
      fetchList: function fetchList(_ref2) {
        var commit = _ref2.commit;

        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            config = _ref3.config;

        commit('fetchListStart');

        return client.get(rootUrl, config).then(function (res) {
          var parsedResponse = parseList(res);

          commit('fetchListSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('fetchListError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes('FETCH_SINGLE')) {
    Object.assign(crudActions, {
      /**
       * GET /api/<resourceName>/:id
       *
       * Fetch single resource.
       */
      fetchSingle: function fetchSingle(_ref4) {
        var commit = _ref4.commit;

        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref5.id,
            config = _ref5.config;

        commit('fetchSingleStart');

        return client.get(rootUrl + '/' + id, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('fetchSingleSuccess', parsedResponse);

          return res;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('fetchSingleError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes('CREATE')) {
    Object.assign(crudActions, {
      /**
       * POST /api/<resourceName>
       *
       * Create a new reource.
       */
      create: function create(_ref6) {
        var commit = _ref6.commit;

        var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            data = _ref7.data,
            config = _ref7.config;

        commit('createStart');

        return client.post(rootUrl, data, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('createSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('createError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes('UPDATE')) {
    Object.assign(crudActions, {
      /**
       * PATCH /api/<resouceName>/:id
       *
       * Update a single resource.
       */
      update: function update(_ref8) {
        var commit = _ref8.commit;

        var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref9.id,
            data = _ref9.data,
            config = _ref9.config;

        commit('updateStart');

        return client.patch(rootUrl + '/' + id, data, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('updateSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('updateError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes('REPLACE')) {
    Object.assign(crudActions, {
      /**
       * PUT /api/<resouceName>/:id
       *
       * Update a single resource.
       */
      replace: function replace(_ref10) {
        var commit = _ref10.commit;

        var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref11.id,
            data = _ref11.data,
            config = _ref11.config;

        commit('replaceStart');

        return client.put(rootUrl + '/' + id, data, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('replaceSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('replaceError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes('DESTROY')) {
    Object.assign(crudActions, {
      /**
       * DELETE /api/<resouceName>/:id
       *
       * Destroy a single resource.
       */
      destroy: function destroy(_ref12) {
        var commit = _ref12.commit;

        var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref13.id,
            config = _ref13.config;

        commit('destroyStart');

        return client.delete(rootUrl + '/' + id, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('destroySuccess', id, parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('destroyError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  return Object.assign(crudActions, actions);
};

exports.default = createActions;