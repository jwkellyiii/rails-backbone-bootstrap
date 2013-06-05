Issueviewer.Routers.Issues = Support.SwappingRouter.extend({
    initialize: function(options) {
        this.el = $('#issues');
        this.collection = options.collection;
        this.issues = options.issues;
        this.paging = options.paging;
    },
    routes: {
        'issues/:id':   'show',
        'page/:id':     'issuePaging',
        '':             'index'
    },
    index: function() {
        var view = new Issueviewer.Views.IssuesIndex({ collection: this.collection, paging: this.paging });
        this.swap(view);
    },
    show: function(issueId) {
        var issue = this.collection.get(issueId);
        var router = this;

        issue.fetch({
            success: function() {
                var view = new Issueviewer.Views.IssueShow({ model: issue });
                router.swap(view);
            },
            error: function(collection, response, options) {
                console.log("fetch error");
            }
        });
    },
    issuePaging: function(pageId) {
        var router = this;
        var issues = this.collection.fetch({
            data: {page: pageId},
            success: function(collection, response, options) {
                router.paging.page = pageId;
                var view = new Issueviewer.Views.IssuesIndex({ collection: router.collection, paging: router.paging });
                router.swap(view);
            },
            error: function(collection, response, options) {
                console.log("fetch error");
            }
        });
    }
});
