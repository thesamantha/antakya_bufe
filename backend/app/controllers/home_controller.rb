class HomeController < ApplicationController
  def index
    @posts = Post.all
    #binding.irb
  end
end
