class Issue < ActiveRecord::Base
  attr_accessible :title, :labels, :username, :gravatar, :body
end
