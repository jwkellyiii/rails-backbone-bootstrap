class IssuesController < ApplicationController
  respond_to :html, :json

  # GET /issues
  # GET /issues.json
  def index
    github = Github.new
    #@repo = github.repos.get(:user => "rails", :repo => "rails")
    @page = (params[:page].nil?) ? 1 : params[:page]
    @issues = github.issues.list(:user => 'rails', :repo => 'rails', :per_page => 25, :page => @page.to_i)

    @paging = {page: @page.to_i, totalpages: @issues.count_pages}

    respond_with(@issues, @paging)
  end

  # GET /issues/1
  # GET /issues/1.json
  def show
    github = Github.new
    @issue = github.issues.get(:user => 'rails', :repo => 'rails', :number => params[:id])
    @comments = github.issues.comments.all(:user => 'rails', :repo => 'rails', :issue_id => params[:id]) unless @issue.comments == 0

    respond_with(:issue => @issue, :comments => @comments)
  end
end
