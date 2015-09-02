var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * MLS Model
 * =============
 */

var MLS = new keystone.List('MLS', {
	map: { name: 'MLS' },
	nocreate: true,
	noedit: true
});

MLS.add({
	MLS: { type: String, required: true },
	createdAt: { type: Date, default: Date.now }
});

MLS.defaultSort = '-createdAt';
MLS.defaultColumns = 'MLS,createdAt';
MLS.register();
