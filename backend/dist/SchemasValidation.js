import sanitizeHTML from "sanitize-html";
import Basejoi from 'joi';
//Preventing extra code been run from client side 
const extension = (joi) => ({
    type: "string",
    base: joi.string(),
    messages: {
        "string.escapeHTML": "{{#label}} must not include HTML"
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHTML(value, {
                    allowedTags: [],
                    allowedAttributes: {}
                });
                if (clean !== value)
                    return helpers.error("string.escapeHTML", { value });
                return clean;
            }
        }
    }
});
const Joi = Basejoi.extend(extension);
//Validation for Server side
export const postSchema = Joi.object({
    content: Joi.string().escapeHTML()
});
export const commentSchema = Joi.object({
    content: Joi.string().required().escapeHTML()
});
export const userSchema = Joi.object({
    email: Joi.string().email().required().escapeHTML(),
    username: Joi.string().required().min(3).max(10).escapeHTML(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,20}$')),
    first_name: Joi.string().escapeHTML(),
    last_name: Joi.string().escapeHTML(),
    gender: Joi.string().escapeHTML(),
    date_of_birth: Joi.string().escapeHTML(),
    country: Joi.string().escapeHTML(),
    city: Joi.string().escapeHTML(),
    professional: Joi.string().escapeHTML(),
    about_me: Joi.string().escapeHTML(),
    avatar: Joi.string().escapeHTML()
});
