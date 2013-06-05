Issueviewer.Views.IssueShow = Support.CompositeView.extend({
    template: JST['issues/show'],
    initialize: function() {
        _.bindAll(this, "render");
        this.bindTo(this.model, "change", this.render);
    },
    render: function () {
        this.renderTemplate();
        return this;
    },

    renderTemplate: function() {
        $("#issues").html(this.template(this.model.toJSON()));
        scrollToTop();
    }
});
