import * as Joi from '@hapi/joi';

export const registerSchema = Joi.object({
    url: Joi.string().required(),
});
