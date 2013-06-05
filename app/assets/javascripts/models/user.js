Issueviewer.Models.User = Backbone.Model.extend({
    paramRoot: 'user',
    defaults: function() {
        return {
            login: '',
            id: '',
            avatar_url: '',
            gravatar_id: '',
            url: '',
            profile: ''
        }
    },
    toJSON: function() {
        //json = _.clone({user: this.attributes});
        json = this.attributes;
        return json;
        //return _.extend(json, {user: this.get("user").toJSON()});
    },
    parse: function(response, options) {
        return {
            "login": response.login,
            "id": response.id,
            "avatar_url": response.avatar_url,
            "gravatar_id": response.gravatar_id,
            "url": response.url,
            "profile": response.html_url
        }
    }
});