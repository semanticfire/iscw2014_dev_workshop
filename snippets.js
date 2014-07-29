/**
 * 
 */

enyo
		.kind({
			name : "C1",
			kind : "FittableRows",
			components : [ {
				name : "T",
				kind : "input"
			} ],
			rendered : function() {
				// rdflib.js initialization

				var kb = new $rdf.IndexedFormula();
				kb.sf = new $rdf.Fetcher(kb);

				// load data and fire up
				kb.sf
						.nowOrWhenFetched(
								workUri, // the URI of the linked data
											// resource
								// we want to work with
								undefined,
								function(ok, body) {
									// PSEUDO CODE!

									var resultSet = kb
											.query("select ?n where { ?s a foaf:Person . s? foaf:name ?n}");

									this.$.T.setValue(resultSet[0].n);

								}.bind(this));

			}
		});

enyo.kind({
	name : "C2",
	kind : "FittableRows",
	components : [ {
		name : "P",
		kind : "netage.ldproperty",
		property : "http://xmlns.com/foaf/0.1/name",
		components : [ {
			name : "T",
			kind : "input"
		} ]
	} ],
	rendered : function() {
		var kb = new $rdf.IndexedFormula();
		kb.sf = new $rdf.Fetcher(kb);

		// load data and fire up
		kb.sf.nowOrWhenFetched(workUri, // the URI of the linked data resource
		// we want to work with
		undefined, function(ok, body) {
			// get the subject for type foaf:Person
			messages = kb.statementsMatching(undefined, new $rdf.Symbol(
					'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
					new $rdf.Symbol('http://xmlns.com/foaf/0.1/Person'),
					undefined, true);

			// do the watterfall down of the first matching subject
			this.waterfall("onGraphReady", {
				graph : kb,
				resource : messages[0].subject.uri
			});
		}.bind(this));

	}
});


enyo.kind({
	name : "C2_2",
	kind : "FittableRows",
	components : [ {
		name : "P",
		kind : "netage.ldproperty",
		property : "http://xmlns.com/foaf/0.1/name",
		components : [ {
			name : "T",
			kind : "input"
		} ]
	} ],
	rendered : function() {
		var kb = new $rdf.IndexedFormula();
		kb.sf = new $rdf.Fetcher(kb);

		// load data and fire up
		kb.sf.nowOrWhenFetched(workUri, // the URI of the linked data resource
		// we want to work with
		undefined, function(ok, body) {
			// get the subject for type foaf:Person
			messages = kb.statementsMatching(undefined, new $rdf.Symbol(
					'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
					new $rdf.Symbol('http://xmlns.com/foaf/0.1/Person'),
					undefined, true);

			// do the watterfall down of the first matching subject
			this.waterfall("onGraphReady", {
				graph : kb,
				resource : messages[0].subject.uri
			});
		}.bind(this));

	}
});

enyo.kind({
	name : "C3",
	kind : "FittableRows",
	components : [ {
		name : "P_1",
		kind : "netage.ldproperty",
		property : "http://xmlns.com/foaf/0.1/knows",
		components : [ {
			name : "P_2",
			kind : "netage.ldproperty",
			property : "http://xmlns.com/foaf/0.1/name",
			components : [ {
				name : "T",
				kind : "input"
			} ]
		} ]
	} ],
	rendered : function() {
		var kb = new $rdf.IndexedFormula();
		kb.sf = new $rdf.Fetcher(kb);

		// load data and fire up
		kb.sf.nowOrWhenFetched(workUri, // the URI of the linked data resource
		// we want to work with
		undefined, function(ok, body) {
			// get the subject for type foaf:Person
			messages = kb.statementsMatching(undefined, new $rdf.Symbol(
					'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
					new $rdf.Symbol('http://xmlns.com/foaf/0.1/Person'),
					undefined, true);

			// do the watterfall down of the first matching subject
			this.waterfall("onGraphReady", {
				graph : kb,
				resource : messages[0].subject.uri
			});
		}.bind(this));

	}
});
