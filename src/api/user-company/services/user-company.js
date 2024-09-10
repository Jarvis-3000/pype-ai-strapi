'use strict';

/**
 * user-company service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-company.user-company');
