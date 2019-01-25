class HomeController < ApplicationController
  def index
    @posts = Post.all
    #binding.irb
    render :layout => false
  end
end
