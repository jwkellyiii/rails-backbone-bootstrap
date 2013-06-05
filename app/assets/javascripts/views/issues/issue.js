Issueviewer.Views.IssueItem = Support.CompositeView.extend({
    tagName: "div",
    className: "media",
    template: JST['issues/issue'],
    id: function() {
        return "issue_" + this.model.id;
    },
    initialize: function() {
        _.bindAll(this, "render");
    },
    render: function () {
        var json = this.model.toJSON();
        this.$el.html(this.template(json));
        return this;
    }
});