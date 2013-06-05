Issueviewer.Views.IssuesIndex = Support.CompositeView.extend({
    template: JST['issues/index'],
    initialize: function(options) {
        _.bindAll(this, "render");
        this.paging = options.paging;
    },
    render: function () {
        this.renderTemplate();
        this.renderIssues();
        scrollToTop();
        return this;
    },
    renderTemplate: function() {
        this.$el.html(this.template({ issues: this.collection, paging: this.paging }));
    },
    renderIssues: function() {
        var self = this;
        self.$('#issues-list').empty();

        this.collection.each(function(issue) {
            var view = new Issueviewer.Views.IssueItem({
                model: issue
            });
            self.$('#issues-list').append(view.render().el);
        });
    }
});
