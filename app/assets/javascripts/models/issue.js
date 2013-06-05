Issueviewer.Models.Issue = Backbone.Model.extend({
    defaults: {
        // custom properties not related to json response
        shortened_issue_body: "No description given.",
        full_issue_html: "No description given.",
        label_badges: null,
        comment_count: null,
        state_badge: null,
        issue_title_text: ''
    },
    idAttribute: "number",
    urlRoot: "/issues",
    toJSON: function() {
        var json = _.clone({ issue: this.attributes });
        return json;
    },
    initialize: function() {
        var body_text = this.get("body_text");
        var comments = Number(this.get("comments"));
        this.set("shortened_issue_body", (body_text.length > 140) ? (body_text.trim().substring(0, body_text.lastIndexOf(' ', 140)) + '...') : ((body_text.length == 0) ? null : body_text));
        this.set("full_issue_html", (this.get("body_html").length == 0) ? null : this.get("body_html"));
        this.set("label_badges", $.map(this.get("labels"), function(val, i) { return '<span class="label label-info">'+val.name+"</span>"; }).join(" "));
        this.set("comment_count", (comments > 0) ? '<i class="icon-comment"></i> ' + comments + ((comments > 1) ? " comments" : " comment") : null);
        this.set("state_badge", (this.get("state") == "open") ? '<a href="#" class="btn btn-success disabled">Open</a>' : '<a href="#" class="btn btn-danger disabled">Closed</a>');
        this.set("issue_title_text", _.escape(this.get("title")));
    }
});
