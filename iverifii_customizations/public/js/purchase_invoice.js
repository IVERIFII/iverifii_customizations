frappe.ui.form.on('Purchase Invoice', {
	setup: function(frm) {
		frm.set_query("iverifii_doc_location", function() {
			return{
				filters: {
					"is_group": 0,
					"company": cstr(frm.doc.company)
				}
			}
		});
	}
});