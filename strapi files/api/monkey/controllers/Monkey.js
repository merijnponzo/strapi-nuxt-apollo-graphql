'use strict';

/**
 * Monkey.js controller
 *
 * @description: A set of functions called "actions" for managing `Monkey`.
 */

module.exports = {

  /**
   * Retrieve monkey records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.monkey.search(ctx.query);
    } else {
      return strapi.services.monkey.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a monkey record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.monkey.fetch(ctx.params);
  },

  /**
   * Count monkey records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.monkey.count(ctx.query);
  },

  /**
   * Create a/an monkey record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.monkey.add(ctx.request.body);
  },

  /**
   * Update a/an monkey record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.monkey.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an monkey record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.monkey.remove(ctx.params);
  }
};
