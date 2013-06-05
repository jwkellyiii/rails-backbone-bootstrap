window.Issueviewer = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function(data) {
        //this.issues = new Issueviewer.Collections.Issues(data.issues, { parse: true });
        this.issues = new Issueviewer.Collections.Issues(data.issues);
        this.paging = data.paging;

        new Issueviewer.Routers.Issues({ collection: this.issues, paging: this.paging });
        if (!Backbone.history.started) {
            Backbone.history.start();
            Backbone.history.started = true;
        }
    }
};