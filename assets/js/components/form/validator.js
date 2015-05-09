function convert(value) {
    return value || '';
}

module.exports = {
    required: {
        validate: (value) => ('' + convert(value)).length > 0,
        message: 'This field is required'
    },
    email: {
        validate: (value) => /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value),
        message: 'This is invalid email'
    },
    minLength(length) {
        return {
            validate: (value) => ('' + convert(value)).length >= length,
            message: `Value should be at least ${length} symbols`
        };
    }
};